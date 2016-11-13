module.exports = function(req, res, next) {
    // btn_state: 0 不展示， 1 开通 2 续费 3 开通置灰 4 续费置灰
    res.json({
        error_no: 0,
        error_msg: "",
        result: {
            city_id: "131",
            city_name: "北京市",
            displayname: "chenchuanbao01",
            is_vip: true,
            is_login: true,
            is_new: true,
            city_privileges: [{
                city_id: "131",
                city_name: "北京市",
                privilege_no: "131201611000001",
                privilege_name: "32131231",
                start_time: "1995.01.01",
                end_time: "2017.10.01",
                discount_rate: 8,
                price: 1.1,
                privilege_rule: {
                    discount_rate: 80,
                    day_limit: 4,
                    month_limit: 20,
                    max_discount: 4,
                    month_max_save: 80
                },
                stock: 1030,
                btn_state: 1,
                conflict_msg: ""
            }, {
                city_id: "131",
                city_name: "北京市",
                privilege_no: "131201611000002",
                privilege_name: "32131231",
                start_time: "1995.01.01",
                end_time: "2017.10.01",
                discount_rate: 8,
                price: 1.1,
                privilege_rule: {
                    discount_rate: 80,
                    day_limit: 4,
                    month_limit: 20,
                    max_discount: 4,
                    month_max_save: 80
                },
                stock: 1030,
                btn_state: 2,
                conflict_msg: ""
            }, {
                city_id: "131",
                city_name: "北京市",
                privilege_no: "131201611000003",
                privilege_name: "32131231",
                start_time: "1995.01.01",
                end_time: "2017.10.01",
                discount_rate: 8,
                price: 1.1,
                privilege_rule: {
                    discount_rate: 80,
                    day_limit: 4,
                    month_limit: 20,
                    max_discount: 4,
                    month_max_save: 80
                },
                stock: 1030,
                btn_state: 3,
                conflict_msg: "会员冲突"
            }, {
                city_id: "131",
                city_name: "北京市",
                privilege_no: "131201611000004",
                privilege_name: "32131231",
                start_time: "1995.01.01",
                end_time: "2017.10.01",
                discount_rate: 8,
                price: 1.1,
                privilege_rule: {
                    discount_rate: 80,
                    day_limit: 4,
                    month_limit: 20,
                    max_discount: 4,
                    month_max_save: 80
                },
                stock: 1030,
                btn_state: 3,
                conflict_msg: "卡冲突"
            }, {
                city_id: "131",
                city_name: "北京市",
                privilege_no: "131201611000005",
                privilege_name: "32131231",
                start_time: "1995.01.01",
                end_time: "2017.10.01",
                discount_rate: 8,
                price: 1.1,
                privilege_rule: {
                    discount_rate: 80,
                    day_limit: 4,
                    month_limit: 20,
                    max_discount: 4,
                    month_max_save: 80
                },
                stock: 1030,
                btn_state: 4,
                conflict_msg: "卡冲突"
            }],
            user_privileges: {
                valid: [],
                expired: []
                // valid: [{
                //     city_id: "131",
                //     state: "1",
                //     start_time: "2016.10.28",
                //     end_time: "2017.06.17",
                //     privilege_no: "131201611000006",
                //     privilege_type: "1000",
                //     privilege_desc: "配送折扣",
                //     privilege_name: "32131231",
                //     privilege_info: {
                //         discount_rate: 80,
                //         day_limit: 4,
                //         month_limit: 20,
                //         max_discount: 4
                //     },
                //     city_name: "北京市",
                //     orig_start_time: "1477648584",
                //     orig_end_time: "1497648584",
                //     discount_rate: 8,
                //     current_in_service: true,
                //     off_sale: false,
                //     btn_state: 2,
                //     expired: false,
                //     expired_in: 3
                // }, {
                //     city_id: "131",
                //     state: "1",
                //     start_time: "2016.10.28",
                //     end_time: "2017.06.17",
                //     privilege_no: "131201611000007",
                //     privilege_type: "1000",
                //     privilege_desc: "配送折扣",
                //     privilege_name: "32131231",
                //     privilege_info: {
                //         discount_rate: 80,
                //         day_limit: 4,
                //         month_limit: 20,
                //         max_discount: 4
                //     },
                //     city_name: "北京市",
                //     orig_start_time: "1477648584",
                //     orig_end_time: "1497648584",
                //     discount_rate: 8,
                //     current_in_service: true,
                //     off_sale: false,
                //     btn_state: 0,
                //     expired: false,
                //     expired_in: 3
                // }, {
                //     city_id: "131",
                //     state: "1",
                //     start_time: "2016.10.28",
                //     end_time: "2017.06.17",
                //     privilege_no: "131201611000008",
                //     privilege_type: "1000",
                //     privilege_desc: "配送折扣",
                //     privilege_name: "32131231",
                //     privilege_info: {
                //         discount_rate: 80,
                //         day_limit: 4,
                //         month_limit: 20,
                //         max_discount: 4
                //     },
                //     city_name: "北京市",
                //     orig_start_time: "1477648584",
                //     orig_end_time: "1497648584",
                //     discount_rate: 8,
                //     current_in_service: false,
                //     off_sale: false,
                //     btn_state: 0,
                //     expired: false,
                //     expired_in: 222
                // }, {
                //     city_id: "131",
                //     state: "1",
                //     start_time: "2016.10.28",
                //     end_time: "2017.06.17",
                //     privilege_no: "131201611000009",
                //     privilege_type: "1000",
                //     privilege_desc: "配送折扣",
                //     privilege_name: "32131231",
                //     privilege_info: {
                //         discount_rate: 80,
                //         day_limit: 4,
                //         month_limit: 20,
                //         max_discount: 4
                //     },
                //     city_name: "北京市",
                //     orig_start_time: "1477648584",
                //     orig_end_time: "1497648584",
                //     discount_rate: 8,
                //     current_in_service: true,
                //     off_sale: false,
                //     btn_state: 0,
                //     expired: false,
                //     expired_in: 222
                // }],
                // expired: [{
                //     city_id: "131",
                //     state: "1",
                //     start_time: "2016.10.28",
                //     end_time: "2017.06.17",
                //     privilege_no: "131201611000010",
                //     privilege_type: "1000",
                //     privilege_desc: "配送折扣",
                //     privilege_name: "32131231",
                //     privilege_info: {
                //         discount_rate: 80,
                //         day_limit: 4,
                //         month_limit: 20,
                //         max_discount: 4
                //     },
                //     city_name: "北京市",
                //     orig_start_time: "1477648584",
                //     orig_end_time: "1497648584",
                //     discount_rate: 8,
                //     current_in_service: true,
                //     off_sale: false,
                //     btn_state: 2,
                //     expired: true,
                //     expired_in: 222
                // }, {
                //     city_id: "131",
                //     state: "1",
                //     start_time: "2016.10.28",
                //     end_time: "2017.06.17",
                //     privilege_no: "131201611000011",
                //     privilege_type: "1000",
                //     privilege_desc: "配送折扣",
                //     privilege_name: "32131231",
                //     privilege_info: {
                //         discount_rate: 80,
                //         day_limit: 4,
                //         month_limit: 20,
                //         max_discount: 4
                //     },
                //     city_name: "北京市",
                //     orig_start_time: "1477648584",
                //     orig_end_time: "1497648584",
                //     discount_rate: 8,
                //     current_in_service: true,
                //     off_sale: false,
                //     btn_state: 0,
                //     expired: true,
                //     expired_in: 222
                // }, {
                //     city_id: "131",
                //     state: "1",
                //     start_time: "2016.10.28",
                //     end_time: "2017.06.17",
                //     privilege_no: "131201611000012",
                //     privilege_type: "1000",
                //     privilege_desc: "配送折扣",
                //     privilege_name: "32131231",
                //     privilege_info: {
                //         discount_rate: 80,
                //         day_limit: 4,
                //         month_limit: 20,
                //         max_discount: 4
                //     },
                //     city_name: "北京市",
                //     orig_start_time: "1477648584",
                //     orig_end_time: "1497648584",
                //     discount_rate: 8,
                //     current_in_service: true,
                //     off_sale: true,
                //     btn_state: 0,
                //     expired: true,
                //     expired_in: 222
                // }]
            }
        },
        _bdstoken: "fa8a1722efee82fd7a34907d94a4f8e4",
        _token_bindmobile: ""
    })
};
