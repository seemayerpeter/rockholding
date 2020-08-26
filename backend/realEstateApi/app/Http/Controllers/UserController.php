<?php

namespace App\Http\Controllers;

use App\User;
use DB;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends Controller
{

    public function login(Request $request)
    {
        if ($request->input('username') === ""){
            return (new Response("Invalid username/password", 401));
        }
        $User = (DB::select('select * from user where username = ?', [$request->input('username')]));
        if ($User && password_verify($request->input('password'), $User[0]->password)) {
            return response()->json($User[0]);
        } else {
            return (new Response("Invalid username/password", 401));
        }

    }

    public function register(Request $request)
    {
        if ($request->input('username') === "" || $request->input('password') === ""){
            return (new Response("Invalid username/password", 401));
        }
        $User = new User;
        $User->username = $request->input('username');
        $User->password = $request->input('password');
        if ($this->existsAlready($User->username)) {
            return (new Response("Username already taken", 401));
        }
        $User->token = $this->generateGuid();
        DB::insert('insert into user (username, password, token) values (?, ?, ?)', [$User->username, password_hash($User->password,PASSWORD_DEFAULT), $User->token]);
        return response()->json($User);

    }

    public function generateGuid(){
        return sprintf('%04X%04X-%04X-%04X-%04X-%04X%04X%04X', mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(16384, 20479), mt_rand(32768, 49151), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535));
    }

    public function existsAlready($username){
        return DB::select('select true from user where username = ?', [$username]);
    }
}
