export interface Estate {
        external_id: string;
        user_external_id: string;
        user_name: string;
        user_email: string;
        user_phone: string;
        postal_code: string;
        settlement: string;
        sync_address: string;
        type: string;
        price: number;
        size: number;
        status: string;
        ad_type: string;
        rentability: string;
        new: string;
        description: string;
        state: string;
        plot: number;
        utilities: string;
        street: string;
        rooms: string;
        heating: string;
        building: string;
        terrace_size: string;
        siting: string;
        build_year: string;
        halfrooms: string;
        floor: string;
        sight: string;
        extras: string;
        area: string;
        cross_selling_mode: string;
        handed_premium: string;
        lift: string;
        images: Image[];
    }

export interface Image {
      src: string;
    }




