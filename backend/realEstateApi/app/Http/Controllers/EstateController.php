<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EstateController extends Controller
{



    public function ListAllEstates(request $request)
    {
        if (!$this->auth($request->header('token'))){
            return (new Response("Invalid Token", 401));
        }
        $url = "https://prod.rockhome.hu/gendocs/ingatlanok.xml";
        $xml = simplexml_load_file($url, 'SimpleXMLElement', LIBXML_NOCDATA);
        return response()->json($xml);
    }


    public function auth($token){
        return DB::select('select true from user where token = ?', [$token]);
    }
}
