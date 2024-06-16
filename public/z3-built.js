var initZ3 = (() => {
    var e = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0;
    return "undefined" != typeof __filename && (e = e || __filename),
        function(t) {
            var n, s, i = void 0 !== (t = t || {}) ? t : {};
            i.ready = new Promise((function(e, t) {
                n = e, s = t
            })), Object.getOwnPropertyDescriptor(i.ready, "_malloc") || (Object.defineProperty(i.ready, "_malloc", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_malloc", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_set_throwy_error_handler") || (Object.defineProperty(i.ready, "_set_throwy_error_handler", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _set_throwy_error_handler on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_set_throwy_error_handler", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _set_throwy_error_handler on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_set_noop_error_handler") || (Object.defineProperty(i.ready, "_set_noop_error_handler", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _set_noop_error_handler on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_set_noop_error_handler", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _set_noop_error_handler on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_async_Z3_eval_smtlib2_string") || (Object.defineProperty(i.ready, "_async_Z3_eval_smtlib2_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _async_Z3_eval_smtlib2_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_async_Z3_eval_smtlib2_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _async_Z3_eval_smtlib2_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_async_Z3_simplify") || (Object.defineProperty(i.ready, "_async_Z3_simplify", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _async_Z3_simplify on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_async_Z3_simplify", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _async_Z3_simplify on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_async_Z3_simplify_ex") || (Object.defineProperty(i.ready, "_async_Z3_simplify_ex", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _async_Z3_simplify_ex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_async_Z3_simplify_ex", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _async_Z3_simplify_ex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_async_Z3_solver_check") || (Object.defineProperty(i.ready, "_async_Z3_solver_check", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _async_Z3_solver_check on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_async_Z3_solver_check", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _async_Z3_solver_check on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_async_Z3_solver_check_assumptions") || (Object.defineProperty(i.ready, "_async_Z3_solver_check_assumptions", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _async_Z3_solver_check_assumptions on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_async_Z3_solver_check_assumptions", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _async_Z3_solver_check_assumptions on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_async_Z3_solver_cube") || (Object.defineProperty(i.ready, "_async_Z3_solver_cube", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _async_Z3_solver_cube on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_async_Z3_solver_cube", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _async_Z3_solver_cube on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_async_Z3_solver_get_consequences") || (Object.defineProperty(i.ready, "_async_Z3_solver_get_consequences", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _async_Z3_solver_get_consequences on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_async_Z3_solver_get_consequences", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _async_Z3_solver_get_consequences on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_async_Z3_tactic_apply") || (Object.defineProperty(i.ready, "_async_Z3_tactic_apply", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _async_Z3_tactic_apply on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_async_Z3_tactic_apply", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _async_Z3_tactic_apply on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_async_Z3_tactic_apply_ex") || (Object.defineProperty(i.ready, "_async_Z3_tactic_apply_ex", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _async_Z3_tactic_apply_ex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_async_Z3_tactic_apply_ex", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _async_Z3_tactic_apply_ex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_async_Z3_optimize_check") || (Object.defineProperty(i.ready, "_async_Z3_optimize_check", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _async_Z3_optimize_check on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_async_Z3_optimize_check", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _async_Z3_optimize_check on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_async_Z3_algebraic_roots") || (Object.defineProperty(i.ready, "_async_Z3_algebraic_roots", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _async_Z3_algebraic_roots on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_async_Z3_algebraic_roots", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _async_Z3_algebraic_roots on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_async_Z3_algebraic_eval") || (Object.defineProperty(i.ready, "_async_Z3_algebraic_eval", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _async_Z3_algebraic_eval on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_async_Z3_algebraic_eval", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _async_Z3_algebraic_eval on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_async_Z3_fixedpoint_query") || (Object.defineProperty(i.ready, "_async_Z3_fixedpoint_query", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _async_Z3_fixedpoint_query on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_async_Z3_fixedpoint_query", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _async_Z3_fixedpoint_query on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_async_Z3_fixedpoint_query_relations") || (Object.defineProperty(i.ready, "_async_Z3_fixedpoint_query_relations", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _async_Z3_fixedpoint_query_relations on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_async_Z3_fixedpoint_query_relations", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _async_Z3_fixedpoint_query_relations on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_async_Z3_fixedpoint_query_from_lvl") || (Object.defineProperty(i.ready, "_async_Z3_fixedpoint_query_from_lvl", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _async_Z3_fixedpoint_query_from_lvl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_async_Z3_fixedpoint_query_from_lvl", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _async_Z3_fixedpoint_query_from_lvl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_async_Z3_polynomial_subresultants") || (Object.defineProperty(i.ready, "_async_Z3_polynomial_subresultants", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _async_Z3_polynomial_subresultants on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_async_Z3_polynomial_subresultants", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _async_Z3_polynomial_subresultants on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_global_param_set") || (Object.defineProperty(i.ready, "_Z3_global_param_set", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_global_param_set on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_global_param_set", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_global_param_set on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_global_param_reset_all") || (Object.defineProperty(i.ready, "_Z3_global_param_reset_all", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_global_param_reset_all on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_global_param_reset_all", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_global_param_reset_all on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_global_param_get") || (Object.defineProperty(i.ready, "_Z3_global_param_get", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_global_param_get on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_global_param_get", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_global_param_get on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_config") || (Object.defineProperty(i.ready, "_Z3_mk_config", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_config on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_config", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_config on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_del_config") || (Object.defineProperty(i.ready, "_Z3_del_config", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_del_config on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_del_config", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_del_config on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_set_param_value") || (Object.defineProperty(i.ready, "_Z3_set_param_value", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_set_param_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_set_param_value", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_set_param_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_context") || (Object.defineProperty(i.ready, "_Z3_mk_context", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_context on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_context", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_context on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_context_rc") || (Object.defineProperty(i.ready, "_Z3_mk_context_rc", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_context_rc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_context_rc", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_context_rc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_del_context") || (Object.defineProperty(i.ready, "_Z3_del_context", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_del_context on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_del_context", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_del_context on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_inc_ref") || (Object.defineProperty(i.ready, "_Z3_inc_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_inc_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_dec_ref") || (Object.defineProperty(i.ready, "_Z3_dec_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_dec_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_update_param_value") || (Object.defineProperty(i.ready, "_Z3_update_param_value", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_update_param_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_update_param_value", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_update_param_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_global_param_descrs") || (Object.defineProperty(i.ready, "_Z3_get_global_param_descrs", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_global_param_descrs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_global_param_descrs", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_global_param_descrs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_interrupt") || (Object.defineProperty(i.ready, "_Z3_interrupt", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_interrupt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_interrupt", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_interrupt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_enable_concurrent_dec_ref") || (Object.defineProperty(i.ready, "_Z3_enable_concurrent_dec_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_enable_concurrent_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_enable_concurrent_dec_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_enable_concurrent_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_params") || (Object.defineProperty(i.ready, "_Z3_mk_params", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_params on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_params", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_params on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_params_inc_ref") || (Object.defineProperty(i.ready, "_Z3_params_inc_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_params_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_params_inc_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_params_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_params_dec_ref") || (Object.defineProperty(i.ready, "_Z3_params_dec_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_params_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_params_dec_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_params_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_params_set_bool") || (Object.defineProperty(i.ready, "_Z3_params_set_bool", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_params_set_bool on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_params_set_bool", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_params_set_bool on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_params_set_uint") || (Object.defineProperty(i.ready, "_Z3_params_set_uint", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_params_set_uint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_params_set_uint", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_params_set_uint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_params_set_double") || (Object.defineProperty(i.ready, "_Z3_params_set_double", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_params_set_double on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_params_set_double", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_params_set_double on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_params_set_symbol") || (Object.defineProperty(i.ready, "_Z3_params_set_symbol", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_params_set_symbol on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_params_set_symbol", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_params_set_symbol on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_params_to_string") || (Object.defineProperty(i.ready, "_Z3_params_to_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_params_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_params_to_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_params_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_params_validate") || (Object.defineProperty(i.ready, "_Z3_params_validate", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_params_validate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_params_validate", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_params_validate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_param_descrs_inc_ref") || (Object.defineProperty(i.ready, "_Z3_param_descrs_inc_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_param_descrs_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_param_descrs_inc_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_param_descrs_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_param_descrs_dec_ref") || (Object.defineProperty(i.ready, "_Z3_param_descrs_dec_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_param_descrs_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_param_descrs_dec_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_param_descrs_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_param_descrs_get_kind") || (Object.defineProperty(i.ready, "_Z3_param_descrs_get_kind", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_param_descrs_get_kind on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_param_descrs_get_kind", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_param_descrs_get_kind on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_param_descrs_size") || (Object.defineProperty(i.ready, "_Z3_param_descrs_size", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_param_descrs_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_param_descrs_size", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_param_descrs_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_param_descrs_get_name") || (Object.defineProperty(i.ready, "_Z3_param_descrs_get_name", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_param_descrs_get_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_param_descrs_get_name", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_param_descrs_get_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_param_descrs_get_documentation") || (Object.defineProperty(i.ready, "_Z3_param_descrs_get_documentation", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_param_descrs_get_documentation on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_param_descrs_get_documentation", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_param_descrs_get_documentation on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_param_descrs_to_string") || (Object.defineProperty(i.ready, "_Z3_param_descrs_to_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_param_descrs_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_param_descrs_to_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_param_descrs_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_int_symbol") || (Object.defineProperty(i.ready, "_Z3_mk_int_symbol", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_int_symbol on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_int_symbol", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_int_symbol on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_string_symbol") || (Object.defineProperty(i.ready, "_Z3_mk_string_symbol", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_string_symbol on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_string_symbol", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_string_symbol on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_uninterpreted_sort") || (Object.defineProperty(i.ready, "_Z3_mk_uninterpreted_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_uninterpreted_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_uninterpreted_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_uninterpreted_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bool_sort") || (Object.defineProperty(i.ready, "_Z3_mk_bool_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bool_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bool_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bool_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_int_sort") || (Object.defineProperty(i.ready, "_Z3_mk_int_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_int_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_int_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_int_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_real_sort") || (Object.defineProperty(i.ready, "_Z3_mk_real_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_real_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_real_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_real_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bv_sort") || (Object.defineProperty(i.ready, "_Z3_mk_bv_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bv_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bv_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bv_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_finite_domain_sort") || (Object.defineProperty(i.ready, "_Z3_mk_finite_domain_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_finite_domain_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_finite_domain_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_finite_domain_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_array_sort") || (Object.defineProperty(i.ready, "_Z3_mk_array_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_array_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_array_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_array_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_array_sort_n") || (Object.defineProperty(i.ready, "_Z3_mk_array_sort_n", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_array_sort_n on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_array_sort_n", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_array_sort_n on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_tuple_sort") || (Object.defineProperty(i.ready, "_Z3_mk_tuple_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_tuple_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_tuple_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_tuple_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_enumeration_sort") || (Object.defineProperty(i.ready, "_Z3_mk_enumeration_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_enumeration_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_enumeration_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_enumeration_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_list_sort") || (Object.defineProperty(i.ready, "_Z3_mk_list_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_list_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_list_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_list_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_constructor") || (Object.defineProperty(i.ready, "_Z3_mk_constructor", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_constructor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_constructor", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_constructor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_del_constructor") || (Object.defineProperty(i.ready, "_Z3_del_constructor", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_del_constructor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_del_constructor", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_del_constructor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_datatype") || (Object.defineProperty(i.ready, "_Z3_mk_datatype", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_datatype on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_datatype", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_datatype on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_datatype_sort") || (Object.defineProperty(i.ready, "_Z3_mk_datatype_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_datatype_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_datatype_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_datatype_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_constructor_list") || (Object.defineProperty(i.ready, "_Z3_mk_constructor_list", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_constructor_list on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_constructor_list", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_constructor_list on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_del_constructor_list") || (Object.defineProperty(i.ready, "_Z3_del_constructor_list", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_del_constructor_list on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_del_constructor_list", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_del_constructor_list on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_datatypes") || (Object.defineProperty(i.ready, "_Z3_mk_datatypes", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_datatypes on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_datatypes", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_datatypes on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_query_constructor") || (Object.defineProperty(i.ready, "_Z3_query_constructor", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_query_constructor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_query_constructor", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_query_constructor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_func_decl") || (Object.defineProperty(i.ready, "_Z3_mk_func_decl", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_func_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_func_decl", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_func_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_app") || (Object.defineProperty(i.ready, "_Z3_mk_app", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_app on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_app", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_app on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_const") || (Object.defineProperty(i.ready, "_Z3_mk_const", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_const on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_const", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_const on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fresh_func_decl") || (Object.defineProperty(i.ready, "_Z3_mk_fresh_func_decl", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fresh_func_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fresh_func_decl", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fresh_func_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fresh_const") || (Object.defineProperty(i.ready, "_Z3_mk_fresh_const", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fresh_const on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fresh_const", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fresh_const on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_rec_func_decl") || (Object.defineProperty(i.ready, "_Z3_mk_rec_func_decl", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_rec_func_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_rec_func_decl", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_rec_func_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_add_rec_def") || (Object.defineProperty(i.ready, "_Z3_add_rec_def", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_add_rec_def on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_add_rec_def", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_add_rec_def on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_true") || (Object.defineProperty(i.ready, "_Z3_mk_true", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_true on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_true", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_true on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_false") || (Object.defineProperty(i.ready, "_Z3_mk_false", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_false on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_false", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_false on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_eq") || (Object.defineProperty(i.ready, "_Z3_mk_eq", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_eq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_eq", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_eq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_distinct") || (Object.defineProperty(i.ready, "_Z3_mk_distinct", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_distinct on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_distinct", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_distinct on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_not") || (Object.defineProperty(i.ready, "_Z3_mk_not", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_not on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_not", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_not on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_ite") || (Object.defineProperty(i.ready, "_Z3_mk_ite", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_ite on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_ite", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_ite on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_iff") || (Object.defineProperty(i.ready, "_Z3_mk_iff", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_iff on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_iff", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_iff on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_implies") || (Object.defineProperty(i.ready, "_Z3_mk_implies", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_implies on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_implies", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_implies on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_xor") || (Object.defineProperty(i.ready, "_Z3_mk_xor", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_xor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_xor", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_xor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_and") || (Object.defineProperty(i.ready, "_Z3_mk_and", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_and on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_and", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_and on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_or") || (Object.defineProperty(i.ready, "_Z3_mk_or", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_or on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_or", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_or on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_add") || (Object.defineProperty(i.ready, "_Z3_mk_add", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_add on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_add", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_add on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_mul") || (Object.defineProperty(i.ready, "_Z3_mk_mul", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_mul on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_mul", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_mul on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_sub") || (Object.defineProperty(i.ready, "_Z3_mk_sub", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_sub on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_sub", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_sub on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_unary_minus") || (Object.defineProperty(i.ready, "_Z3_mk_unary_minus", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_unary_minus on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_unary_minus", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_unary_minus on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_div") || (Object.defineProperty(i.ready, "_Z3_mk_div", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_div on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_div", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_div on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_mod") || (Object.defineProperty(i.ready, "_Z3_mk_mod", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_mod on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_mod", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_mod on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_rem") || (Object.defineProperty(i.ready, "_Z3_mk_rem", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_rem on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_rem", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_rem on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_power") || (Object.defineProperty(i.ready, "_Z3_mk_power", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_power on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_power", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_power on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_lt") || (Object.defineProperty(i.ready, "_Z3_mk_lt", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_lt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_lt", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_lt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_le") || (Object.defineProperty(i.ready, "_Z3_mk_le", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_le on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_le", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_le on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_gt") || (Object.defineProperty(i.ready, "_Z3_mk_gt", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_gt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_gt", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_gt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_ge") || (Object.defineProperty(i.ready, "_Z3_mk_ge", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_ge on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_ge", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_ge on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_divides") || (Object.defineProperty(i.ready, "_Z3_mk_divides", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_divides on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_divides", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_divides on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_int2real") || (Object.defineProperty(i.ready, "_Z3_mk_int2real", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_int2real on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_int2real", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_int2real on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_real2int") || (Object.defineProperty(i.ready, "_Z3_mk_real2int", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_real2int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_real2int", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_real2int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_is_int") || (Object.defineProperty(i.ready, "_Z3_mk_is_int", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_is_int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_is_int", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_is_int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvnot") || (Object.defineProperty(i.ready, "_Z3_mk_bvnot", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvnot on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvnot", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvnot on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvredand") || (Object.defineProperty(i.ready, "_Z3_mk_bvredand", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvredand on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvredand", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvredand on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvredor") || (Object.defineProperty(i.ready, "_Z3_mk_bvredor", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvredor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvredor", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvredor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvand") || (Object.defineProperty(i.ready, "_Z3_mk_bvand", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvand on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvand", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvand on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvor") || (Object.defineProperty(i.ready, "_Z3_mk_bvor", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvor", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvxor") || (Object.defineProperty(i.ready, "_Z3_mk_bvxor", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvxor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvxor", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvxor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvnand") || (Object.defineProperty(i.ready, "_Z3_mk_bvnand", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvnand on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvnand", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvnand on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvnor") || (Object.defineProperty(i.ready, "_Z3_mk_bvnor", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvnor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvnor", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvnor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvxnor") || (Object.defineProperty(i.ready, "_Z3_mk_bvxnor", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvxnor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvxnor", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvxnor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvneg") || (Object.defineProperty(i.ready, "_Z3_mk_bvneg", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvneg on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvneg", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvneg on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvadd") || (Object.defineProperty(i.ready, "_Z3_mk_bvadd", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvadd on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvadd", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvadd on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvsub") || (Object.defineProperty(i.ready, "_Z3_mk_bvsub", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvsub on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvsub", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvsub on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvmul") || (Object.defineProperty(i.ready, "_Z3_mk_bvmul", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvmul on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvmul", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvmul on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvudiv") || (Object.defineProperty(i.ready, "_Z3_mk_bvudiv", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvudiv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvudiv", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvudiv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvsdiv") || (Object.defineProperty(i.ready, "_Z3_mk_bvsdiv", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvsdiv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvsdiv", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvsdiv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvurem") || (Object.defineProperty(i.ready, "_Z3_mk_bvurem", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvurem on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvurem", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvurem on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvsrem") || (Object.defineProperty(i.ready, "_Z3_mk_bvsrem", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvsrem on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvsrem", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvsrem on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvsmod") || (Object.defineProperty(i.ready, "_Z3_mk_bvsmod", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvsmod on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvsmod", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvsmod on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvult") || (Object.defineProperty(i.ready, "_Z3_mk_bvult", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvult on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvult", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvult on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvslt") || (Object.defineProperty(i.ready, "_Z3_mk_bvslt", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvslt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvslt", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvslt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvule") || (Object.defineProperty(i.ready, "_Z3_mk_bvule", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvule on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvule", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvule on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvsle") || (Object.defineProperty(i.ready, "_Z3_mk_bvsle", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvsle on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvsle", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvsle on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvuge") || (Object.defineProperty(i.ready, "_Z3_mk_bvuge", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvuge on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvuge", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvuge on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvsge") || (Object.defineProperty(i.ready, "_Z3_mk_bvsge", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvsge on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvsge", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvsge on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvugt") || (Object.defineProperty(i.ready, "_Z3_mk_bvugt", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvugt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvugt", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvugt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvsgt") || (Object.defineProperty(i.ready, "_Z3_mk_bvsgt", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvsgt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvsgt", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvsgt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_concat") || (Object.defineProperty(i.ready, "_Z3_mk_concat", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_concat on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_concat", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_concat on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_extract") || (Object.defineProperty(i.ready, "_Z3_mk_extract", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_extract on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_extract", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_extract on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_sign_ext") || (Object.defineProperty(i.ready, "_Z3_mk_sign_ext", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_sign_ext on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_sign_ext", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_sign_ext on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_zero_ext") || (Object.defineProperty(i.ready, "_Z3_mk_zero_ext", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_zero_ext on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_zero_ext", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_zero_ext on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_repeat") || (Object.defineProperty(i.ready, "_Z3_mk_repeat", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_repeat on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_repeat", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_repeat on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bit2bool") || (Object.defineProperty(i.ready, "_Z3_mk_bit2bool", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bit2bool on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bit2bool", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bit2bool on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvshl") || (Object.defineProperty(i.ready, "_Z3_mk_bvshl", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvshl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvshl", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvshl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvlshr") || (Object.defineProperty(i.ready, "_Z3_mk_bvlshr", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvlshr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvlshr", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvlshr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvashr") || (Object.defineProperty(i.ready, "_Z3_mk_bvashr", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvashr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvashr", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvashr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_rotate_left") || (Object.defineProperty(i.ready, "_Z3_mk_rotate_left", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_rotate_left on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_rotate_left", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_rotate_left on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_rotate_right") || (Object.defineProperty(i.ready, "_Z3_mk_rotate_right", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_rotate_right on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_rotate_right", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_rotate_right on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_ext_rotate_left") || (Object.defineProperty(i.ready, "_Z3_mk_ext_rotate_left", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_ext_rotate_left on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_ext_rotate_left", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_ext_rotate_left on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_ext_rotate_right") || (Object.defineProperty(i.ready, "_Z3_mk_ext_rotate_right", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_ext_rotate_right on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_ext_rotate_right", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_ext_rotate_right on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_int2bv") || (Object.defineProperty(i.ready, "_Z3_mk_int2bv", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_int2bv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_int2bv", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_int2bv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bv2int") || (Object.defineProperty(i.ready, "_Z3_mk_bv2int", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bv2int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bv2int", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bv2int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvadd_no_overflow") || (Object.defineProperty(i.ready, "_Z3_mk_bvadd_no_overflow", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvadd_no_overflow on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvadd_no_overflow", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvadd_no_overflow on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvadd_no_underflow") || (Object.defineProperty(i.ready, "_Z3_mk_bvadd_no_underflow", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvadd_no_underflow on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvadd_no_underflow", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvadd_no_underflow on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvsub_no_overflow") || (Object.defineProperty(i.ready, "_Z3_mk_bvsub_no_overflow", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvsub_no_overflow on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvsub_no_overflow", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvsub_no_overflow on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvsub_no_underflow") || (Object.defineProperty(i.ready, "_Z3_mk_bvsub_no_underflow", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvsub_no_underflow on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvsub_no_underflow", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvsub_no_underflow on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvsdiv_no_overflow") || (Object.defineProperty(i.ready, "_Z3_mk_bvsdiv_no_overflow", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvsdiv_no_overflow on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvsdiv_no_overflow", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvsdiv_no_overflow on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvneg_no_overflow") || (Object.defineProperty(i.ready, "_Z3_mk_bvneg_no_overflow", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvneg_no_overflow on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvneg_no_overflow", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvneg_no_overflow on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvmul_no_overflow") || (Object.defineProperty(i.ready, "_Z3_mk_bvmul_no_overflow", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvmul_no_overflow on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvmul_no_overflow", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvmul_no_overflow on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bvmul_no_underflow") || (Object.defineProperty(i.ready, "_Z3_mk_bvmul_no_underflow", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bvmul_no_underflow on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bvmul_no_underflow", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bvmul_no_underflow on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_select") || (Object.defineProperty(i.ready, "_Z3_mk_select", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_select on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_select", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_select on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_select_n") || (Object.defineProperty(i.ready, "_Z3_mk_select_n", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_select_n on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_select_n", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_select_n on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_store") || (Object.defineProperty(i.ready, "_Z3_mk_store", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_store on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_store", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_store on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_store_n") || (Object.defineProperty(i.ready, "_Z3_mk_store_n", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_store_n on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_store_n", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_store_n on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_const_array") || (Object.defineProperty(i.ready, "_Z3_mk_const_array", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_const_array on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_const_array", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_const_array on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_map") || (Object.defineProperty(i.ready, "_Z3_mk_map", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_map on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_map", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_map on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_array_default") || (Object.defineProperty(i.ready, "_Z3_mk_array_default", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_array_default on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_array_default", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_array_default on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_as_array") || (Object.defineProperty(i.ready, "_Z3_mk_as_array", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_as_array on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_as_array", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_as_array on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_set_has_size") || (Object.defineProperty(i.ready, "_Z3_mk_set_has_size", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_set_has_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_set_has_size", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_set_has_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_set_sort") || (Object.defineProperty(i.ready, "_Z3_mk_set_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_set_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_set_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_set_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_empty_set") || (Object.defineProperty(i.ready, "_Z3_mk_empty_set", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_empty_set on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_empty_set", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_empty_set on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_full_set") || (Object.defineProperty(i.ready, "_Z3_mk_full_set", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_full_set on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_full_set", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_full_set on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_set_add") || (Object.defineProperty(i.ready, "_Z3_mk_set_add", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_set_add on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_set_add", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_set_add on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_set_del") || (Object.defineProperty(i.ready, "_Z3_mk_set_del", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_set_del on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_set_del", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_set_del on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_set_union") || (Object.defineProperty(i.ready, "_Z3_mk_set_union", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_set_union on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_set_union", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_set_union on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_set_intersect") || (Object.defineProperty(i.ready, "_Z3_mk_set_intersect", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_set_intersect on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_set_intersect", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_set_intersect on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_set_difference") || (Object.defineProperty(i.ready, "_Z3_mk_set_difference", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_set_difference on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_set_difference", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_set_difference on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_set_complement") || (Object.defineProperty(i.ready, "_Z3_mk_set_complement", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_set_complement on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_set_complement", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_set_complement on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_set_member") || (Object.defineProperty(i.ready, "_Z3_mk_set_member", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_set_member on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_set_member", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_set_member on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_set_subset") || (Object.defineProperty(i.ready, "_Z3_mk_set_subset", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_set_subset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_set_subset", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_set_subset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_array_ext") || (Object.defineProperty(i.ready, "_Z3_mk_array_ext", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_array_ext on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_array_ext", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_array_ext on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_numeral") || (Object.defineProperty(i.ready, "_Z3_mk_numeral", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_numeral on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_numeral", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_numeral on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_real") || (Object.defineProperty(i.ready, "_Z3_mk_real", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_real on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_real", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_real on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_real_int64") || (Object.defineProperty(i.ready, "_Z3_mk_real_int64", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_real_int64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_real_int64", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_real_int64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_int") || (Object.defineProperty(i.ready, "_Z3_mk_int", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_int", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_unsigned_int") || (Object.defineProperty(i.ready, "_Z3_mk_unsigned_int", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_unsigned_int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_unsigned_int", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_unsigned_int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_int64") || (Object.defineProperty(i.ready, "_Z3_mk_int64", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_int64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_int64", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_int64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_unsigned_int64") || (Object.defineProperty(i.ready, "_Z3_mk_unsigned_int64", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_unsigned_int64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_unsigned_int64", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_unsigned_int64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bv_numeral") || (Object.defineProperty(i.ready, "_Z3_mk_bv_numeral", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bv_numeral on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bv_numeral", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bv_numeral on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_seq_sort") || (Object.defineProperty(i.ready, "_Z3_mk_seq_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_seq_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_seq_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_seq_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_is_seq_sort") || (Object.defineProperty(i.ready, "_Z3_is_seq_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_is_seq_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_is_seq_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_is_seq_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_seq_sort_basis") || (Object.defineProperty(i.ready, "_Z3_get_seq_sort_basis", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_seq_sort_basis on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_seq_sort_basis", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_seq_sort_basis on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_re_sort") || (Object.defineProperty(i.ready, "_Z3_mk_re_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_re_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_re_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_re_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_is_re_sort") || (Object.defineProperty(i.ready, "_Z3_is_re_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_is_re_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_is_re_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_is_re_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_re_sort_basis") || (Object.defineProperty(i.ready, "_Z3_get_re_sort_basis", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_re_sort_basis on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_re_sort_basis", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_re_sort_basis on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_string_sort") || (Object.defineProperty(i.ready, "_Z3_mk_string_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_string_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_string_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_string_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_char_sort") || (Object.defineProperty(i.ready, "_Z3_mk_char_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_char_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_char_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_char_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_is_string_sort") || (Object.defineProperty(i.ready, "_Z3_is_string_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_is_string_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_is_string_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_is_string_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_is_char_sort") || (Object.defineProperty(i.ready, "_Z3_is_char_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_is_char_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_is_char_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_is_char_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_string") || (Object.defineProperty(i.ready, "_Z3_mk_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_lstring") || (Object.defineProperty(i.ready, "_Z3_mk_lstring", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_lstring on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_lstring", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_lstring on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_u32string") || (Object.defineProperty(i.ready, "_Z3_mk_u32string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_u32string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_u32string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_u32string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_is_string") || (Object.defineProperty(i.ready, "_Z3_is_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_is_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_is_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_is_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_string") || (Object.defineProperty(i.ready, "_Z3_get_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_lstring") || (Object.defineProperty(i.ready, "_Z3_get_lstring", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_lstring on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_lstring", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_lstring on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_string_length") || (Object.defineProperty(i.ready, "_Z3_get_string_length", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_string_length on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_string_length", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_string_length on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_string_contents") || (Object.defineProperty(i.ready, "_Z3_get_string_contents", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_string_contents on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_string_contents", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_string_contents on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_seq_empty") || (Object.defineProperty(i.ready, "_Z3_mk_seq_empty", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_seq_empty on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_seq_empty", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_seq_empty on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_seq_unit") || (Object.defineProperty(i.ready, "_Z3_mk_seq_unit", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_seq_unit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_seq_unit", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_seq_unit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_seq_concat") || (Object.defineProperty(i.ready, "_Z3_mk_seq_concat", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_seq_concat on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_seq_concat", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_seq_concat on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_seq_prefix") || (Object.defineProperty(i.ready, "_Z3_mk_seq_prefix", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_seq_prefix on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_seq_prefix", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_seq_prefix on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_seq_suffix") || (Object.defineProperty(i.ready, "_Z3_mk_seq_suffix", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_seq_suffix on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_seq_suffix", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_seq_suffix on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_seq_contains") || (Object.defineProperty(i.ready, "_Z3_mk_seq_contains", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_seq_contains on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_seq_contains", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_seq_contains on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_str_lt") || (Object.defineProperty(i.ready, "_Z3_mk_str_lt", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_str_lt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_str_lt", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_str_lt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_str_le") || (Object.defineProperty(i.ready, "_Z3_mk_str_le", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_str_le on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_str_le", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_str_le on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_seq_extract") || (Object.defineProperty(i.ready, "_Z3_mk_seq_extract", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_seq_extract on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_seq_extract", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_seq_extract on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_seq_replace") || (Object.defineProperty(i.ready, "_Z3_mk_seq_replace", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_seq_replace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_seq_replace", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_seq_replace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_seq_at") || (Object.defineProperty(i.ready, "_Z3_mk_seq_at", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_seq_at on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_seq_at", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_seq_at on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_seq_nth") || (Object.defineProperty(i.ready, "_Z3_mk_seq_nth", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_seq_nth on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_seq_nth", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_seq_nth on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_seq_length") || (Object.defineProperty(i.ready, "_Z3_mk_seq_length", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_seq_length on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_seq_length", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_seq_length on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_seq_index") || (Object.defineProperty(i.ready, "_Z3_mk_seq_index", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_seq_index on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_seq_index", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_seq_index on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_seq_last_index") || (Object.defineProperty(i.ready, "_Z3_mk_seq_last_index", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_seq_last_index on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_seq_last_index", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_seq_last_index on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_str_to_int") || (Object.defineProperty(i.ready, "_Z3_mk_str_to_int", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_str_to_int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_str_to_int", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_str_to_int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_int_to_str") || (Object.defineProperty(i.ready, "_Z3_mk_int_to_str", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_int_to_str on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_int_to_str", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_int_to_str on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_string_to_code") || (Object.defineProperty(i.ready, "_Z3_mk_string_to_code", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_string_to_code on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_string_to_code", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_string_to_code on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_string_from_code") || (Object.defineProperty(i.ready, "_Z3_mk_string_from_code", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_string_from_code on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_string_from_code", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_string_from_code on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_ubv_to_str") || (Object.defineProperty(i.ready, "_Z3_mk_ubv_to_str", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_ubv_to_str on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_ubv_to_str", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_ubv_to_str on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_sbv_to_str") || (Object.defineProperty(i.ready, "_Z3_mk_sbv_to_str", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_sbv_to_str on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_sbv_to_str", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_sbv_to_str on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_seq_to_re") || (Object.defineProperty(i.ready, "_Z3_mk_seq_to_re", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_seq_to_re on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_seq_to_re", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_seq_to_re on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_seq_in_re") || (Object.defineProperty(i.ready, "_Z3_mk_seq_in_re", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_seq_in_re on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_seq_in_re", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_seq_in_re on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_re_plus") || (Object.defineProperty(i.ready, "_Z3_mk_re_plus", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_re_plus on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_re_plus", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_re_plus on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_re_star") || (Object.defineProperty(i.ready, "_Z3_mk_re_star", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_re_star on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_re_star", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_re_star on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_re_option") || (Object.defineProperty(i.ready, "_Z3_mk_re_option", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_re_option on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_re_option", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_re_option on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_re_union") || (Object.defineProperty(i.ready, "_Z3_mk_re_union", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_re_union on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_re_union", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_re_union on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_re_concat") || (Object.defineProperty(i.ready, "_Z3_mk_re_concat", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_re_concat on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_re_concat", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_re_concat on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_re_range") || (Object.defineProperty(i.ready, "_Z3_mk_re_range", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_re_range on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_re_range", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_re_range on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_re_allchar") || (Object.defineProperty(i.ready, "_Z3_mk_re_allchar", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_re_allchar on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_re_allchar", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_re_allchar on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_re_loop") || (Object.defineProperty(i.ready, "_Z3_mk_re_loop", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_re_loop on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_re_loop", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_re_loop on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_re_power") || (Object.defineProperty(i.ready, "_Z3_mk_re_power", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_re_power on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_re_power", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_re_power on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_re_intersect") || (Object.defineProperty(i.ready, "_Z3_mk_re_intersect", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_re_intersect on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_re_intersect", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_re_intersect on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_re_complement") || (Object.defineProperty(i.ready, "_Z3_mk_re_complement", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_re_complement on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_re_complement", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_re_complement on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_re_diff") || (Object.defineProperty(i.ready, "_Z3_mk_re_diff", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_re_diff on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_re_diff", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_re_diff on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_re_empty") || (Object.defineProperty(i.ready, "_Z3_mk_re_empty", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_re_empty on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_re_empty", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_re_empty on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_re_full") || (Object.defineProperty(i.ready, "_Z3_mk_re_full", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_re_full on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_re_full", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_re_full on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_char") || (Object.defineProperty(i.ready, "_Z3_mk_char", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_char on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_char", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_char on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_char_le") || (Object.defineProperty(i.ready, "_Z3_mk_char_le", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_char_le on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_char_le", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_char_le on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_char_to_int") || (Object.defineProperty(i.ready, "_Z3_mk_char_to_int", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_char_to_int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_char_to_int", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_char_to_int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_char_to_bv") || (Object.defineProperty(i.ready, "_Z3_mk_char_to_bv", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_char_to_bv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_char_to_bv", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_char_to_bv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_char_from_bv") || (Object.defineProperty(i.ready, "_Z3_mk_char_from_bv", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_char_from_bv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_char_from_bv", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_char_from_bv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_char_is_digit") || (Object.defineProperty(i.ready, "_Z3_mk_char_is_digit", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_char_is_digit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_char_is_digit", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_char_is_digit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_linear_order") || (Object.defineProperty(i.ready, "_Z3_mk_linear_order", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_linear_order on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_linear_order", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_linear_order on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_partial_order") || (Object.defineProperty(i.ready, "_Z3_mk_partial_order", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_partial_order on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_partial_order", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_partial_order on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_piecewise_linear_order") || (Object.defineProperty(i.ready, "_Z3_mk_piecewise_linear_order", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_piecewise_linear_order on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_piecewise_linear_order", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_piecewise_linear_order on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_tree_order") || (Object.defineProperty(i.ready, "_Z3_mk_tree_order", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_tree_order on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_tree_order", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_tree_order on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_transitive_closure") || (Object.defineProperty(i.ready, "_Z3_mk_transitive_closure", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_transitive_closure on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_transitive_closure", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_transitive_closure on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_pattern") || (Object.defineProperty(i.ready, "_Z3_mk_pattern", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_pattern on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_pattern", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_pattern on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_bound") || (Object.defineProperty(i.ready, "_Z3_mk_bound", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_bound on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_bound", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_bound on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_forall") || (Object.defineProperty(i.ready, "_Z3_mk_forall", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_forall on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_forall", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_forall on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_exists") || (Object.defineProperty(i.ready, "_Z3_mk_exists", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_exists on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_exists", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_exists on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_quantifier") || (Object.defineProperty(i.ready, "_Z3_mk_quantifier", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_quantifier on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_quantifier", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_quantifier on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_quantifier_ex") || (Object.defineProperty(i.ready, "_Z3_mk_quantifier_ex", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_quantifier_ex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_quantifier_ex", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_quantifier_ex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_forall_const") || (Object.defineProperty(i.ready, "_Z3_mk_forall_const", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_forall_const on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_forall_const", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_forall_const on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_exists_const") || (Object.defineProperty(i.ready, "_Z3_mk_exists_const", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_exists_const on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_exists_const", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_exists_const on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_quantifier_const") || (Object.defineProperty(i.ready, "_Z3_mk_quantifier_const", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_quantifier_const on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_quantifier_const", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_quantifier_const on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_quantifier_const_ex") || (Object.defineProperty(i.ready, "_Z3_mk_quantifier_const_ex", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_quantifier_const_ex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_quantifier_const_ex", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_quantifier_const_ex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_lambda") || (Object.defineProperty(i.ready, "_Z3_mk_lambda", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_lambda on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_lambda", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_lambda on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_lambda_const") || (Object.defineProperty(i.ready, "_Z3_mk_lambda_const", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_lambda_const on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_lambda_const", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_lambda_const on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_symbol_kind") || (Object.defineProperty(i.ready, "_Z3_get_symbol_kind", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_symbol_kind on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_symbol_kind", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_symbol_kind on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_symbol_int") || (Object.defineProperty(i.ready, "_Z3_get_symbol_int", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_symbol_int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_symbol_int", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_symbol_int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_symbol_string") || (Object.defineProperty(i.ready, "_Z3_get_symbol_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_symbol_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_symbol_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_symbol_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_sort_name") || (Object.defineProperty(i.ready, "_Z3_get_sort_name", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_sort_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_sort_name", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_sort_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_sort_id") || (Object.defineProperty(i.ready, "_Z3_get_sort_id", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_sort_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_sort_id", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_sort_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_sort_to_ast") || (Object.defineProperty(i.ready, "_Z3_sort_to_ast", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_sort_to_ast on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_sort_to_ast", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_sort_to_ast on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_is_eq_sort") || (Object.defineProperty(i.ready, "_Z3_is_eq_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_is_eq_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_is_eq_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_is_eq_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_sort_kind") || (Object.defineProperty(i.ready, "_Z3_get_sort_kind", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_sort_kind on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_sort_kind", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_sort_kind on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_bv_sort_size") || (Object.defineProperty(i.ready, "_Z3_get_bv_sort_size", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_bv_sort_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_bv_sort_size", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_bv_sort_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_finite_domain_sort_size") || (Object.defineProperty(i.ready, "_Z3_get_finite_domain_sort_size", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_finite_domain_sort_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_finite_domain_sort_size", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_finite_domain_sort_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_array_sort_domain") || (Object.defineProperty(i.ready, "_Z3_get_array_sort_domain", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_array_sort_domain on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_array_sort_domain", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_array_sort_domain on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_array_sort_domain_n") || (Object.defineProperty(i.ready, "_Z3_get_array_sort_domain_n", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_array_sort_domain_n on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_array_sort_domain_n", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_array_sort_domain_n on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_array_sort_range") || (Object.defineProperty(i.ready, "_Z3_get_array_sort_range", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_array_sort_range on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_array_sort_range", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_array_sort_range on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_tuple_sort_mk_decl") || (Object.defineProperty(i.ready, "_Z3_get_tuple_sort_mk_decl", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_tuple_sort_mk_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_tuple_sort_mk_decl", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_tuple_sort_mk_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_tuple_sort_num_fields") || (Object.defineProperty(i.ready, "_Z3_get_tuple_sort_num_fields", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_tuple_sort_num_fields on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_tuple_sort_num_fields", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_tuple_sort_num_fields on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_tuple_sort_field_decl") || (Object.defineProperty(i.ready, "_Z3_get_tuple_sort_field_decl", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_tuple_sort_field_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_tuple_sort_field_decl", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_tuple_sort_field_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_datatype_sort_num_constructors") || (Object.defineProperty(i.ready, "_Z3_get_datatype_sort_num_constructors", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_datatype_sort_num_constructors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_datatype_sort_num_constructors", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_datatype_sort_num_constructors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_datatype_sort_constructor") || (Object.defineProperty(i.ready, "_Z3_get_datatype_sort_constructor", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_datatype_sort_constructor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_datatype_sort_constructor", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_datatype_sort_constructor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_datatype_sort_recognizer") || (Object.defineProperty(i.ready, "_Z3_get_datatype_sort_recognizer", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_datatype_sort_recognizer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_datatype_sort_recognizer", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_datatype_sort_recognizer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_datatype_sort_constructor_accessor") || (Object.defineProperty(i.ready, "_Z3_get_datatype_sort_constructor_accessor", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_datatype_sort_constructor_accessor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_datatype_sort_constructor_accessor", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_datatype_sort_constructor_accessor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_datatype_update_field") || (Object.defineProperty(i.ready, "_Z3_datatype_update_field", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_datatype_update_field on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_datatype_update_field", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_datatype_update_field on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_relation_arity") || (Object.defineProperty(i.ready, "_Z3_get_relation_arity", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_relation_arity on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_relation_arity", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_relation_arity on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_relation_column") || (Object.defineProperty(i.ready, "_Z3_get_relation_column", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_relation_column on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_relation_column", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_relation_column on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_atmost") || (Object.defineProperty(i.ready, "_Z3_mk_atmost", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_atmost on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_atmost", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_atmost on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_atleast") || (Object.defineProperty(i.ready, "_Z3_mk_atleast", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_atleast on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_atleast", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_atleast on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_pble") || (Object.defineProperty(i.ready, "_Z3_mk_pble", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_pble on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_pble", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_pble on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_pbge") || (Object.defineProperty(i.ready, "_Z3_mk_pbge", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_pbge on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_pbge", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_pbge on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_pbeq") || (Object.defineProperty(i.ready, "_Z3_mk_pbeq", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_pbeq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_pbeq", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_pbeq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_func_decl_to_ast") || (Object.defineProperty(i.ready, "_Z3_func_decl_to_ast", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_func_decl_to_ast on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_func_decl_to_ast", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_func_decl_to_ast on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_is_eq_func_decl") || (Object.defineProperty(i.ready, "_Z3_is_eq_func_decl", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_is_eq_func_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_is_eq_func_decl", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_is_eq_func_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_func_decl_id") || (Object.defineProperty(i.ready, "_Z3_get_func_decl_id", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_func_decl_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_func_decl_id", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_func_decl_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_decl_name") || (Object.defineProperty(i.ready, "_Z3_get_decl_name", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_decl_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_decl_name", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_decl_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_decl_kind") || (Object.defineProperty(i.ready, "_Z3_get_decl_kind", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_decl_kind on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_decl_kind", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_decl_kind on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_domain_size") || (Object.defineProperty(i.ready, "_Z3_get_domain_size", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_domain_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_domain_size", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_domain_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_arity") || (Object.defineProperty(i.ready, "_Z3_get_arity", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_arity on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_arity", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_arity on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_domain") || (Object.defineProperty(i.ready, "_Z3_get_domain", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_domain on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_domain", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_domain on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_range") || (Object.defineProperty(i.ready, "_Z3_get_range", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_range on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_range", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_range on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_decl_num_parameters") || (Object.defineProperty(i.ready, "_Z3_get_decl_num_parameters", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_decl_num_parameters on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_decl_num_parameters", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_decl_num_parameters on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_decl_parameter_kind") || (Object.defineProperty(i.ready, "_Z3_get_decl_parameter_kind", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_decl_parameter_kind on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_decl_parameter_kind", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_decl_parameter_kind on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_decl_int_parameter") || (Object.defineProperty(i.ready, "_Z3_get_decl_int_parameter", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_decl_int_parameter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_decl_int_parameter", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_decl_int_parameter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_decl_double_parameter") || (Object.defineProperty(i.ready, "_Z3_get_decl_double_parameter", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_decl_double_parameter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_decl_double_parameter", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_decl_double_parameter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_decl_symbol_parameter") || (Object.defineProperty(i.ready, "_Z3_get_decl_symbol_parameter", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_decl_symbol_parameter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_decl_symbol_parameter", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_decl_symbol_parameter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_decl_sort_parameter") || (Object.defineProperty(i.ready, "_Z3_get_decl_sort_parameter", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_decl_sort_parameter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_decl_sort_parameter", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_decl_sort_parameter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_decl_ast_parameter") || (Object.defineProperty(i.ready, "_Z3_get_decl_ast_parameter", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_decl_ast_parameter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_decl_ast_parameter", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_decl_ast_parameter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_decl_func_decl_parameter") || (Object.defineProperty(i.ready, "_Z3_get_decl_func_decl_parameter", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_decl_func_decl_parameter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_decl_func_decl_parameter", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_decl_func_decl_parameter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_decl_rational_parameter") || (Object.defineProperty(i.ready, "_Z3_get_decl_rational_parameter", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_decl_rational_parameter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_decl_rational_parameter", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_decl_rational_parameter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_app_to_ast") || (Object.defineProperty(i.ready, "_Z3_app_to_ast", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_app_to_ast on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_app_to_ast", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_app_to_ast on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_app_decl") || (Object.defineProperty(i.ready, "_Z3_get_app_decl", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_app_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_app_decl", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_app_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_app_num_args") || (Object.defineProperty(i.ready, "_Z3_get_app_num_args", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_app_num_args on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_app_num_args", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_app_num_args on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_app_arg") || (Object.defineProperty(i.ready, "_Z3_get_app_arg", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_app_arg on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_app_arg", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_app_arg on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_is_eq_ast") || (Object.defineProperty(i.ready, "_Z3_is_eq_ast", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_is_eq_ast on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_is_eq_ast", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_is_eq_ast on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_ast_id") || (Object.defineProperty(i.ready, "_Z3_get_ast_id", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_ast_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_ast_id", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_ast_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_ast_hash") || (Object.defineProperty(i.ready, "_Z3_get_ast_hash", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_ast_hash on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_ast_hash", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_ast_hash on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_sort") || (Object.defineProperty(i.ready, "_Z3_get_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_is_well_sorted") || (Object.defineProperty(i.ready, "_Z3_is_well_sorted", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_is_well_sorted on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_is_well_sorted", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_is_well_sorted on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_bool_value") || (Object.defineProperty(i.ready, "_Z3_get_bool_value", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_bool_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_bool_value", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_bool_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_ast_kind") || (Object.defineProperty(i.ready, "_Z3_get_ast_kind", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_ast_kind on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_ast_kind", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_ast_kind on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_is_app") || (Object.defineProperty(i.ready, "_Z3_is_app", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_is_app on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_is_app", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_is_app on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_is_numeral_ast") || (Object.defineProperty(i.ready, "_Z3_is_numeral_ast", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_is_numeral_ast on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_is_numeral_ast", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_is_numeral_ast on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_is_algebraic_number") || (Object.defineProperty(i.ready, "_Z3_is_algebraic_number", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_is_algebraic_number on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_is_algebraic_number", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_is_algebraic_number on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_to_app") || (Object.defineProperty(i.ready, "_Z3_to_app", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_to_app on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_to_app", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_to_app on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_to_func_decl") || (Object.defineProperty(i.ready, "_Z3_to_func_decl", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_to_func_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_to_func_decl", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_to_func_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_numeral_string") || (Object.defineProperty(i.ready, "_Z3_get_numeral_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_numeral_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_numeral_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_numeral_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_numeral_binary_string") || (Object.defineProperty(i.ready, "_Z3_get_numeral_binary_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_numeral_binary_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_numeral_binary_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_numeral_binary_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_numeral_decimal_string") || (Object.defineProperty(i.ready, "_Z3_get_numeral_decimal_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_numeral_decimal_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_numeral_decimal_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_numeral_decimal_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_numeral_double") || (Object.defineProperty(i.ready, "_Z3_get_numeral_double", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_numeral_double on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_numeral_double", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_numeral_double on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_numerator") || (Object.defineProperty(i.ready, "_Z3_get_numerator", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_numerator on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_numerator", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_numerator on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_denominator") || (Object.defineProperty(i.ready, "_Z3_get_denominator", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_denominator on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_denominator", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_denominator on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_numeral_small") || (Object.defineProperty(i.ready, "_Z3_get_numeral_small", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_numeral_small on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_numeral_small", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_numeral_small on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_numeral_int") || (Object.defineProperty(i.ready, "_Z3_get_numeral_int", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_numeral_int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_numeral_int", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_numeral_int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_numeral_uint") || (Object.defineProperty(i.ready, "_Z3_get_numeral_uint", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_numeral_uint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_numeral_uint", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_numeral_uint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_numeral_uint64") || (Object.defineProperty(i.ready, "_Z3_get_numeral_uint64", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_numeral_uint64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_numeral_uint64", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_numeral_uint64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_numeral_int64") || (Object.defineProperty(i.ready, "_Z3_get_numeral_int64", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_numeral_int64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_numeral_int64", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_numeral_int64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_numeral_rational_int64") || (Object.defineProperty(i.ready, "_Z3_get_numeral_rational_int64", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_numeral_rational_int64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_numeral_rational_int64", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_numeral_rational_int64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_algebraic_number_lower") || (Object.defineProperty(i.ready, "_Z3_get_algebraic_number_lower", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_algebraic_number_lower on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_algebraic_number_lower", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_algebraic_number_lower on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_algebraic_number_upper") || (Object.defineProperty(i.ready, "_Z3_get_algebraic_number_upper", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_algebraic_number_upper on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_algebraic_number_upper", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_algebraic_number_upper on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_pattern_to_ast") || (Object.defineProperty(i.ready, "_Z3_pattern_to_ast", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_pattern_to_ast on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_pattern_to_ast", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_pattern_to_ast on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_pattern_num_terms") || (Object.defineProperty(i.ready, "_Z3_get_pattern_num_terms", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_pattern_num_terms on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_pattern_num_terms", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_pattern_num_terms on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_pattern") || (Object.defineProperty(i.ready, "_Z3_get_pattern", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_pattern on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_pattern", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_pattern on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_index_value") || (Object.defineProperty(i.ready, "_Z3_get_index_value", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_index_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_index_value", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_index_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_is_quantifier_forall") || (Object.defineProperty(i.ready, "_Z3_is_quantifier_forall", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_is_quantifier_forall on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_is_quantifier_forall", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_is_quantifier_forall on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_is_quantifier_exists") || (Object.defineProperty(i.ready, "_Z3_is_quantifier_exists", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_is_quantifier_exists on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_is_quantifier_exists", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_is_quantifier_exists on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_is_lambda") || (Object.defineProperty(i.ready, "_Z3_is_lambda", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_is_lambda on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_is_lambda", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_is_lambda on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_quantifier_weight") || (Object.defineProperty(i.ready, "_Z3_get_quantifier_weight", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_quantifier_weight on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_quantifier_weight", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_quantifier_weight on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_quantifier_num_patterns") || (Object.defineProperty(i.ready, "_Z3_get_quantifier_num_patterns", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_quantifier_num_patterns on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_quantifier_num_patterns", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_quantifier_num_patterns on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_quantifier_pattern_ast") || (Object.defineProperty(i.ready, "_Z3_get_quantifier_pattern_ast", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_quantifier_pattern_ast on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_quantifier_pattern_ast", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_quantifier_pattern_ast on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_quantifier_num_no_patterns") || (Object.defineProperty(i.ready, "_Z3_get_quantifier_num_no_patterns", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_quantifier_num_no_patterns on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_quantifier_num_no_patterns", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_quantifier_num_no_patterns on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_quantifier_no_pattern_ast") || (Object.defineProperty(i.ready, "_Z3_get_quantifier_no_pattern_ast", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_quantifier_no_pattern_ast on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_quantifier_no_pattern_ast", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_quantifier_no_pattern_ast on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_quantifier_num_bound") || (Object.defineProperty(i.ready, "_Z3_get_quantifier_num_bound", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_quantifier_num_bound on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_quantifier_num_bound", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_quantifier_num_bound on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_quantifier_bound_name") || (Object.defineProperty(i.ready, "_Z3_get_quantifier_bound_name", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_quantifier_bound_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_quantifier_bound_name", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_quantifier_bound_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_quantifier_bound_sort") || (Object.defineProperty(i.ready, "_Z3_get_quantifier_bound_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_quantifier_bound_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_quantifier_bound_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_quantifier_bound_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_quantifier_body") || (Object.defineProperty(i.ready, "_Z3_get_quantifier_body", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_quantifier_body on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_quantifier_body", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_quantifier_body on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_simplify") || (Object.defineProperty(i.ready, "_Z3_simplify", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_simplify on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_simplify", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_simplify on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_simplify_ex") || (Object.defineProperty(i.ready, "_Z3_simplify_ex", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_simplify_ex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_simplify_ex", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_simplify_ex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_simplify_get_help") || (Object.defineProperty(i.ready, "_Z3_simplify_get_help", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_simplify_get_help on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_simplify_get_help", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_simplify_get_help on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_simplify_get_param_descrs") || (Object.defineProperty(i.ready, "_Z3_simplify_get_param_descrs", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_simplify_get_param_descrs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_simplify_get_param_descrs", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_simplify_get_param_descrs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_update_term") || (Object.defineProperty(i.ready, "_Z3_update_term", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_update_term on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_update_term", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_update_term on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_substitute") || (Object.defineProperty(i.ready, "_Z3_substitute", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_substitute on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_substitute", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_substitute on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_substitute_vars") || (Object.defineProperty(i.ready, "_Z3_substitute_vars", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_substitute_vars on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_substitute_vars", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_substitute_vars on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_substitute_funs") || (Object.defineProperty(i.ready, "_Z3_substitute_funs", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_substitute_funs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_substitute_funs", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_substitute_funs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_translate") || (Object.defineProperty(i.ready, "_Z3_translate", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_translate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_translate", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_translate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_model") || (Object.defineProperty(i.ready, "_Z3_mk_model", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_model on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_model", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_model on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_model_inc_ref") || (Object.defineProperty(i.ready, "_Z3_model_inc_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_model_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_model_inc_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_model_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_model_dec_ref") || (Object.defineProperty(i.ready, "_Z3_model_dec_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_model_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_model_dec_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_model_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_model_eval") || (Object.defineProperty(i.ready, "_Z3_model_eval", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_model_eval on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_model_eval", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_model_eval on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_model_get_const_interp") || (Object.defineProperty(i.ready, "_Z3_model_get_const_interp", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_model_get_const_interp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_model_get_const_interp", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_model_get_const_interp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_model_has_interp") || (Object.defineProperty(i.ready, "_Z3_model_has_interp", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_model_has_interp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_model_has_interp", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_model_has_interp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_model_get_func_interp") || (Object.defineProperty(i.ready, "_Z3_model_get_func_interp", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_model_get_func_interp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_model_get_func_interp", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_model_get_func_interp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_model_get_num_consts") || (Object.defineProperty(i.ready, "_Z3_model_get_num_consts", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_model_get_num_consts on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_model_get_num_consts", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_model_get_num_consts on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_model_get_const_decl") || (Object.defineProperty(i.ready, "_Z3_model_get_const_decl", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_model_get_const_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_model_get_const_decl", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_model_get_const_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_model_get_num_funcs") || (Object.defineProperty(i.ready, "_Z3_model_get_num_funcs", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_model_get_num_funcs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_model_get_num_funcs", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_model_get_num_funcs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_model_get_func_decl") || (Object.defineProperty(i.ready, "_Z3_model_get_func_decl", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_model_get_func_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_model_get_func_decl", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_model_get_func_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_model_get_num_sorts") || (Object.defineProperty(i.ready, "_Z3_model_get_num_sorts", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_model_get_num_sorts on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_model_get_num_sorts", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_model_get_num_sorts on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_model_get_sort") || (Object.defineProperty(i.ready, "_Z3_model_get_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_model_get_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_model_get_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_model_get_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_model_get_sort_universe") || (Object.defineProperty(i.ready, "_Z3_model_get_sort_universe", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_model_get_sort_universe on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_model_get_sort_universe", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_model_get_sort_universe on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_model_translate") || (Object.defineProperty(i.ready, "_Z3_model_translate", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_model_translate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_model_translate", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_model_translate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_is_as_array") || (Object.defineProperty(i.ready, "_Z3_is_as_array", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_is_as_array on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_is_as_array", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_is_as_array on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_as_array_func_decl") || (Object.defineProperty(i.ready, "_Z3_get_as_array_func_decl", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_as_array_func_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_as_array_func_decl", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_as_array_func_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_add_func_interp") || (Object.defineProperty(i.ready, "_Z3_add_func_interp", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_add_func_interp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_add_func_interp", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_add_func_interp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_add_const_interp") || (Object.defineProperty(i.ready, "_Z3_add_const_interp", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_add_const_interp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_add_const_interp", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_add_const_interp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_func_interp_inc_ref") || (Object.defineProperty(i.ready, "_Z3_func_interp_inc_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_func_interp_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_func_interp_inc_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_func_interp_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_func_interp_dec_ref") || (Object.defineProperty(i.ready, "_Z3_func_interp_dec_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_func_interp_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_func_interp_dec_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_func_interp_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_func_interp_get_num_entries") || (Object.defineProperty(i.ready, "_Z3_func_interp_get_num_entries", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_func_interp_get_num_entries on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_func_interp_get_num_entries", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_func_interp_get_num_entries on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_func_interp_get_entry") || (Object.defineProperty(i.ready, "_Z3_func_interp_get_entry", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_func_interp_get_entry on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_func_interp_get_entry", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_func_interp_get_entry on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_func_interp_get_else") || (Object.defineProperty(i.ready, "_Z3_func_interp_get_else", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_func_interp_get_else on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_func_interp_get_else", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_func_interp_get_else on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_func_interp_set_else") || (Object.defineProperty(i.ready, "_Z3_func_interp_set_else", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_func_interp_set_else on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_func_interp_set_else", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_func_interp_set_else on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_func_interp_get_arity") || (Object.defineProperty(i.ready, "_Z3_func_interp_get_arity", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_func_interp_get_arity on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_func_interp_get_arity", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_func_interp_get_arity on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_func_interp_add_entry") || (Object.defineProperty(i.ready, "_Z3_func_interp_add_entry", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_func_interp_add_entry on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_func_interp_add_entry", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_func_interp_add_entry on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_func_entry_inc_ref") || (Object.defineProperty(i.ready, "_Z3_func_entry_inc_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_func_entry_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_func_entry_inc_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_func_entry_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_func_entry_dec_ref") || (Object.defineProperty(i.ready, "_Z3_func_entry_dec_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_func_entry_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_func_entry_dec_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_func_entry_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_func_entry_get_value") || (Object.defineProperty(i.ready, "_Z3_func_entry_get_value", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_func_entry_get_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_func_entry_get_value", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_func_entry_get_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_func_entry_get_num_args") || (Object.defineProperty(i.ready, "_Z3_func_entry_get_num_args", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_func_entry_get_num_args on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_func_entry_get_num_args", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_func_entry_get_num_args on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_func_entry_get_arg") || (Object.defineProperty(i.ready, "_Z3_func_entry_get_arg", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_func_entry_get_arg on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_func_entry_get_arg", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_func_entry_get_arg on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_open_log") || (Object.defineProperty(i.ready, "_Z3_open_log", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_open_log on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_open_log", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_open_log on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_append_log") || (Object.defineProperty(i.ready, "_Z3_append_log", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_append_log on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_append_log", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_append_log on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_close_log") || (Object.defineProperty(i.ready, "_Z3_close_log", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_close_log on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_close_log", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_close_log on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_toggle_warning_messages") || (Object.defineProperty(i.ready, "_Z3_toggle_warning_messages", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_toggle_warning_messages on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_toggle_warning_messages", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_toggle_warning_messages on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_set_ast_print_mode") || (Object.defineProperty(i.ready, "_Z3_set_ast_print_mode", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_set_ast_print_mode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_set_ast_print_mode", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_set_ast_print_mode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_to_string") || (Object.defineProperty(i.ready, "_Z3_ast_to_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_to_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_pattern_to_string") || (Object.defineProperty(i.ready, "_Z3_pattern_to_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_pattern_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_pattern_to_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_pattern_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_sort_to_string") || (Object.defineProperty(i.ready, "_Z3_sort_to_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_sort_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_sort_to_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_sort_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_func_decl_to_string") || (Object.defineProperty(i.ready, "_Z3_func_decl_to_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_func_decl_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_func_decl_to_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_func_decl_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_model_to_string") || (Object.defineProperty(i.ready, "_Z3_model_to_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_model_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_model_to_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_model_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_benchmark_to_smtlib_string") || (Object.defineProperty(i.ready, "_Z3_benchmark_to_smtlib_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_benchmark_to_smtlib_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_benchmark_to_smtlib_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_benchmark_to_smtlib_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_parse_smtlib2_string") || (Object.defineProperty(i.ready, "_Z3_parse_smtlib2_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_parse_smtlib2_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_parse_smtlib2_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_parse_smtlib2_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_parse_smtlib2_file") || (Object.defineProperty(i.ready, "_Z3_parse_smtlib2_file", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_parse_smtlib2_file on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_parse_smtlib2_file", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_parse_smtlib2_file on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_eval_smtlib2_string") || (Object.defineProperty(i.ready, "_Z3_eval_smtlib2_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_eval_smtlib2_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_eval_smtlib2_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_eval_smtlib2_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_parser_context") || (Object.defineProperty(i.ready, "_Z3_mk_parser_context", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_parser_context on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_parser_context", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_parser_context on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_parser_context_inc_ref") || (Object.defineProperty(i.ready, "_Z3_parser_context_inc_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_parser_context_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_parser_context_inc_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_parser_context_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_parser_context_dec_ref") || (Object.defineProperty(i.ready, "_Z3_parser_context_dec_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_parser_context_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_parser_context_dec_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_parser_context_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_parser_context_add_sort") || (Object.defineProperty(i.ready, "_Z3_parser_context_add_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_parser_context_add_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_parser_context_add_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_parser_context_add_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_parser_context_add_decl") || (Object.defineProperty(i.ready, "_Z3_parser_context_add_decl", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_parser_context_add_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_parser_context_add_decl", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_parser_context_add_decl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_parser_context_from_string") || (Object.defineProperty(i.ready, "_Z3_parser_context_from_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_parser_context_from_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_parser_context_from_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_parser_context_from_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_error_code") || (Object.defineProperty(i.ready, "_Z3_get_error_code", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_error_code on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_error_code", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_error_code on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_set_error") || (Object.defineProperty(i.ready, "_Z3_set_error", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_set_error on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_set_error", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_set_error on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_error_msg") || (Object.defineProperty(i.ready, "_Z3_get_error_msg", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_error_msg on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_error_msg", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_error_msg on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_version") || (Object.defineProperty(i.ready, "_Z3_get_version", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_version on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_version", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_version on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_full_version") || (Object.defineProperty(i.ready, "_Z3_get_full_version", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_full_version on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_full_version", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_full_version on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_enable_trace") || (Object.defineProperty(i.ready, "_Z3_enable_trace", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_enable_trace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_enable_trace", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_enable_trace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_disable_trace") || (Object.defineProperty(i.ready, "_Z3_disable_trace", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_disable_trace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_disable_trace", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_disable_trace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_reset_memory") || (Object.defineProperty(i.ready, "_Z3_reset_memory", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_reset_memory on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_reset_memory", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_reset_memory on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_finalize_memory") || (Object.defineProperty(i.ready, "_Z3_finalize_memory", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_finalize_memory on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_finalize_memory", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_finalize_memory on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_goal") || (Object.defineProperty(i.ready, "_Z3_mk_goal", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_goal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_goal", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_goal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_goal_inc_ref") || (Object.defineProperty(i.ready, "_Z3_goal_inc_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_goal_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_goal_inc_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_goal_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_goal_dec_ref") || (Object.defineProperty(i.ready, "_Z3_goal_dec_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_goal_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_goal_dec_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_goal_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_goal_precision") || (Object.defineProperty(i.ready, "_Z3_goal_precision", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_goal_precision on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_goal_precision", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_goal_precision on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_goal_assert") || (Object.defineProperty(i.ready, "_Z3_goal_assert", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_goal_assert on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_goal_assert", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_goal_assert on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_goal_inconsistent") || (Object.defineProperty(i.ready, "_Z3_goal_inconsistent", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_goal_inconsistent on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_goal_inconsistent", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_goal_inconsistent on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_goal_depth") || (Object.defineProperty(i.ready, "_Z3_goal_depth", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_goal_depth on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_goal_depth", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_goal_depth on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_goal_reset") || (Object.defineProperty(i.ready, "_Z3_goal_reset", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_goal_reset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_goal_reset", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_goal_reset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_goal_size") || (Object.defineProperty(i.ready, "_Z3_goal_size", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_goal_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_goal_size", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_goal_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_goal_formula") || (Object.defineProperty(i.ready, "_Z3_goal_formula", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_goal_formula on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_goal_formula", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_goal_formula on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_goal_num_exprs") || (Object.defineProperty(i.ready, "_Z3_goal_num_exprs", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_goal_num_exprs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_goal_num_exprs", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_goal_num_exprs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_goal_is_decided_sat") || (Object.defineProperty(i.ready, "_Z3_goal_is_decided_sat", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_goal_is_decided_sat on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_goal_is_decided_sat", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_goal_is_decided_sat on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_goal_is_decided_unsat") || (Object.defineProperty(i.ready, "_Z3_goal_is_decided_unsat", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_goal_is_decided_unsat on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_goal_is_decided_unsat", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_goal_is_decided_unsat on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_goal_translate") || (Object.defineProperty(i.ready, "_Z3_goal_translate", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_goal_translate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_goal_translate", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_goal_translate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_goal_convert_model") || (Object.defineProperty(i.ready, "_Z3_goal_convert_model", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_goal_convert_model on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_goal_convert_model", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_goal_convert_model on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_goal_to_string") || (Object.defineProperty(i.ready, "_Z3_goal_to_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_goal_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_goal_to_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_goal_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_goal_to_dimacs_string") || (Object.defineProperty(i.ready, "_Z3_goal_to_dimacs_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_goal_to_dimacs_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_goal_to_dimacs_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_goal_to_dimacs_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_tactic") || (Object.defineProperty(i.ready, "_Z3_mk_tactic", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_tactic on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_tactic", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_tactic on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_inc_ref") || (Object.defineProperty(i.ready, "_Z3_tactic_inc_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_inc_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_dec_ref") || (Object.defineProperty(i.ready, "_Z3_tactic_dec_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_dec_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_probe") || (Object.defineProperty(i.ready, "_Z3_mk_probe", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_probe on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_probe", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_probe on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_probe_inc_ref") || (Object.defineProperty(i.ready, "_Z3_probe_inc_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_probe_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_probe_inc_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_probe_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_probe_dec_ref") || (Object.defineProperty(i.ready, "_Z3_probe_dec_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_probe_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_probe_dec_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_probe_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_and_then") || (Object.defineProperty(i.ready, "_Z3_tactic_and_then", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_and_then on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_and_then", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_and_then on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_or_else") || (Object.defineProperty(i.ready, "_Z3_tactic_or_else", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_or_else on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_or_else", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_or_else on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_par_or") || (Object.defineProperty(i.ready, "_Z3_tactic_par_or", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_par_or on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_par_or", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_par_or on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_par_and_then") || (Object.defineProperty(i.ready, "_Z3_tactic_par_and_then", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_par_and_then on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_par_and_then", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_par_and_then on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_try_for") || (Object.defineProperty(i.ready, "_Z3_tactic_try_for", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_try_for on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_try_for", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_try_for on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_when") || (Object.defineProperty(i.ready, "_Z3_tactic_when", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_when on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_when", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_when on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_cond") || (Object.defineProperty(i.ready, "_Z3_tactic_cond", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_cond on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_cond", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_cond on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_repeat") || (Object.defineProperty(i.ready, "_Z3_tactic_repeat", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_repeat on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_repeat", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_repeat on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_skip") || (Object.defineProperty(i.ready, "_Z3_tactic_skip", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_skip on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_skip", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_skip on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_fail") || (Object.defineProperty(i.ready, "_Z3_tactic_fail", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_fail on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_fail", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_fail on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_fail_if") || (Object.defineProperty(i.ready, "_Z3_tactic_fail_if", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_fail_if on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_fail_if", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_fail_if on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_fail_if_not_decided") || (Object.defineProperty(i.ready, "_Z3_tactic_fail_if_not_decided", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_fail_if_not_decided on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_fail_if_not_decided", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_fail_if_not_decided on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_using_params") || (Object.defineProperty(i.ready, "_Z3_tactic_using_params", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_using_params on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_using_params", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_using_params on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_simplifier") || (Object.defineProperty(i.ready, "_Z3_mk_simplifier", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_simplifier on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_simplifier", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_simplifier on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_simplifier_inc_ref") || (Object.defineProperty(i.ready, "_Z3_simplifier_inc_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_simplifier_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_simplifier_inc_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_simplifier_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_simplifier_dec_ref") || (Object.defineProperty(i.ready, "_Z3_simplifier_dec_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_simplifier_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_simplifier_dec_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_simplifier_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_add_simplifier") || (Object.defineProperty(i.ready, "_Z3_solver_add_simplifier", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_add_simplifier on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_add_simplifier", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_add_simplifier on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_simplifier_and_then") || (Object.defineProperty(i.ready, "_Z3_simplifier_and_then", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_simplifier_and_then on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_simplifier_and_then", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_simplifier_and_then on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_simplifier_using_params") || (Object.defineProperty(i.ready, "_Z3_simplifier_using_params", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_simplifier_using_params on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_simplifier_using_params", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_simplifier_using_params on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_num_simplifiers") || (Object.defineProperty(i.ready, "_Z3_get_num_simplifiers", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_num_simplifiers on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_num_simplifiers", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_num_simplifiers on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_simplifier_name") || (Object.defineProperty(i.ready, "_Z3_get_simplifier_name", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_simplifier_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_simplifier_name", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_simplifier_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_simplifier_get_help") || (Object.defineProperty(i.ready, "_Z3_simplifier_get_help", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_simplifier_get_help on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_simplifier_get_help", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_simplifier_get_help on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_simplifier_get_param_descrs") || (Object.defineProperty(i.ready, "_Z3_simplifier_get_param_descrs", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_simplifier_get_param_descrs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_simplifier_get_param_descrs", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_simplifier_get_param_descrs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_simplifier_get_descr") || (Object.defineProperty(i.ready, "_Z3_simplifier_get_descr", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_simplifier_get_descr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_simplifier_get_descr", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_simplifier_get_descr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_probe_const") || (Object.defineProperty(i.ready, "_Z3_probe_const", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_probe_const on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_probe_const", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_probe_const on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_probe_lt") || (Object.defineProperty(i.ready, "_Z3_probe_lt", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_probe_lt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_probe_lt", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_probe_lt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_probe_gt") || (Object.defineProperty(i.ready, "_Z3_probe_gt", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_probe_gt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_probe_gt", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_probe_gt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_probe_le") || (Object.defineProperty(i.ready, "_Z3_probe_le", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_probe_le on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_probe_le", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_probe_le on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_probe_ge") || (Object.defineProperty(i.ready, "_Z3_probe_ge", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_probe_ge on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_probe_ge", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_probe_ge on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_probe_eq") || (Object.defineProperty(i.ready, "_Z3_probe_eq", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_probe_eq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_probe_eq", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_probe_eq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_probe_and") || (Object.defineProperty(i.ready, "_Z3_probe_and", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_probe_and on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_probe_and", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_probe_and on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_probe_or") || (Object.defineProperty(i.ready, "_Z3_probe_or", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_probe_or on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_probe_or", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_probe_or on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_probe_not") || (Object.defineProperty(i.ready, "_Z3_probe_not", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_probe_not on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_probe_not", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_probe_not on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_num_tactics") || (Object.defineProperty(i.ready, "_Z3_get_num_tactics", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_num_tactics on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_num_tactics", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_num_tactics on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_tactic_name") || (Object.defineProperty(i.ready, "_Z3_get_tactic_name", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_tactic_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_tactic_name", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_tactic_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_num_probes") || (Object.defineProperty(i.ready, "_Z3_get_num_probes", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_num_probes on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_num_probes", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_num_probes on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_probe_name") || (Object.defineProperty(i.ready, "_Z3_get_probe_name", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_probe_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_probe_name", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_probe_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_get_help") || (Object.defineProperty(i.ready, "_Z3_tactic_get_help", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_get_help on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_get_help", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_get_help on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_get_param_descrs") || (Object.defineProperty(i.ready, "_Z3_tactic_get_param_descrs", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_get_param_descrs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_get_param_descrs", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_get_param_descrs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_get_descr") || (Object.defineProperty(i.ready, "_Z3_tactic_get_descr", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_get_descr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_get_descr", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_get_descr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_probe_get_descr") || (Object.defineProperty(i.ready, "_Z3_probe_get_descr", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_probe_get_descr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_probe_get_descr", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_probe_get_descr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_probe_apply") || (Object.defineProperty(i.ready, "_Z3_probe_apply", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_probe_apply on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_probe_apply", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_probe_apply on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_apply") || (Object.defineProperty(i.ready, "_Z3_tactic_apply", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_apply on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_apply", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_apply on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_tactic_apply_ex") || (Object.defineProperty(i.ready, "_Z3_tactic_apply_ex", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_tactic_apply_ex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_tactic_apply_ex", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_tactic_apply_ex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_apply_result_inc_ref") || (Object.defineProperty(i.ready, "_Z3_apply_result_inc_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_apply_result_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_apply_result_inc_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_apply_result_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_apply_result_dec_ref") || (Object.defineProperty(i.ready, "_Z3_apply_result_dec_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_apply_result_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_apply_result_dec_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_apply_result_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_apply_result_to_string") || (Object.defineProperty(i.ready, "_Z3_apply_result_to_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_apply_result_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_apply_result_to_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_apply_result_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_apply_result_get_num_subgoals") || (Object.defineProperty(i.ready, "_Z3_apply_result_get_num_subgoals", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_apply_result_get_num_subgoals on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_apply_result_get_num_subgoals", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_apply_result_get_num_subgoals on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_apply_result_get_subgoal") || (Object.defineProperty(i.ready, "_Z3_apply_result_get_subgoal", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_apply_result_get_subgoal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_apply_result_get_subgoal", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_apply_result_get_subgoal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_solver") || (Object.defineProperty(i.ready, "_Z3_mk_solver", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_solver on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_solver", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_solver on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_simple_solver") || (Object.defineProperty(i.ready, "_Z3_mk_simple_solver", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_simple_solver on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_simple_solver", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_simple_solver on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_solver_for_logic") || (Object.defineProperty(i.ready, "_Z3_mk_solver_for_logic", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_solver_for_logic on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_solver_for_logic", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_solver_for_logic on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_solver_from_tactic") || (Object.defineProperty(i.ready, "_Z3_mk_solver_from_tactic", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_solver_from_tactic on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_solver_from_tactic", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_solver_from_tactic on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_translate") || (Object.defineProperty(i.ready, "_Z3_solver_translate", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_translate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_translate", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_translate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_import_model_converter") || (Object.defineProperty(i.ready, "_Z3_solver_import_model_converter", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_import_model_converter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_import_model_converter", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_import_model_converter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_get_help") || (Object.defineProperty(i.ready, "_Z3_solver_get_help", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_get_help on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_get_help", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_get_help on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_get_param_descrs") || (Object.defineProperty(i.ready, "_Z3_solver_get_param_descrs", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_get_param_descrs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_get_param_descrs", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_get_param_descrs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_set_params") || (Object.defineProperty(i.ready, "_Z3_solver_set_params", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_set_params on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_set_params", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_set_params on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_inc_ref") || (Object.defineProperty(i.ready, "_Z3_solver_inc_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_inc_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_dec_ref") || (Object.defineProperty(i.ready, "_Z3_solver_dec_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_dec_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_interrupt") || (Object.defineProperty(i.ready, "_Z3_solver_interrupt", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_interrupt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_interrupt", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_interrupt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_push") || (Object.defineProperty(i.ready, "_Z3_solver_push", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_push on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_push", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_push on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_pop") || (Object.defineProperty(i.ready, "_Z3_solver_pop", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_pop on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_pop", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_pop on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_reset") || (Object.defineProperty(i.ready, "_Z3_solver_reset", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_reset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_reset", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_reset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_get_num_scopes") || (Object.defineProperty(i.ready, "_Z3_solver_get_num_scopes", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_get_num_scopes on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_get_num_scopes", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_get_num_scopes on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_assert") || (Object.defineProperty(i.ready, "_Z3_solver_assert", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_assert on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_assert", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_assert on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_assert_and_track") || (Object.defineProperty(i.ready, "_Z3_solver_assert_and_track", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_assert_and_track on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_assert_and_track", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_assert_and_track on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_from_file") || (Object.defineProperty(i.ready, "_Z3_solver_from_file", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_from_file on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_from_file", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_from_file on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_from_string") || (Object.defineProperty(i.ready, "_Z3_solver_from_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_from_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_from_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_from_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_get_assertions") || (Object.defineProperty(i.ready, "_Z3_solver_get_assertions", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_get_assertions on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_get_assertions", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_get_assertions on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_get_units") || (Object.defineProperty(i.ready, "_Z3_solver_get_units", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_get_units on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_get_units", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_get_units on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_get_trail") || (Object.defineProperty(i.ready, "_Z3_solver_get_trail", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_get_trail on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_get_trail", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_get_trail on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_get_non_units") || (Object.defineProperty(i.ready, "_Z3_solver_get_non_units", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_get_non_units on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_get_non_units", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_get_non_units on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_get_levels") || (Object.defineProperty(i.ready, "_Z3_solver_get_levels", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_get_levels on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_get_levels", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_get_levels on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_congruence_root") || (Object.defineProperty(i.ready, "_Z3_solver_congruence_root", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_congruence_root on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_congruence_root", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_congruence_root on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_congruence_next") || (Object.defineProperty(i.ready, "_Z3_solver_congruence_next", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_congruence_next on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_congruence_next", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_congruence_next on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_register_on_clause") || (Object.defineProperty(i.ready, "_Z3_solver_register_on_clause", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_register_on_clause on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_register_on_clause", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_register_on_clause on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_propagate_init") || (Object.defineProperty(i.ready, "_Z3_solver_propagate_init", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_propagate_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_propagate_init", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_propagate_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_propagate_fixed") || (Object.defineProperty(i.ready, "_Z3_solver_propagate_fixed", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_propagate_fixed on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_propagate_fixed", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_propagate_fixed on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_propagate_final") || (Object.defineProperty(i.ready, "_Z3_solver_propagate_final", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_propagate_final on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_propagate_final", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_propagate_final on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_propagate_eq") || (Object.defineProperty(i.ready, "_Z3_solver_propagate_eq", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_propagate_eq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_propagate_eq", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_propagate_eq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_propagate_diseq") || (Object.defineProperty(i.ready, "_Z3_solver_propagate_diseq", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_propagate_diseq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_propagate_diseq", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_propagate_diseq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_propagate_created") || (Object.defineProperty(i.ready, "_Z3_solver_propagate_created", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_propagate_created on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_propagate_created", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_propagate_created on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_propagate_decide") || (Object.defineProperty(i.ready, "_Z3_solver_propagate_decide", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_propagate_decide on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_propagate_decide", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_propagate_decide on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_next_split") || (Object.defineProperty(i.ready, "_Z3_solver_next_split", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_next_split on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_next_split", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_next_split on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_propagate_declare") || (Object.defineProperty(i.ready, "_Z3_solver_propagate_declare", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_propagate_declare on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_propagate_declare", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_propagate_declare on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_propagate_register") || (Object.defineProperty(i.ready, "_Z3_solver_propagate_register", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_propagate_register on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_propagate_register", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_propagate_register on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_propagate_register_cb") || (Object.defineProperty(i.ready, "_Z3_solver_propagate_register_cb", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_propagate_register_cb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_propagate_register_cb", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_propagate_register_cb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_propagate_consequence") || (Object.defineProperty(i.ready, "_Z3_solver_propagate_consequence", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_propagate_consequence on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_propagate_consequence", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_propagate_consequence on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_check") || (Object.defineProperty(i.ready, "_Z3_solver_check", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_check on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_check", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_check on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_check_assumptions") || (Object.defineProperty(i.ready, "_Z3_solver_check_assumptions", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_check_assumptions on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_check_assumptions", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_check_assumptions on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_implied_equalities") || (Object.defineProperty(i.ready, "_Z3_get_implied_equalities", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_implied_equalities on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_implied_equalities", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_implied_equalities on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_get_consequences") || (Object.defineProperty(i.ready, "_Z3_solver_get_consequences", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_get_consequences on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_get_consequences", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_get_consequences on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_cube") || (Object.defineProperty(i.ready, "_Z3_solver_cube", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_cube on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_cube", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_cube on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_get_model") || (Object.defineProperty(i.ready, "_Z3_solver_get_model", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_get_model on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_get_model", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_get_model on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_get_proof") || (Object.defineProperty(i.ready, "_Z3_solver_get_proof", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_get_proof on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_get_proof", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_get_proof on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_get_unsat_core") || (Object.defineProperty(i.ready, "_Z3_solver_get_unsat_core", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_get_unsat_core on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_get_unsat_core", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_get_unsat_core on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_get_reason_unknown") || (Object.defineProperty(i.ready, "_Z3_solver_get_reason_unknown", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_get_reason_unknown on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_get_reason_unknown", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_get_reason_unknown on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_get_statistics") || (Object.defineProperty(i.ready, "_Z3_solver_get_statistics", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_get_statistics on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_get_statistics", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_get_statistics on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_to_string") || (Object.defineProperty(i.ready, "_Z3_solver_to_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_to_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_solver_to_dimacs_string") || (Object.defineProperty(i.ready, "_Z3_solver_to_dimacs_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_solver_to_dimacs_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_solver_to_dimacs_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_solver_to_dimacs_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_stats_to_string") || (Object.defineProperty(i.ready, "_Z3_stats_to_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_stats_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_stats_to_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_stats_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_stats_inc_ref") || (Object.defineProperty(i.ready, "_Z3_stats_inc_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_stats_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_stats_inc_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_stats_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_stats_dec_ref") || (Object.defineProperty(i.ready, "_Z3_stats_dec_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_stats_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_stats_dec_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_stats_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_stats_size") || (Object.defineProperty(i.ready, "_Z3_stats_size", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_stats_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_stats_size", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_stats_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_stats_get_key") || (Object.defineProperty(i.ready, "_Z3_stats_get_key", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_stats_get_key on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_stats_get_key", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_stats_get_key on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_stats_is_uint") || (Object.defineProperty(i.ready, "_Z3_stats_is_uint", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_stats_is_uint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_stats_is_uint", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_stats_is_uint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_stats_is_double") || (Object.defineProperty(i.ready, "_Z3_stats_is_double", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_stats_is_double on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_stats_is_double", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_stats_is_double on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_stats_get_uint_value") || (Object.defineProperty(i.ready, "_Z3_stats_get_uint_value", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_stats_get_uint_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_stats_get_uint_value", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_stats_get_uint_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_stats_get_double_value") || (Object.defineProperty(i.ready, "_Z3_stats_get_double_value", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_stats_get_double_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_stats_get_double_value", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_stats_get_double_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_get_estimated_alloc_size") || (Object.defineProperty(i.ready, "_Z3_get_estimated_alloc_size", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_get_estimated_alloc_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_get_estimated_alloc_size", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_get_estimated_alloc_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_is_value") || (Object.defineProperty(i.ready, "_Z3_algebraic_is_value", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_is_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_is_value", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_is_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_is_pos") || (Object.defineProperty(i.ready, "_Z3_algebraic_is_pos", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_is_pos on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_is_pos", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_is_pos on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_is_neg") || (Object.defineProperty(i.ready, "_Z3_algebraic_is_neg", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_is_neg on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_is_neg", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_is_neg on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_is_zero") || (Object.defineProperty(i.ready, "_Z3_algebraic_is_zero", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_is_zero on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_is_zero", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_is_zero on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_sign") || (Object.defineProperty(i.ready, "_Z3_algebraic_sign", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_sign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_sign", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_sign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_add") || (Object.defineProperty(i.ready, "_Z3_algebraic_add", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_add on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_add", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_add on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_sub") || (Object.defineProperty(i.ready, "_Z3_algebraic_sub", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_sub on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_sub", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_sub on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_mul") || (Object.defineProperty(i.ready, "_Z3_algebraic_mul", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_mul on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_mul", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_mul on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_div") || (Object.defineProperty(i.ready, "_Z3_algebraic_div", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_div on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_div", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_div on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_root") || (Object.defineProperty(i.ready, "_Z3_algebraic_root", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_root on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_root", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_root on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_power") || (Object.defineProperty(i.ready, "_Z3_algebraic_power", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_power on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_power", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_power on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_lt") || (Object.defineProperty(i.ready, "_Z3_algebraic_lt", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_lt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_lt", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_lt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_gt") || (Object.defineProperty(i.ready, "_Z3_algebraic_gt", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_gt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_gt", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_gt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_le") || (Object.defineProperty(i.ready, "_Z3_algebraic_le", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_le on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_le", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_le on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_ge") || (Object.defineProperty(i.ready, "_Z3_algebraic_ge", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_ge on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_ge", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_ge on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_eq") || (Object.defineProperty(i.ready, "_Z3_algebraic_eq", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_eq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_eq", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_eq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_neq") || (Object.defineProperty(i.ready, "_Z3_algebraic_neq", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_neq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_neq", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_neq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_roots") || (Object.defineProperty(i.ready, "_Z3_algebraic_roots", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_roots on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_roots", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_roots on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_eval") || (Object.defineProperty(i.ready, "_Z3_algebraic_eval", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_eval on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_eval", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_eval on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_get_poly") || (Object.defineProperty(i.ready, "_Z3_algebraic_get_poly", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_get_poly on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_get_poly", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_get_poly on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_algebraic_get_i") || (Object.defineProperty(i.ready, "_Z3_algebraic_get_i", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_algebraic_get_i on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_algebraic_get_i", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_algebraic_get_i on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_ast_vector") || (Object.defineProperty(i.ready, "_Z3_mk_ast_vector", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_ast_vector on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_ast_vector", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_ast_vector on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_vector_inc_ref") || (Object.defineProperty(i.ready, "_Z3_ast_vector_inc_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_vector_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_vector_inc_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_vector_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_vector_dec_ref") || (Object.defineProperty(i.ready, "_Z3_ast_vector_dec_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_vector_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_vector_dec_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_vector_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_vector_size") || (Object.defineProperty(i.ready, "_Z3_ast_vector_size", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_vector_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_vector_size", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_vector_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_vector_get") || (Object.defineProperty(i.ready, "_Z3_ast_vector_get", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_vector_get on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_vector_get", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_vector_get on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_vector_set") || (Object.defineProperty(i.ready, "_Z3_ast_vector_set", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_vector_set on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_vector_set", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_vector_set on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_vector_resize") || (Object.defineProperty(i.ready, "_Z3_ast_vector_resize", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_vector_resize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_vector_resize", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_vector_resize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_vector_push") || (Object.defineProperty(i.ready, "_Z3_ast_vector_push", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_vector_push on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_vector_push", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_vector_push on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_vector_translate") || (Object.defineProperty(i.ready, "_Z3_ast_vector_translate", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_vector_translate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_vector_translate", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_vector_translate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_vector_to_string") || (Object.defineProperty(i.ready, "_Z3_ast_vector_to_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_vector_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_vector_to_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_vector_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_ast_map") || (Object.defineProperty(i.ready, "_Z3_mk_ast_map", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_ast_map on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_ast_map", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_ast_map on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_map_inc_ref") || (Object.defineProperty(i.ready, "_Z3_ast_map_inc_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_map_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_map_inc_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_map_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_map_dec_ref") || (Object.defineProperty(i.ready, "_Z3_ast_map_dec_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_map_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_map_dec_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_map_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_map_contains") || (Object.defineProperty(i.ready, "_Z3_ast_map_contains", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_map_contains on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_map_contains", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_map_contains on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_map_find") || (Object.defineProperty(i.ready, "_Z3_ast_map_find", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_map_find on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_map_find", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_map_find on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_map_insert") || (Object.defineProperty(i.ready, "_Z3_ast_map_insert", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_map_insert on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_map_insert", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_map_insert on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_map_erase") || (Object.defineProperty(i.ready, "_Z3_ast_map_erase", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_map_erase on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_map_erase", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_map_erase on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_map_reset") || (Object.defineProperty(i.ready, "_Z3_ast_map_reset", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_map_reset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_map_reset", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_map_reset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_map_size") || (Object.defineProperty(i.ready, "_Z3_ast_map_size", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_map_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_map_size", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_map_size on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_map_keys") || (Object.defineProperty(i.ready, "_Z3_ast_map_keys", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_map_keys on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_map_keys", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_map_keys on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_ast_map_to_string") || (Object.defineProperty(i.ready, "_Z3_ast_map_to_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_ast_map_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_ast_map_to_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_ast_map_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fixedpoint") || (Object.defineProperty(i.ready, "_Z3_mk_fixedpoint", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fixedpoint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fixedpoint", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fixedpoint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_inc_ref") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_inc_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_inc_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_dec_ref") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_dec_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_dec_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_add_rule") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_add_rule", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_add_rule on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_add_rule", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_add_rule on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_add_fact") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_add_fact", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_add_fact on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_add_fact", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_add_fact on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_assert") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_assert", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_assert on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_assert", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_assert on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_query") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_query", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_query on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_query", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_query on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_query_relations") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_query_relations", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_query_relations on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_query_relations", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_query_relations on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_get_answer") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_get_answer", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_get_answer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_get_answer", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_get_answer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_get_reason_unknown") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_get_reason_unknown", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_get_reason_unknown on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_get_reason_unknown", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_get_reason_unknown on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_update_rule") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_update_rule", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_update_rule on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_update_rule", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_update_rule on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_get_num_levels") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_get_num_levels", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_get_num_levels on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_get_num_levels", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_get_num_levels on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_get_cover_delta") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_get_cover_delta", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_get_cover_delta on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_get_cover_delta", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_get_cover_delta on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_add_cover") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_add_cover", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_add_cover on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_add_cover", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_add_cover on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_get_statistics") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_get_statistics", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_get_statistics on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_get_statistics", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_get_statistics on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_register_relation") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_register_relation", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_register_relation on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_register_relation", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_register_relation on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_set_predicate_representation") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_set_predicate_representation", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_set_predicate_representation on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_set_predicate_representation", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_set_predicate_representation on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_get_rules") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_get_rules", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_get_rules on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_get_rules", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_get_rules on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_get_assertions") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_get_assertions", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_get_assertions on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_get_assertions", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_get_assertions on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_set_params") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_set_params", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_set_params on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_set_params", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_set_params on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_get_help") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_get_help", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_get_help on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_get_help", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_get_help on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_get_param_descrs") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_get_param_descrs", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_get_param_descrs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_get_param_descrs", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_get_param_descrs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_to_string") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_to_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_to_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_from_string") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_from_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_from_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_from_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_from_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_from_file") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_from_file", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_from_file on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_from_file", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_from_file on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_rounding_mode_sort") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_rounding_mode_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_rounding_mode_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_rounding_mode_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_rounding_mode_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_round_nearest_ties_to_even") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_round_nearest_ties_to_even", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_round_nearest_ties_to_even on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_round_nearest_ties_to_even", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_round_nearest_ties_to_even on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_rne") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_rne", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_rne on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_rne", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_rne on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_round_nearest_ties_to_away") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_round_nearest_ties_to_away", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_round_nearest_ties_to_away on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_round_nearest_ties_to_away", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_round_nearest_ties_to_away on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_rna") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_rna", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_rna on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_rna", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_rna on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_round_toward_positive") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_round_toward_positive", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_round_toward_positive on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_round_toward_positive", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_round_toward_positive on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_rtp") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_rtp", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_rtp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_rtp", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_rtp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_round_toward_negative") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_round_toward_negative", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_round_toward_negative on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_round_toward_negative", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_round_toward_negative on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_rtn") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_rtn", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_rtn on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_rtn", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_rtn on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_round_toward_zero") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_round_toward_zero", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_round_toward_zero on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_round_toward_zero", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_round_toward_zero on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_rtz") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_rtz", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_rtz on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_rtz", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_rtz on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_sort") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_sort", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_sort", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_sort on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_sort_half") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_sort_half", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_sort_half on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_sort_half", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_sort_half on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_sort_16") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_sort_16", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_sort_16 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_sort_16", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_sort_16 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_sort_single") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_sort_single", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_sort_single on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_sort_single", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_sort_single on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_sort_32") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_sort_32", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_sort_32 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_sort_32", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_sort_32 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_sort_double") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_sort_double", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_sort_double on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_sort_double", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_sort_double on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_sort_64") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_sort_64", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_sort_64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_sort_64", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_sort_64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_sort_quadruple") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_sort_quadruple", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_sort_quadruple on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_sort_quadruple", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_sort_quadruple on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_sort_128") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_sort_128", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_sort_128 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_sort_128", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_sort_128 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_nan") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_nan", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_nan on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_nan", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_nan on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_inf") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_inf", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_inf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_inf", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_inf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_zero") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_zero", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_zero on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_zero", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_zero on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_fp") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_fp", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_fp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_fp", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_fp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_numeral_float") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_numeral_float", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_numeral_float on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_numeral_float", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_numeral_float on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_numeral_double") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_numeral_double", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_numeral_double on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_numeral_double", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_numeral_double on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_numeral_int") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_numeral_int", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_numeral_int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_numeral_int", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_numeral_int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_numeral_int_uint") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_numeral_int_uint", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_numeral_int_uint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_numeral_int_uint", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_numeral_int_uint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_numeral_int64_uint64") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_numeral_int64_uint64", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_numeral_int64_uint64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_numeral_int64_uint64", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_numeral_int64_uint64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_abs") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_abs", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_abs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_abs", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_abs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_neg") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_neg", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_neg on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_neg", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_neg on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_add") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_add", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_add on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_add", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_add on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_sub") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_sub", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_sub on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_sub", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_sub on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_mul") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_mul", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_mul on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_mul", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_mul on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_div") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_div", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_div on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_div", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_div on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_fma") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_fma", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_fma on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_fma", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_fma on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_sqrt") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_sqrt", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_sqrt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_sqrt", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_sqrt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_rem") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_rem", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_rem on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_rem", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_rem on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_round_to_integral") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_round_to_integral", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_round_to_integral on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_round_to_integral", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_round_to_integral on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_min") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_min", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_min on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_min", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_min on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_max") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_max", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_max on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_max", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_max on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_leq") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_leq", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_leq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_leq", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_leq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_lt") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_lt", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_lt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_lt", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_lt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_geq") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_geq", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_geq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_geq", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_geq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_gt") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_gt", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_gt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_gt", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_gt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_eq") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_eq", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_eq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_eq", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_eq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_is_normal") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_is_normal", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_is_normal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_is_normal", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_is_normal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_is_subnormal") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_is_subnormal", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_is_subnormal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_is_subnormal", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_is_subnormal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_is_zero") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_is_zero", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_is_zero on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_is_zero", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_is_zero on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_is_infinite") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_is_infinite", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_is_infinite on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_is_infinite", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_is_infinite on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_is_nan") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_is_nan", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_is_nan on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_is_nan", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_is_nan on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_is_negative") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_is_negative", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_is_negative on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_is_negative", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_is_negative on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_is_positive") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_is_positive", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_is_positive on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_is_positive", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_is_positive on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_to_fp_bv") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_to_fp_bv", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_to_fp_bv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_to_fp_bv", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_to_fp_bv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_to_fp_float") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_to_fp_float", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_to_fp_float on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_to_fp_float", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_to_fp_float on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_to_fp_real") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_to_fp_real", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_to_fp_real on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_to_fp_real", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_to_fp_real on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_to_fp_signed") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_to_fp_signed", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_to_fp_signed on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_to_fp_signed", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_to_fp_signed on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_to_fp_unsigned") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_to_fp_unsigned", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_to_fp_unsigned on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_to_fp_unsigned", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_to_fp_unsigned on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_to_ubv") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_to_ubv", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_to_ubv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_to_ubv", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_to_ubv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_to_sbv") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_to_sbv", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_to_sbv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_to_sbv", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_to_sbv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_to_real") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_to_real", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_to_real on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_to_real", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_to_real on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fpa_get_ebits") || (Object.defineProperty(i.ready, "_Z3_fpa_get_ebits", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fpa_get_ebits on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fpa_get_ebits", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fpa_get_ebits on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fpa_get_sbits") || (Object.defineProperty(i.ready, "_Z3_fpa_get_sbits", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fpa_get_sbits on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fpa_get_sbits", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fpa_get_sbits on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fpa_is_numeral_nan") || (Object.defineProperty(i.ready, "_Z3_fpa_is_numeral_nan", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fpa_is_numeral_nan on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fpa_is_numeral_nan", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fpa_is_numeral_nan on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fpa_is_numeral_inf") || (Object.defineProperty(i.ready, "_Z3_fpa_is_numeral_inf", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fpa_is_numeral_inf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fpa_is_numeral_inf", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fpa_is_numeral_inf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fpa_is_numeral_zero") || (Object.defineProperty(i.ready, "_Z3_fpa_is_numeral_zero", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fpa_is_numeral_zero on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fpa_is_numeral_zero", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fpa_is_numeral_zero on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fpa_is_numeral_normal") || (Object.defineProperty(i.ready, "_Z3_fpa_is_numeral_normal", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fpa_is_numeral_normal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fpa_is_numeral_normal", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fpa_is_numeral_normal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fpa_is_numeral_subnormal") || (Object.defineProperty(i.ready, "_Z3_fpa_is_numeral_subnormal", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fpa_is_numeral_subnormal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fpa_is_numeral_subnormal", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fpa_is_numeral_subnormal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fpa_is_numeral_positive") || (Object.defineProperty(i.ready, "_Z3_fpa_is_numeral_positive", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fpa_is_numeral_positive on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fpa_is_numeral_positive", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fpa_is_numeral_positive on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fpa_is_numeral_negative") || (Object.defineProperty(i.ready, "_Z3_fpa_is_numeral_negative", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fpa_is_numeral_negative on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fpa_is_numeral_negative", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fpa_is_numeral_negative on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fpa_get_numeral_sign_bv") || (Object.defineProperty(i.ready, "_Z3_fpa_get_numeral_sign_bv", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fpa_get_numeral_sign_bv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fpa_get_numeral_sign_bv", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fpa_get_numeral_sign_bv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fpa_get_numeral_significand_bv") || (Object.defineProperty(i.ready, "_Z3_fpa_get_numeral_significand_bv", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fpa_get_numeral_significand_bv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fpa_get_numeral_significand_bv", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fpa_get_numeral_significand_bv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fpa_get_numeral_sign") || (Object.defineProperty(i.ready, "_Z3_fpa_get_numeral_sign", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fpa_get_numeral_sign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fpa_get_numeral_sign", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fpa_get_numeral_sign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fpa_get_numeral_significand_string") || (Object.defineProperty(i.ready, "_Z3_fpa_get_numeral_significand_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fpa_get_numeral_significand_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fpa_get_numeral_significand_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fpa_get_numeral_significand_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fpa_get_numeral_significand_uint64") || (Object.defineProperty(i.ready, "_Z3_fpa_get_numeral_significand_uint64", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fpa_get_numeral_significand_uint64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fpa_get_numeral_significand_uint64", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fpa_get_numeral_significand_uint64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fpa_get_numeral_exponent_string") || (Object.defineProperty(i.ready, "_Z3_fpa_get_numeral_exponent_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fpa_get_numeral_exponent_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fpa_get_numeral_exponent_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fpa_get_numeral_exponent_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fpa_get_numeral_exponent_int64") || (Object.defineProperty(i.ready, "_Z3_fpa_get_numeral_exponent_int64", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fpa_get_numeral_exponent_int64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fpa_get_numeral_exponent_int64", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fpa_get_numeral_exponent_int64 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fpa_get_numeral_exponent_bv") || (Object.defineProperty(i.ready, "_Z3_fpa_get_numeral_exponent_bv", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fpa_get_numeral_exponent_bv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fpa_get_numeral_exponent_bv", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fpa_get_numeral_exponent_bv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_to_ieee_bv") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_to_ieee_bv", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_to_ieee_bv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_to_ieee_bv", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_to_ieee_bv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_fpa_to_fp_int_real") || (Object.defineProperty(i.ready, "_Z3_mk_fpa_to_fp_int_real", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_fpa_to_fp_int_real on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_fpa_to_fp_int_real", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_fpa_to_fp_int_real on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_mk_optimize") || (Object.defineProperty(i.ready, "_Z3_mk_optimize", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_mk_optimize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_mk_optimize", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_mk_optimize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_inc_ref") || (Object.defineProperty(i.ready, "_Z3_optimize_inc_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_inc_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_inc_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_dec_ref") || (Object.defineProperty(i.ready, "_Z3_optimize_dec_ref", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_dec_ref", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_dec_ref on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_assert") || (Object.defineProperty(i.ready, "_Z3_optimize_assert", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_assert on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_assert", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_assert on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_assert_and_track") || (Object.defineProperty(i.ready, "_Z3_optimize_assert_and_track", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_assert_and_track on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_assert_and_track", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_assert_and_track on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_assert_soft") || (Object.defineProperty(i.ready, "_Z3_optimize_assert_soft", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_assert_soft on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_assert_soft", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_assert_soft on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_maximize") || (Object.defineProperty(i.ready, "_Z3_optimize_maximize", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_maximize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_maximize", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_maximize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_minimize") || (Object.defineProperty(i.ready, "_Z3_optimize_minimize", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_minimize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_minimize", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_minimize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_push") || (Object.defineProperty(i.ready, "_Z3_optimize_push", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_push on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_push", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_push on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_pop") || (Object.defineProperty(i.ready, "_Z3_optimize_pop", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_pop on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_pop", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_pop on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_check") || (Object.defineProperty(i.ready, "_Z3_optimize_check", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_check on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_check", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_check on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_get_reason_unknown") || (Object.defineProperty(i.ready, "_Z3_optimize_get_reason_unknown", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_get_reason_unknown on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_get_reason_unknown", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_get_reason_unknown on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_get_model") || (Object.defineProperty(i.ready, "_Z3_optimize_get_model", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_get_model on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_get_model", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_get_model on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_get_unsat_core") || (Object.defineProperty(i.ready, "_Z3_optimize_get_unsat_core", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_get_unsat_core on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_get_unsat_core", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_get_unsat_core on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_set_params") || (Object.defineProperty(i.ready, "_Z3_optimize_set_params", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_set_params on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_set_params", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_set_params on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_get_param_descrs") || (Object.defineProperty(i.ready, "_Z3_optimize_get_param_descrs", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_get_param_descrs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_get_param_descrs", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_get_param_descrs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_get_lower") || (Object.defineProperty(i.ready, "_Z3_optimize_get_lower", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_get_lower on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_get_lower", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_get_lower on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_get_upper") || (Object.defineProperty(i.ready, "_Z3_optimize_get_upper", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_get_upper on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_get_upper", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_get_upper on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_get_lower_as_vector") || (Object.defineProperty(i.ready, "_Z3_optimize_get_lower_as_vector", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_get_lower_as_vector on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_get_lower_as_vector", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_get_lower_as_vector on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_get_upper_as_vector") || (Object.defineProperty(i.ready, "_Z3_optimize_get_upper_as_vector", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_get_upper_as_vector on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_get_upper_as_vector", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_get_upper_as_vector on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_to_string") || (Object.defineProperty(i.ready, "_Z3_optimize_to_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_to_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_from_string") || (Object.defineProperty(i.ready, "_Z3_optimize_from_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_from_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_from_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_from_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_from_file") || (Object.defineProperty(i.ready, "_Z3_optimize_from_file", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_from_file on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_from_file", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_from_file on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_get_help") || (Object.defineProperty(i.ready, "_Z3_optimize_get_help", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_get_help on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_get_help", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_get_help on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_get_statistics") || (Object.defineProperty(i.ready, "_Z3_optimize_get_statistics", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_get_statistics on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_get_statistics", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_get_statistics on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_get_assertions") || (Object.defineProperty(i.ready, "_Z3_optimize_get_assertions", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_get_assertions on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_get_assertions", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_get_assertions on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_optimize_get_objectives") || (Object.defineProperty(i.ready, "_Z3_optimize_get_objectives", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_optimize_get_objectives on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_optimize_get_objectives", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_optimize_get_objectives on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_polynomial_subresultants") || (Object.defineProperty(i.ready, "_Z3_polynomial_subresultants", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_polynomial_subresultants on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_polynomial_subresultants", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_polynomial_subresultants on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_del") || (Object.defineProperty(i.ready, "_Z3_rcf_del", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_del on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_del", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_del on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_mk_rational") || (Object.defineProperty(i.ready, "_Z3_rcf_mk_rational", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_mk_rational on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_mk_rational", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_mk_rational on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_mk_small_int") || (Object.defineProperty(i.ready, "_Z3_rcf_mk_small_int", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_mk_small_int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_mk_small_int", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_mk_small_int on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_mk_pi") || (Object.defineProperty(i.ready, "_Z3_rcf_mk_pi", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_mk_pi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_mk_pi", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_mk_pi on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_mk_e") || (Object.defineProperty(i.ready, "_Z3_rcf_mk_e", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_mk_e on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_mk_e", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_mk_e on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_mk_infinitesimal") || (Object.defineProperty(i.ready, "_Z3_rcf_mk_infinitesimal", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_mk_infinitesimal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_mk_infinitesimal", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_mk_infinitesimal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_mk_roots") || (Object.defineProperty(i.ready, "_Z3_rcf_mk_roots", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_mk_roots on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_mk_roots", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_mk_roots on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_add") || (Object.defineProperty(i.ready, "_Z3_rcf_add", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_add on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_add", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_add on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_sub") || (Object.defineProperty(i.ready, "_Z3_rcf_sub", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_sub on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_sub", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_sub on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_mul") || (Object.defineProperty(i.ready, "_Z3_rcf_mul", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_mul on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_mul", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_mul on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_div") || (Object.defineProperty(i.ready, "_Z3_rcf_div", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_div on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_div", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_div on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_neg") || (Object.defineProperty(i.ready, "_Z3_rcf_neg", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_neg on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_neg", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_neg on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_inv") || (Object.defineProperty(i.ready, "_Z3_rcf_inv", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_inv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_inv", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_inv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_power") || (Object.defineProperty(i.ready, "_Z3_rcf_power", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_power on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_power", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_power on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_lt") || (Object.defineProperty(i.ready, "_Z3_rcf_lt", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_lt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_lt", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_lt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_gt") || (Object.defineProperty(i.ready, "_Z3_rcf_gt", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_gt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_gt", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_gt on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_le") || (Object.defineProperty(i.ready, "_Z3_rcf_le", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_le on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_le", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_le on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_ge") || (Object.defineProperty(i.ready, "_Z3_rcf_ge", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_ge on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_ge", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_ge on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_eq") || (Object.defineProperty(i.ready, "_Z3_rcf_eq", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_eq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_eq", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_eq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_neq") || (Object.defineProperty(i.ready, "_Z3_rcf_neq", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_neq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_neq", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_neq on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_num_to_string") || (Object.defineProperty(i.ready, "_Z3_rcf_num_to_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_num_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_num_to_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_num_to_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_num_to_decimal_string") || (Object.defineProperty(i.ready, "_Z3_rcf_num_to_decimal_string", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_num_to_decimal_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_num_to_decimal_string", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_num_to_decimal_string on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_rcf_get_numerator_denominator") || (Object.defineProperty(i.ready, "_Z3_rcf_get_numerator_denominator", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_rcf_get_numerator_denominator on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_rcf_get_numerator_denominator", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_rcf_get_numerator_denominator on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_query_from_lvl") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_query_from_lvl", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_query_from_lvl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_query_from_lvl", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_query_from_lvl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_get_ground_sat_answer") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_get_ground_sat_answer", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_get_ground_sat_answer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_get_ground_sat_answer", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_get_ground_sat_answer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_get_rules_along_trace") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_get_rules_along_trace", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_get_rules_along_trace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_get_rules_along_trace", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_get_rules_along_trace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_get_rule_names_along_trace") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_get_rule_names_along_trace", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_get_rule_names_along_trace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_get_rule_names_along_trace", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_get_rule_names_along_trace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_add_invariant") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_add_invariant", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_add_invariant on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_add_invariant", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_add_invariant on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_fixedpoint_get_reachable") || (Object.defineProperty(i.ready, "_Z3_fixedpoint_get_reachable", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_fixedpoint_get_reachable on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_fixedpoint_get_reachable", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_fixedpoint_get_reachable on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_qe_model_project") || (Object.defineProperty(i.ready, "_Z3_qe_model_project", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_qe_model_project on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_qe_model_project", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_qe_model_project on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_qe_model_project_skolem") || (Object.defineProperty(i.ready, "_Z3_qe_model_project_skolem", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_qe_model_project_skolem on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_qe_model_project_skolem", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_qe_model_project_skolem on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_model_extrapolate") || (Object.defineProperty(i.ready, "_Z3_model_extrapolate", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_model_extrapolate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_model_extrapolate", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_model_extrapolate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_Z3_qe_lite") || (Object.defineProperty(i.ready, "_Z3_qe_lite", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _Z3_qe_lite on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_Z3_qe_lite", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _Z3_qe_lite on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "__emscripten_thread_init") || (Object.defineProperty(i.ready, "__emscripten_thread_init", {
                configurable: !0,
                get: function() {
                    Pe("You are getting __emscripten_thread_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "__emscripten_thread_init", {
                configurable: !0,
                set: function() {
                    Pe("You are setting __emscripten_thread_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "__emscripten_thread_exit") || (Object.defineProperty(i.ready, "__emscripten_thread_exit", {
                configurable: !0,
                get: function() {
                    Pe("You are getting __emscripten_thread_exit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "__emscripten_thread_exit", {
                configurable: !0,
                set: function() {
                    Pe("You are setting __emscripten_thread_exit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "__emscripten_thread_crashed") || (Object.defineProperty(i.ready, "__emscripten_thread_crashed", {
                configurable: !0,
                get: function() {
                    Pe("You are getting __emscripten_thread_crashed on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "__emscripten_thread_crashed", {
                configurable: !0,
                set: function() {
                    Pe("You are setting __emscripten_thread_crashed on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "__emscripten_tls_init") || (Object.defineProperty(i.ready, "__emscripten_tls_init", {
                configurable: !0,
                get: function() {
                    Pe("You are getting __emscripten_tls_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "__emscripten_tls_init", {
                configurable: !0,
                set: function() {
                    Pe("You are setting __emscripten_tls_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_pthread_self") || (Object.defineProperty(i.ready, "_pthread_self", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _pthread_self on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_pthread_self", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _pthread_self on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "executeNotifiedProxyingQueue") || (Object.defineProperty(i.ready, "executeNotifiedProxyingQueue", {
                configurable: !0,
                get: function() {
                    Pe("You are getting executeNotifiedProxyingQueue on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "executeNotifiedProxyingQueue", {
                configurable: !0,
                set: function() {
                    Pe("You are setting executeNotifiedProxyingQueue on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "establishStackSpace") || (Object.defineProperty(i.ready, "establishStackSpace", {
                configurable: !0,
                get: function() {
                    Pe("You are getting establishStackSpace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "establishStackSpace", {
                configurable: !0,
                set: function() {
                    Pe("You are setting establishStackSpace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "invokeEntryPoint") || (Object.defineProperty(i.ready, "invokeEntryPoint", {
                configurable: !0,
                get: function() {
                    Pe("You are getting invokeEntryPoint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "invokeEntryPoint", {
                configurable: !0,
                set: function() {
                    Pe("You are setting invokeEntryPoint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "PThread") || (Object.defineProperty(i.ready, "PThread", {
                configurable: !0,
                get: function() {
                    Pe("You are getting PThread on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "PThread", {
                configurable: !0,
                set: function() {
                    Pe("You are setting PThread on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "_fflush") || (Object.defineProperty(i.ready, "_fflush", {
                configurable: !0,
                get: function() {
                    Pe("You are getting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "_fflush", {
                configurable: !0,
                set: function() {
                    Pe("You are setting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "__emscripten_proxy_execute_task_queue") || (Object.defineProperty(i.ready, "__emscripten_proxy_execute_task_queue", {
                configurable: !0,
                get: function() {
                    Pe("You are getting __emscripten_proxy_execute_task_queue on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "__emscripten_proxy_execute_task_queue", {
                configurable: !0,
                set: function() {
                    Pe("You are setting __emscripten_proxy_execute_task_queue on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            })), Object.getOwnPropertyDescriptor(i.ready, "onRuntimeInitialized") || (Object.defineProperty(i.ready, "onRuntimeInitialized", {
                configurable: !0,
                get: function() {
                    Pe("You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }), Object.defineProperty(i.ready, "onRuntimeInitialized", {
                configurable: !0,
                set: function() {
                    Pe("You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
                }
            }));
            let r = null;

            function o(e) {
                if (null == r) return;
                let t = r;
                r = null, setTimeout((() => {
                    t.resolve(e)
                }), 0)
            }

            function _(e) {
                if (null == r) return;
                let t = r;
                r = null, setTimeout((() => {
                    t.reject(e)
                }), 0)
            }
            i.async_call = function(e, ...t) {
                if (null !== r) throw new Error("you can't execute multiple async functions at the same time; let the previous one finish first");
                let n = new Promise(((e, t) => {
                    r = {
                        resolve: e,
                        reject: t
                    }
                }));
                return e(...t), n
            };
            var c = Object.assign({}, i),
                a = [],
                d = "./this.program",
                g = (e, t) => {
                    throw t
                },
                h = "object" == typeof window,
                f = "function" == typeof importScripts,
                l = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node,
                b = !h && !l && !f;
            if (i.ENVIRONMENT) throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
            var u, p, Z, m, y, j, O = i.ENVIRONMENT_IS_PTHREAD || !1,
                k = "";

            function P(e) {
                return i.locateFile ? i.locateFile(e, k) : k + e
            }

            function w(e) {
                if (e instanceof Xt) return;
                let t = e;
                e && "object" == typeof e && e.stack && (t = [e, e.stack]), A("exiting due to exception: " + t)
            }
            if (l) {
                if ("object" != typeof process || "function" != typeof require) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
                let e;
                k = f ? require("path").dirname(k) + "/" : __dirname + "/", j = () => {
                    y || (m = require("fs"), y = require("path"))
                }, u = function(e, t) {
                    return j(), e = y.normalize(e), m.readFileSync(e, t ? void 0 : "utf8")
                }, Z = e => {
                    var t = u(e, !0);
                    return t.buffer || (t = new Uint8Array(t)), C(t.buffer), t
                }, p = (e, t, n) => {
                    j(), e = y.normalize(e), m.readFile(e, (function(e, s) {
                        e ? n(e) : t(s.buffer)
                    }))
                }, process.argv.length > 1 && (d = process.argv[1].replace(/\\/g, "/")), a = process.argv.slice(2), process.on("uncaughtException", (function(e) {
                    if (!(e instanceof Xt)) throw e
                })), process.on("unhandledRejection", (function(e) {
                    throw e
                })), g = (e, t) => {
                    if (be()) throw process.exitCode = e, t;
                    w(t), process.exit(e)
                }, i.inspect = function() {
                    return "[Emscripten Module object]"
                };
                try {
                    e = require("worker_threads")
                } catch (e) {
                    throw console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'), e
                }
                global.Worker = e.Worker
            } else if (b) {
                if ("object" == typeof process && "function" == typeof require || "object" == typeof window || "function" == typeof importScripts) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
                "undefined" != typeof read && (u = function(e) {
                    return read(e)
                }), Z = function(e) {
                    let t;
                    return "function" == typeof readbuffer ? new Uint8Array(readbuffer(e)) : (t = read(e, "binary"), C("object" == typeof t), t)
                }, p = function(e, t, n) {
                    setTimeout((() => t(Z(e))), 0)
                }, "undefined" != typeof scriptArgs ? a = scriptArgs : void 0 !== arguments && (a = arguments), "function" == typeof quit && (g = (e, t) => {
                    w(t), quit(e)
                }), "undefined" != typeof print && ("undefined" == typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" != typeof printErr ? printErr : print)
            } else {
                if (!h && !f) throw new Error("environment detection error");
                if (f ? k = self.location.href : "undefined" != typeof document && document.currentScript && (k = document.currentScript.src), e && (k = e), k = 0 !== k.indexOf("blob:") ? k.substr(0, k.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", "object" != typeof window && "function" != typeof importScripts) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
                l || (u = e => {
                    var t = new XMLHttpRequest;
                    return t.open("GET", e, !1), t.send(null), t.responseText
                }, f && (Z = e => {
                    var t = new XMLHttpRequest;
                    return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response)
                }), p = (e, t, n) => {
                    var s = new XMLHttpRequest;
                    s.open("GET", e, !0), s.responseType = "arraybuffer", s.onload = () => {
                        200 == s.status || 0 == s.status && s.response ? t(s.response) : n()
                    }, s.onerror = n, s.send(null)
                })
            }
            l && "undefined" == typeof performance && (global.performance = require("perf_hooks").performance);
            var U = console.log.bind(console),
                D = console.warn.bind(console);
            l && (j(), U = e => m.writeSync(1, e + "\n"), D = e => m.writeSync(2, e + "\n"));
            var E, v = i.print || U,
                A = i.printErr || D;

            function M(e) {
                M.shown || (M.shown = {}), M.shown[e] || (M.shown[e] = 1, A(e))
            }

            function I(e, t) {
                Object.getOwnPropertyDescriptor(i, e) || Object.defineProperty(i, e, {
                    configurable: !0,
                    get: function() {
                        Pe("Module." + e + " has been replaced with plain " + t + " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
                    }
                })
            }

            function R(e, t) {
                var n = "'" + e + "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";
                return t && (n += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"), n
            }

            function L(e, t) {
                Object.getOwnPropertyDescriptor(i, e) || (i[e] = () => Pe(R(e, t)))
            }
            Object.assign(i, c), c = null, E = "fetchSettings", Object.getOwnPropertyDescriptor(i, E) && Pe("`Module." + E + "` was supplied but `" + E + "` not included in INCOMING_MODULE_JS_API"), i.arguments && (a = i.arguments), I("arguments", "arguments_"), i.thisProgram && (d = i.thisProgram), I("thisProgram", "thisProgram"), i.quit && (g = i.quit), I("quit", "quit_"), C(void 0 === i.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"), C(void 0 === i.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"), C(void 0 === i.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"), C(void 0 === i.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead"), C(void 0 === i.read, "Module.read option was removed (modify read_ in JS)"), C(void 0 === i.readAsync, "Module.readAsync option was removed (modify readAsync in JS)"), C(void 0 === i.readBinary, "Module.readBinary option was removed (modify readBinary in JS)"), C(void 0 === i.setWindowTitle, "Module.setWindowTitle option was removed (modify setWindowTitle in JS)"), C(void 0 === i.TOTAL_MEMORY, "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"), I("read", "read_"), I("readAsync", "readAsync"), I("readBinary", "readBinary"), I("setWindowTitle", "setWindowTitle"), C(h || f || l, "Pthreads do not work in this environment yet (need Web Workers, or an alternative to them)"), C(!b, "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");
            var Y, x = 0,
                q = e => {
                    x = e
                };
            Atomics.load, Atomics.store, Atomics.compareExchange, i.wasmBinary && (Y = i.wasmBinary), I("wasmBinary", "wasmBinary");
            var z, S, T = i.noExitRuntime || !0;
            I("noExitRuntime", "noExitRuntime"), "object" != typeof WebAssembly && Pe("no native wasm support detected");
            var N, F = !1;

            function C(e, t) {
                e || Pe("Assertion failed" + (t ? ": " + t : ""))
            }
            var B, W, H, G, V, X, K, Q, J = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

            function $(e, t, n) {
                for (var s = t + n, i = t; e[i] && !(i >= s);) ++i;
                if (i - t > 16 && e.buffer && J) return J.decode(e.buffer instanceof SharedArrayBuffer ? e.slice(t, i) : e.subarray(t, i));
                for (var r = ""; t < i;) {
                    var o = e[t++];
                    if (128 & o) {
                        var _ = 63 & e[t++];
                        if (192 != (224 & o)) {
                            var c = 63 & e[t++];
                            if (224 == (240 & o) ? o = (15 & o) << 12 | _ << 6 | c : (240 != (248 & o) && M("Invalid UTF-8 leading byte 0x" + o.toString(16) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), o = (7 & o) << 18 | _ << 12 | c << 6 | 63 & e[t++]), o < 65536) r += String.fromCharCode(o);
                            else {
                                var a = o - 65536;
                                r += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
                            }
                        } else r += String.fromCharCode((31 & o) << 6 | _)
                    } else r += String.fromCharCode(o)
                }
                return r
            }

            function ee(e, t) {
                return e ? $(H, e, t) : ""
            }

            function te(e, t, n, s) {
                if (!(s > 0)) return 0;
                for (var i = n, r = n + s - 1, o = 0; o < e.length; ++o) {
                    var _ = e.charCodeAt(o);
                    if (_ >= 55296 && _ <= 57343 && (_ = 65536 + ((1023 & _) << 10) | 1023 & e.charCodeAt(++o)), _ <= 127) {
                        if (n >= r) break;
                        t[n++] = _
                    } else if (_ <= 2047) {
                        if (n + 1 >= r) break;
                        t[n++] = 192 | _ >> 6, t[n++] = 128 | 63 & _
                    } else if (_ <= 65535) {
                        if (n + 2 >= r) break;
                        t[n++] = 224 | _ >> 12, t[n++] = 128 | _ >> 6 & 63, t[n++] = 128 | 63 & _
                    } else {
                        if (n + 3 >= r) break;
                        _ > 1114111 && M("Invalid Unicode code point 0x" + _.toString(16) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."), t[n++] = 240 | _ >> 18, t[n++] = 128 | _ >> 12 & 63, t[n++] = 128 | _ >> 6 & 63, t[n++] = 128 | 63 & _
                    }
                }
                return t[n] = 0, n - i
            }

            function ne(e, t, n) {
                return C("number" == typeof n, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), te(e, H, t, n)
            }

            function se(e) {
                for (var t = 0, n = 0; n < e.length; ++n) {
                    var s = e.charCodeAt(n);
                    s >= 55296 && s <= 57343 && (s = 65536 + ((1023 & s) << 10) | 1023 & e.charCodeAt(++n)), s <= 127 ? ++t : t += s <= 2047 ? 2 : s <= 65535 ? 3 : 4
                }
                return t
            }

            function ie(e, t) {
                C(e.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)"), W.set(e, t)
            }
            "undefined" != typeof TextDecoder && new TextDecoder("utf-16le"), O && (B = i.buffer);
            var re = 5242880;
            i.TOTAL_STACK && C(re === i.TOTAL_STACK, "the stack size can no longer be determined at runtime");
            var oe, _e, ce = i.INITIAL_MEMORY || 1073741824;
            if (I("INITIAL_MEMORY", "INITIAL_MEMORY"), C(ce >= re, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + ce + "! (TOTAL_STACK=" + re + ")"), C("undefined" != typeof Int32Array && "undefined" != typeof Float64Array && null != Int32Array.prototype.subarray && null != Int32Array.prototype.set, "JS engine does not provide full typed array support"), O) z = i.wasmMemory, B = i.buffer;
            else if (i.wasmMemory) z = i.wasmMemory;
            else if (!((z = new WebAssembly.Memory({
                    initial: ce / 65536,
                    maximum: ce / 65536,
                    shared: !0
                })).buffer instanceof SharedArrayBuffer)) throw A("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"), l && console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"), Error("bad memory");

            function ae() {
                var e = qt();
                C(0 == (3 & e)), V[e >> 2] = 34821223, V[e + 4 >> 2] = 2310721022, X[0] = 1668509029
            }

            function de() {
                if (!F) {
                    var e = qt(),
                        t = X[e >> 2],
                        n = X[e + 4 >> 2];
                    34821223 == t && 2310721022 == n || Pe("Stack overflow! Stack cookie has been overwritten at 0x" + e.toString(16) + ", expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + n.toString(16) + " 0x" + t.toString(16)), 1668509029 !== X[0] && Pe("Runtime error: The application has corrupted its heap memory area (address zero)!")
                }
            }
            z && (B = z.buffer), C((ce = B.byteLength) % 65536 == 0), B = oe = B, i.HEAP8 = W = new Int8Array(oe), i.HEAP16 = G = new Int16Array(oe), i.HEAP32 = V = new Int32Array(oe), i.HEAPU8 = H = new Uint8Array(oe), i.HEAPU16 = new Uint16Array(oe), i.HEAPU32 = X = new Uint32Array(oe), i.HEAPF32 = new Float32Array(oe), i.HEAPF64 = Q = new Float64Array(oe), i.HEAP64 = K = new BigInt64Array(oe), i.HEAPU64 = new BigUint64Array(oe),
                function() {
                    var e = new Int16Array(1),
                        t = new Int8Array(e.buffer);
                    if (e[0] = 25459, 115 !== t[0] || 99 !== t[1]) throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"
                }();
            var ge = [],
                he = [],
                fe = [],
                le = !1;

            function be() {
                return T
            }

            function ue() {
                C(!le), le = !0, O || (de(), i.noFSInit || nt.init.initialized || nt.init(), nt.ignorePermissions = !1, Qe.init(), Ye(he))
            }
            C(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), C(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), C(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), C(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
            var pe = 0,
                Ze = null,
                me = null,
                ye = {};

            function je(e) {
                for (var t = e;;) {
                    if (!ye[e]) return e;
                    e = t + Math.random()
                }
            }

            function Oe(e) {
                pe++, i.monitorRunDependencies && i.monitorRunDependencies(pe), e ? (C(!ye[e]), ye[e] = 1, null === Ze && "undefined" != typeof setInterval && (Ze = setInterval((function() {
                    if (F) return clearInterval(Ze), void(Ze = null);
                    var e = !1;
                    for (var t in ye) e || (e = !0, A("still waiting on run dependencies:")), A("dependency: " + t);
                    e && A("(end of list)")
                }), 1e4))) : A("warning: run dependency added without ID")
            }

            function ke(e) {
                if (pe--, i.monitorRunDependencies && i.monitorRunDependencies(pe), e ? (C(ye[e]), delete ye[e]) : A("warning: run dependency removed without ID"), 0 == pe && (null !== Ze && (clearInterval(Ze), Ze = null), me)) {
                    var t = me;
                    me = null, t()
                }
            }

            function Pe(e) {
                O ? postMessage({
                    cmd: "onAbort",
                    arg: e
                }) : i.onAbort && i.onAbort(e), A(e = "Aborted(" + e + ")"), F = !0, N = 1;
                var t = new WebAssembly.RuntimeError(e);
                throw s(t), t
            }
            var we;

            function Ue(e) {
                return e.startsWith("data:application/octet-stream;base64,")
            }

            function De(e) {
                return e.startsWith("file://")
            }

            function Ee(e, t) {
                return function() {
                    var n = e,
                        s = t;
                    return t || (s = i.asm), C(le, "native function `" + n + "` called before runtime initialization"), s[e] || C(s[e], "exported native function `" + n + "` not found"), s[e].apply(null, arguments)
                }
            }

            function ve(e) {
                try {
                    if (e == we && Y) return new Uint8Array(Y);
                    if (Z) return Z(e);
                    throw "both async and sync fetching of the wasm failed"
                } catch (e) {
                    Pe(e)
                }
            }
            Ue(we = "z3-built.wasm") || (we = P(we));
            var Ae = {
                432732: e => {
                    o(ee(e))
                },
                432769: () => {
                    _(new Error("failed with unknown exception"))
                },
                432831: e => {
                    _(new Error(ee(e)))
                },
                432878: e => {
                    o(e)
                },
                432901: () => {
                    _("failed with unknown exception")
                },
                432952: e => {
                    _(new Error(ee(e)))
                },
                432999: e => {
                    o(e)
                },
                433022: () => {
                    _("failed with unknown exception")
                },
                433073: e => {
                    _(new Error(ee(e)))
                },
                433120: e => {
                    o(e)
                },
                433143: () => {
                    _("failed with unknown exception")
                },
                433194: e => {
                    _(new Error(ee(e)))
                },
                433241: e => {
                    o(e)
                },
                433264: () => {
                    _("failed with unknown exception")
                },
                433315: e => {
                    _(new Error(ee(e)))
                },
                433362: e => {
                    o(e)
                },
                433385: () => {
                    _("failed with unknown exception")
                },
                433436: e => {
                    _(new Error(ee(e)))
                },
                433483: e => {
                    o(e)
                },
                433506: () => {
                    _("failed with unknown exception")
                },
                433557: e => {
                    _(new Error(ee(e)))
                },
                433604: e => {
                    o(e)
                },
                433627: () => {
                    _("failed with unknown exception")
                },
                433678: e => {
                    _(new Error(ee(e)))
                },
                433725: e => {
                    o(e)
                },
                433748: () => {
                    _("failed with unknown exception")
                },
                433799: e => {
                    _(new Error(ee(e)))
                },
                433846: e => {
                    o(e)
                },
                433869: () => {
                    _("failed with unknown exception")
                },
                433920: e => {
                    _(new Error(ee(e)))
                },
                433967: e => {
                    o(e)
                },
                433990: () => {
                    _("failed with unknown exception")
                },
                434041: e => {
                    _(new Error(ee(e)))
                },
                434088: e => {
                    o(e)
                },
                434111: () => {
                    _("failed with unknown exception")
                },
                434162: e => {
                    _(new Error(ee(e)))
                },
                434209: e => {
                    o(e)
                },
                434232: () => {
                    _("failed with unknown exception")
                },
                434283: e => {
                    _(new Error(ee(e)))
                },
                434330: e => {
                    o(e)
                },
                434353: () => {
                    _("failed with unknown exception")
                },
                434404: e => {
                    _(new Error(ee(e)))
                },
                434451: e => {
                    o(e)
                },
                434474: () => {
                    _("failed with unknown exception")
                },
                434525: e => {
                    _(new Error(ee(e)))
                },
                434572: e => {
                    o(e)
                },
                434595: () => {
                    _("failed with unknown exception")
                },
                434646: e => {
                    _(new Error(ee(e)))
                }
            };

            function Me(e) {
                C(!O, "Internal Error! cleanupThread() can only ever be called from main application thread!"), C(e, "Internal Error! Null pthread_ptr in cleanupThread!");
                var t = Le.pthreads[e];
                C(t);
                var n = t.worker;
                Le.returnWorkerToPool(n)
            }

            function Ie(e) {
                C(!O, "Internal Error! spawnThread() can only ever be called from main application thread!"), C(e.pthread_ptr, "Internal error, no pthread ptr!");
                var t = Le.getNewWorker();
                if (!t) return 6;
                C(!t.pthread, "Internal error!"), Le.runningWorkers.push(t);
                var n = Le.pthreads[e.pthread_ptr] = {
                    worker: t,
                    threadInfoStruct: e.pthread_ptr
                };
                t.pthread = n;
                var s = {
                    cmd: "run",
                    start_routine: e.startRoutine,
                    arg: e.arg,
                    threadInfoStruct: e.pthread_ptr
                };
                return t.runPthread = () => {
                    s.time = performance.now(), t.postMessage(s, e.transferList)
                }, t.loaded && (t.runPthread(), delete t.runPthread), 0
            }

            function Re(e) {
                ! function(e, t) {
                    if (N = e, function() {
                            var e = v,
                                t = A,
                                n = !1;
                            v = A = e => {
                                n = !0
                            };
                            try {
                                Mt(0), ["stdout", "stderr"].forEach((function(e) {
                                    var t = nt.analyzePath("/dev/" + e);
                                    if (t) {
                                        var s = t.object.rdev,
                                            i = Qe.ttys[s];
                                        i && i.output && i.output.length && (n = !0)
                                    }
                                }))
                            } catch (e) {}
                            v = e, A = t, n && M("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.")
                        }(), O) throw Se(e), "unwind";
                    if (be()) {
                        var n = "program exited (with status: " + e + "), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)";
                        s(n), A(n)
                    }
                    Qt(e)
                }(e)
            }
            var Le = {
                unusedWorkers: [],
                runningWorkers: [],
                tlsInitFunctions: [],
                init: function() {
                    O ? Le.initWorker() : Le.initMainThread()
                },
                initMainThread: function() {},
                initWorker: function() {
                    T = !1
                },
                pthreads: {},
                setExitStatus: function(e) {
                    N = e
                },
                terminateAllThreads: function() {
                    for (var e in C(!O, "Internal Error! terminateAllThreads() can only ever be called from main application thread!"), Le.pthreads) {
                        var t = Le.pthreads[e];
                        t && t.worker && Le.returnWorkerToPool(t.worker)
                    }
                    C(0 === Object.keys(Le.pthreads).length), C(0 === Le.runningWorkers.length);
                    for (var n = 0; n < Le.unusedWorkers.length; ++n) {
                        var s = Le.unusedWorkers[n];
                        C(!s.pthread), s.terminate()
                    }
                    Le.unusedWorkers = []
                },
                returnWorkerToPool: function(e) {
                    var t = e.pthread.threadInfoStruct;
                    delete Le.pthreads[t], Le.unusedWorkers.push(e), Le.runningWorkers.splice(Le.runningWorkers.indexOf(e), 1), e.pthread = void 0, St(t)
                },
                receiveObjectTransfer: function(e) {},
                threadInitTLS: function() {
                    for (var e in Le.tlsInitFunctions) Le.tlsInitFunctions.hasOwnProperty(e) && Le.tlsInitFunctions[e]()
                },
                loadWasmModuleToWorker: function(t, n) {
                    t.onmessage = e => {
                        var s, r = e.data,
                            o = r.cmd;
                        if (t.pthread && (Le.currentProxiedOperationCallerThread = t.pthread.threadInfoStruct), r.targetThread && r.targetThread != At()) {
                            var _ = Le.pthreads[r.targetThread];
                            return _ ? _.worker.postMessage(r, r.transferList) : A('Internal error! Worker sent a message "' + o + '" to target pthread ' + r.targetThread + ", but that thread no longer exists!"), void(Le.currentProxiedOperationCallerThread = void 0)
                        }
                        "processProxyingQueue" === o ? _t(r.queue) : "spawnThread" === o ? Ie(r) : "cleanupThread" === o ? Me(r.thread) : "killThread" === o ? function(e) {
                            C(!O, "Internal Error! killThread() can only ever be called from main application thread!"), C(e, "Internal Error! Null pthread_ptr in killThread!");
                            var t = Le.pthreads[e];
                            delete Le.pthreads[e], t.worker.terminate(), St(e), Le.runningWorkers.splice(Le.runningWorkers.indexOf(t.worker), 1), t.worker.pthread = void 0
                        }(r.thread) : "cancelThread" === o ? (s = r.thread, C(!O, "Internal Error! cancelThread() can only ever be called from main application thread!"), C(s, "Internal Error! Null pthread_ptr in cancelThread!"), Le.pthreads[s].worker.postMessage({
                            cmd: "cancel"
                        })) : "loaded" === o ? (t.loaded = !0, n && n(t), t.runPthread && (t.runPthread(), delete t.runPthread)) : "print" === o ? v("Thread " + r.threadId + ": " + r.text) : "printErr" === o ? A("Thread " + r.threadId + ": " + r.text) : "alert" === o ? alert("Thread " + r.threadId + ": " + r.text) : "setimmediate" === r.target ? t.postMessage(r) : "onAbort" === o ? i.onAbort && i.onAbort(r.arg) : o && A("worker sent an unknown command " + o), Le.currentProxiedOperationCallerThread = void 0
                    }, t.onerror = e => {
                        var n = "worker sent an error!";
                        if (t.pthread) {
                            var s = t.pthread.threadInfoStruct;
                            s && (n = "Pthread 0x" + s.toString(16).padStart(8, "0") + " sent an error!")
                        }
                        throw A(n + " " + e.filename + ":" + e.lineno + ": " + e.message), e
                    }, l && (t.on("message", (function(e) {
                        t.onmessage({
                            data: e
                        })
                    })), t.on("error", (function(e) {
                        t.onerror(e)
                    })), t.on("detachedExit", (function() {}))), C(z instanceof WebAssembly.Memory, "WebAssembly memory should have been loaded by now!"), C(S instanceof WebAssembly.Module, "WebAssembly Module should have been loaded by now!"), t.postMessage({
                        cmd: "load",
                        urlOrBlob: i.mainScriptUrlOrBlob || e,
                        wasmMemory: z,
                        wasmModule: S
                    })
                },
                allocateUnusedWorker: function() {
                    var e = P("z3-built.worker.js");
                    Le.unusedWorkers.push(new Worker(e))
                },
                getNewWorker: function() {
                    return 0 == Le.unusedWorkers.length && (Le.allocateUnusedWorker(), Le.loadWasmModuleToWorker(Le.unusedWorkers[0])), Le.unusedWorkers.pop()
                }
            };

            function Ye(e) {
                for (; e.length > 0;) e.shift()(i)
            }

            function xe(e) {
                var t = Bt(),
                    n = e();
                return Wt(t), n
            }

            function qe(e) {
                if (qe.recursionGuard = 1 + (0 | qe.recursionGuard), qe.recursionGuard > 1) return e;
                var t = i.___cxa_demangle || i.__cxa_demangle;
                return C(t), xe((function() {
                    try {
                        var n = e;
                        n.startsWith("__Z") && (n = n.substr(1));
                        var s = se(n) + 1,
                            i = Ht(s);
                        ne(n, i, s);
                        var r = Ht(4),
                            o = t(i, 0, 0, r);
                        if (0 === V[r >> 2] && o) return ee(o)
                    } catch (e) {} finally {
                        It(o), qe.recursionGuard < 2 && --qe.recursionGuard
                    }
                    return e
                }))
            }

            function ze(e) {
                return e.replace(/\b_Z[\w\d_]+/g, (function(e) {
                    var t = qe(e);
                    return e === t ? e : t + " [" + e + "]"
                }))
            }

            function Se(e) {
                if (O) return dt(1, 0, e);
                try {
                    Re(e)
                } catch (e) {
                    ! function(e) {
                        if (e instanceof Xt || "unwind" == e) return N;
                        g(1, e)
                    }(e)
                }
            }
            i.PThread = Le, i.establishStackSpace = function() {
                var e = At(),
                    t = V[e + 44 >> 2],
                    n = t - V[e + 48 >> 2];
                C(0 != t), C(0 != n), C(t > n, "stackTop must be higher then stackMax"), Ct(t, n), Wt(t), ae()
            };
            var Te = [];

            function Ne(e) {
                var t = Te[e];
                return t || (e >= Te.length && (Te.length = e + 1), Te[e] = t = _e.get(e)), C(_e.get(e) == t, "JavaScript-side Wasm function table mirror is out of date!"), t
            }
            i.invokeEntryPoint = function(e, t) {
                var n = Ne(e)(t);
                de(), be() ? Le.setExitStatus(n) : Tt(n)
            };
            var Fe = [],
                Ce = 0,
                Be = 0;

            function We(e) {
                this.excPtr = e, this.ptr = e - 24, this.set_type = function(e) {
                    X[this.ptr + 4 >> 2] = e
                }, this.get_type = function() {
                    return X[this.ptr + 4 >> 2]
                }, this.set_destructor = function(e) {
                    X[this.ptr + 8 >> 2] = e
                }, this.get_destructor = function() {
                    return X[this.ptr + 8 >> 2]
                }, this.set_refcount = function(e) {
                    V[this.ptr >> 2] = e
                }, this.set_caught = function(e) {
                    e = e ? 1 : 0, W[this.ptr + 12 >> 0] = e
                }, this.get_caught = function() {
                    return 0 != W[this.ptr + 12 >> 0]
                }, this.set_rethrown = function(e) {
                    e = e ? 1 : 0, W[this.ptr + 13 >> 0] = e
                }, this.get_rethrown = function() {
                    return 0 != W[this.ptr + 13 >> 0]
                }, this.init = function(e, t) {
                    this.set_adjusted_ptr(0), this.set_type(e), this.set_destructor(t), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
                }, this.add_ref = function() {
                    Atomics.add(V, this.ptr + 0 >> 2, 1)
                }, this.release_ref = function() {
                    var e = Atomics.sub(V, this.ptr + 0 >> 2, 1);
                    return C(e > 0), 1 === e
                }, this.set_adjusted_ptr = function(e) {
                    X[this.ptr + 16 >> 2] = e
                }, this.get_adjusted_ptr = function() {
                    return X[this.ptr + 16 >> 2]
                }, this.get_exception_ptr = function() {
                    if (Vt(this.get_type())) return X[this.excPtr >> 2];
                    var e = this.get_adjusted_ptr();
                    return 0 !== e ? e : this.excPtr
                }
            }

            function He(e) {
                try {
                    return It(new We(e).ptr)
                } catch (e) {
                    A("exception during __cxa_free_exception: " + e)
                }
            }

            function Ge(e, t, n, s) {
                return O ? dt(2, 1, e, t, n, s) : Ve(e, t, n, s)
            }

            function Ve(e, t, n, s) {
                if ("undefined" == typeof SharedArrayBuffer) return A("Current environment does not support SharedArrayBuffer, pthreads are not available!"), 6;
                var i = [];
                if (O && 0 === i.length) return Ge(e, t, n, s);
                var r = {
                    startRoutine: n,
                    pthread_ptr: e,
                    arg: s,
                    transferList: i
                };
                return O ? (r.cmd = "spawnThread", postMessage(r, i), 0) : Ie(r)
            }
            var Xe = {
                    isAbs: e => "/" === e.charAt(0),
                    splitPath: e => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1),
                    normalizeArray: (e, t) => {
                        for (var n = 0, s = e.length - 1; s >= 0; s--) {
                            var i = e[s];
                            "." === i ? e.splice(s, 1) : ".." === i ? (e.splice(s, 1), n++) : n && (e.splice(s, 1), n--)
                        }
                        if (t)
                            for (; n; n--) e.unshift("..");
                        return e
                    },
                    normalize: e => {
                        var t = Xe.isAbs(e),
                            n = "/" === e.substr(-1);
                        return (e = Xe.normalizeArray(e.split("/").filter((e => !!e)), !t).join("/")) || t || (e = "."), e && n && (e += "/"), (t ? "/" : "") + e
                    },
                    dirname: e => {
                        var t = Xe.splitPath(e),
                            n = t[0],
                            s = t[1];
                        return n || s ? (s && (s = s.substr(0, s.length - 1)), n + s) : "."
                    },
                    basename: e => {
                        if ("/" === e) return "/";
                        var t = (e = (e = Xe.normalize(e)).replace(/\/$/, "")).lastIndexOf("/");
                        return -1 === t ? e : e.substr(t + 1)
                    },
                    join: function() {
                        var e = Array.prototype.slice.call(arguments, 0);
                        return Xe.normalize(e.join("/"))
                    },
                    join2: (e, t) => Xe.normalize(e + "/" + t)
                },
                Ke = {
                    resolve: function() {
                        for (var e = "", t = !1, n = arguments.length - 1; n >= -1 && !t; n--) {
                            var s = n >= 0 ? arguments[n] : nt.cwd();
                            if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
                            if (!s) return "";
                            e = s + "/" + e, t = Xe.isAbs(s)
                        }
                        return (t ? "/" : "") + (e = Xe.normalizeArray(e.split("/").filter((e => !!e)), !t).join("/")) || "."
                    },
                    relative: (e, t) => {
                        function n(e) {
                            for (var t = 0; t < e.length && "" === e[t]; t++);
                            for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
                            return t > n ? [] : e.slice(t, n - t + 1)
                        }
                        e = Ke.resolve(e).substr(1), t = Ke.resolve(t).substr(1);
                        for (var s = n(e.split("/")), i = n(t.split("/")), r = Math.min(s.length, i.length), o = r, _ = 0; _ < r; _++)
                            if (s[_] !== i[_]) {
                                o = _;
                                break
                            } var c = [];
                        for (_ = o; _ < s.length; _++) c.push("..");
                        return (c = c.concat(i.slice(o))).join("/")
                    }
                },
                Qe = {
                    ttys: [],
                    init: function() {},
                    shutdown: function() {},
                    register: function(e, t) {
                        Qe.ttys[e] = {
                            input: [],
                            output: [],
                            ops: t
                        }, nt.registerDevice(e, Qe.stream_ops)
                    },
                    stream_ops: {
                        open: function(e) {
                            var t = Qe.ttys[e.node.rdev];
                            if (!t) throw new nt.ErrnoError(43);
                            e.tty = t, e.seekable = !1
                        },
                        close: function(e) {
                            e.tty.ops.flush(e.tty)
                        },
                        flush: function(e) {
                            e.tty.ops.flush(e.tty)
                        },
                        read: function(e, t, n, s, i) {
                            if (!e.tty || !e.tty.ops.get_char) throw new nt.ErrnoError(60);
                            for (var r = 0, o = 0; o < s; o++) {
                                var _;
                                try {
                                    _ = e.tty.ops.get_char(e.tty)
                                } catch (e) {
                                    throw new nt.ErrnoError(29)
                                }
                                if (void 0 === _ && 0 === r) throw new nt.ErrnoError(6);
                                if (null == _) break;
                                r++, t[n + o] = _
                            }
                            return r && (e.node.timestamp = Date.now()), r
                        },
                        write: function(e, t, n, s, i) {
                            if (!e.tty || !e.tty.ops.put_char) throw new nt.ErrnoError(60);
                            try {
                                for (var r = 0; r < s; r++) e.tty.ops.put_char(e.tty, t[n + r])
                            } catch (e) {
                                throw new nt.ErrnoError(29)
                            }
                            return s && (e.node.timestamp = Date.now()), r
                        }
                    },
                    default_tty_ops: {
                        get_char: function(e) {
                            if (!e.input.length) {
                                var t = null;
                                if (l) {
                                    var n = Buffer.alloc(256),
                                        s = 0;
                                    try {
                                        s = m.readSync(process.stdin.fd, n, 0, 256, -1)
                                    } catch (e) {
                                        if (!e.toString().includes("EOF")) throw e;
                                        s = 0
                                    }
                                    t = s > 0 ? n.slice(0, s).toString("utf-8") : null
                                } else "undefined" != typeof window && "function" == typeof window.prompt ? null !== (t = window.prompt("Input: ")) && (t += "\n") : "function" == typeof readline && null !== (t = readline()) && (t += "\n");
                                if (!t) return null;
                                e.input = Ut(t, !0)
                            }
                            return e.input.shift()
                        },
                        put_char: function(e, t) {
                            null === t || 10 === t ? (v($(e.output, 0)), e.output = []) : 0 != t && e.output.push(t)
                        },
                        flush: function(e) {
                            e.output && e.output.length > 0 && (v($(e.output, 0)), e.output = [])
                        }
                    },
                    default_tty1_ops: {
                        put_char: function(e, t) {
                            null === t || 10 === t ? (A($(e.output, 0)), e.output = []) : 0 != t && e.output.push(t)
                        },
                        flush: function(e) {
                            e.output && e.output.length > 0 && (A($(e.output, 0)), e.output = [])
                        }
                    }
                };

            function Je(e) {
                Pe("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")
            }
            var $e = {
                    ops_table: null,
                    mount: function(e) {
                        return $e.createNode(null, "/", 16895, 0)
                    },
                    createNode: function(e, t, n, s) {
                        if (nt.isBlkdev(n) || nt.isFIFO(n)) throw new nt.ErrnoError(63);
                        $e.ops_table || ($e.ops_table = {
                            dir: {
                                node: {
                                    getattr: $e.node_ops.getattr,
                                    setattr: $e.node_ops.setattr,
                                    lookup: $e.node_ops.lookup,
                                    mknod: $e.node_ops.mknod,
                                    rename: $e.node_ops.rename,
                                    unlink: $e.node_ops.unlink,
                                    rmdir: $e.node_ops.rmdir,
                                    readdir: $e.node_ops.readdir,
                                    symlink: $e.node_ops.symlink
                                },
                                stream: {
                                    llseek: $e.stream_ops.llseek
                                }
                            },
                            file: {
                                node: {
                                    getattr: $e.node_ops.getattr,
                                    setattr: $e.node_ops.setattr
                                },
                                stream: {
                                    llseek: $e.stream_ops.llseek,
                                    read: $e.stream_ops.read,
                                    write: $e.stream_ops.write,
                                    allocate: $e.stream_ops.allocate,
                                    mmap: $e.stream_ops.mmap,
                                    msync: $e.stream_ops.msync
                                }
                            },
                            link: {
                                node: {
                                    getattr: $e.node_ops.getattr,
                                    setattr: $e.node_ops.setattr,
                                    readlink: $e.node_ops.readlink
                                },
                                stream: {}
                            },
                            chrdev: {
                                node: {
                                    getattr: $e.node_ops.getattr,
                                    setattr: $e.node_ops.setattr
                                },
                                stream: nt.chrdev_stream_ops
                            }
                        });
                        var i = nt.createNode(e, t, n, s);
                        return nt.isDir(i.mode) ? (i.node_ops = $e.ops_table.dir.node, i.stream_ops = $e.ops_table.dir.stream, i.contents = {}) : nt.isFile(i.mode) ? (i.node_ops = $e.ops_table.file.node, i.stream_ops = $e.ops_table.file.stream, i.usedBytes = 0, i.contents = null) : nt.isLink(i.mode) ? (i.node_ops = $e.ops_table.link.node, i.stream_ops = $e.ops_table.link.stream) : nt.isChrdev(i.mode) && (i.node_ops = $e.ops_table.chrdev.node, i.stream_ops = $e.ops_table.chrdev.stream), i.timestamp = Date.now(), e && (e.contents[t] = i, e.timestamp = i.timestamp), i
                    },
                    getFileDataAsTypedArray: function(e) {
                        return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0)
                    },
                    expandFileStorage: function(e, t) {
                        var n = e.contents ? e.contents.length : 0;
                        if (!(n >= t)) {
                            t = Math.max(t, n * (n < 1048576 ? 2 : 1.125) >>> 0), 0 != n && (t = Math.max(t, 256));
                            var s = e.contents;
                            e.contents = new Uint8Array(t), e.usedBytes > 0 && e.contents.set(s.subarray(0, e.usedBytes), 0)
                        }
                    },
                    resizeFileStorage: function(e, t) {
                        if (e.usedBytes != t)
                            if (0 == t) e.contents = null, e.usedBytes = 0;
                            else {
                                var n = e.contents;
                                e.contents = new Uint8Array(t), n && e.contents.set(n.subarray(0, Math.min(t, e.usedBytes))), e.usedBytes = t
                            }
                    },
                    node_ops: {
                        getattr: function(e) {
                            var t = {};
                            return t.dev = nt.isChrdev(e.mode) ? e.id : 1, t.ino = e.id, t.mode = e.mode, t.nlink = 1, t.uid = 0, t.gid = 0, t.rdev = e.rdev, nt.isDir(e.mode) ? t.size = 4096 : nt.isFile(e.mode) ? t.size = e.usedBytes : nt.isLink(e.mode) ? t.size = e.link.length : t.size = 0, t.atime = new Date(e.timestamp), t.mtime = new Date(e.timestamp), t.ctime = new Date(e.timestamp), t.blksize = 4096, t.blocks = Math.ceil(t.size / t.blksize), t
                        },
                        setattr: function(e, t) {
                            void 0 !== t.mode && (e.mode = t.mode), void 0 !== t.timestamp && (e.timestamp = t.timestamp), void 0 !== t.size && $e.resizeFileStorage(e, t.size)
                        },
                        lookup: function(e, t) {
                            throw nt.genericErrors[44]
                        },
                        mknod: function(e, t, n, s) {
                            return $e.createNode(e, t, n, s)
                        },
                        rename: function(e, t, n) {
                            if (nt.isDir(e.mode)) {
                                var s;
                                try {
                                    s = nt.lookupNode(t, n)
                                } catch (e) {}
                                if (s)
                                    for (var i in s.contents) throw new nt.ErrnoError(55)
                            }
                            delete e.parent.contents[e.name], e.parent.timestamp = Date.now(), e.name = n, t.contents[n] = e, t.timestamp = e.parent.timestamp, e.parent = t
                        },
                        unlink: function(e, t) {
                            delete e.contents[t], e.timestamp = Date.now()
                        },
                        rmdir: function(e, t) {
                            var n = nt.lookupNode(e, t);
                            for (var s in n.contents) throw new nt.ErrnoError(55);
                            delete e.contents[t], e.timestamp = Date.now()
                        },
                        readdir: function(e) {
                            var t = [".", ".."];
                            for (var n in e.contents) e.contents.hasOwnProperty(n) && t.push(n);
                            return t
                        },
                        symlink: function(e, t, n) {
                            var s = $e.createNode(e, t, 41471, 0);
                            return s.link = n, s
                        },
                        readlink: function(e) {
                            if (!nt.isLink(e.mode)) throw new nt.ErrnoError(28);
                            return e.link
                        }
                    },
                    stream_ops: {
                        read: function(e, t, n, s, i) {
                            var r = e.node.contents;
                            if (i >= e.node.usedBytes) return 0;
                            var o = Math.min(e.node.usedBytes - i, s);
                            if (C(o >= 0), o > 8 && r.subarray) t.set(r.subarray(i, i + o), n);
                            else
                                for (var _ = 0; _ < o; _++) t[n + _] = r[i + _];
                            return o
                        },
                        write: function(e, t, n, s, i, r) {
                            if (C(!(t instanceof ArrayBuffer)), !s) return 0;
                            var o = e.node;
                            if (o.timestamp = Date.now(), t.subarray && (!o.contents || o.contents.subarray)) {
                                if (r) return C(0 === i, "canOwn must imply no weird position inside the file"), o.contents = t.subarray(n, n + s), o.usedBytes = s, s;
                                if (0 === o.usedBytes && 0 === i) return o.contents = t.slice(n, n + s), o.usedBytes = s, s;
                                if (i + s <= o.usedBytes) return o.contents.set(t.subarray(n, n + s), i), s
                            }
                            if ($e.expandFileStorage(o, i + s), o.contents.subarray && t.subarray) o.contents.set(t.subarray(n, n + s), i);
                            else
                                for (var _ = 0; _ < s; _++) o.contents[i + _] = t[n + _];
                            return o.usedBytes = Math.max(o.usedBytes, i + s), s
                        },
                        llseek: function(e, t, n) {
                            var s = t;
                            if (1 === n ? s += e.position : 2 === n && nt.isFile(e.node.mode) && (s += e.node.usedBytes), s < 0) throw new nt.ErrnoError(28);
                            return s
                        },
                        allocate: function(e, t, n) {
                            $e.expandFileStorage(e.node, t + n), e.node.usedBytes = Math.max(e.node.usedBytes, t + n)
                        },
                        mmap: function(e, t, n, s, i) {
                            if (!nt.isFile(e.node.mode)) throw new nt.ErrnoError(43);
                            var r, o, _ = e.node.contents;
                            if (2 & i || _.buffer !== B) {
                                if ((n > 0 || n + t < _.length) && (_ = _.subarray ? _.subarray(n, n + t) : Array.prototype.slice.call(_, n, n + t)), o = !0, !(r = Je())) throw new nt.ErrnoError(48);
                                W.set(_, r)
                            } else o = !1, r = _.byteOffset;
                            return {
                                ptr: r,
                                allocated: o
                            }
                        },
                        msync: function(e, t, n, s, i) {
                            if (!nt.isFile(e.node.mode)) throw new nt.ErrnoError(43);
                            return 2 & i || $e.stream_ops.write(e, t, 0, s, n, !1), 0
                        }
                    }
                },
                et = {
                    0: "Success",
                    1: "Arg list too long",
                    2: "Permission denied",
                    3: "Address already in use",
                    4: "Address not available",
                    5: "Address family not supported by protocol family",
                    6: "No more processes",
                    7: "Socket already connected",
                    8: "Bad file number",
                    9: "Trying to read unreadable message",
                    10: "Mount device busy",
                    11: "Operation canceled",
                    12: "No children",
                    13: "Connection aborted",
                    14: "Connection refused",
                    15: "Connection reset by peer",
                    16: "File locking deadlock error",
                    17: "Destination address required",
                    18: "Math arg out of domain of func",
                    19: "Quota exceeded",
                    20: "File exists",
                    21: "Bad address",
                    22: "File too large",
                    23: "Host is unreachable",
                    24: "Identifier removed",
                    25: "Illegal byte sequence",
                    26: "Connection already in progress",
                    27: "Interrupted system call",
                    28: "Invalid argument",
                    29: "I/O error",
                    30: "Socket is already connected",
                    31: "Is a directory",
                    32: "Too many symbolic links",
                    33: "Too many open files",
                    34: "Too many links",
                    35: "Message too long",
                    36: "Multihop attempted",
                    37: "File or path name too long",
                    38: "Network interface is not configured",
                    39: "Connection reset by network",
                    40: "Network is unreachable",
                    41: "Too many open files in system",
                    42: "No buffer space available",
                    43: "No such device",
                    44: "No such file or directory",
                    45: "Exec format error",
                    46: "No record locks available",
                    47: "The link has been severed",
                    48: "Not enough core",
                    49: "No message of desired type",
                    50: "Protocol not available",
                    51: "No space left on device",
                    52: "Function not implemented",
                    53: "Socket is not connected",
                    54: "Not a directory",
                    55: "Directory not empty",
                    56: "State not recoverable",
                    57: "Socket operation on non-socket",
                    59: "Not a typewriter",
                    60: "No such device or address",
                    61: "Value too large for defined data type",
                    62: "Previous owner died",
                    63: "Not super-user",
                    64: "Broken pipe",
                    65: "Protocol error",
                    66: "Unknown protocol",
                    67: "Protocol wrong type for socket",
                    68: "Math result not representable",
                    69: "Read only file system",
                    70: "Illegal seek",
                    71: "No such process",
                    72: "Stale file handle",
                    73: "Connection timed out",
                    74: "Text file busy",
                    75: "Cross-device link",
                    100: "Device not a stream",
                    101: "Bad font file fmt",
                    102: "Invalid slot",
                    103: "Invalid request code",
                    104: "No anode",
                    105: "Block device required",
                    106: "Channel number out of range",
                    107: "Level 3 halted",
                    108: "Level 3 reset",
                    109: "Link number out of range",
                    110: "Protocol driver not attached",
                    111: "No CSI structure available",
                    112: "Level 2 halted",
                    113: "Invalid exchange",
                    114: "Invalid request descriptor",
                    115: "Exchange full",
                    116: "No data (for no delay io)",
                    117: "Timer expired",
                    118: "Out of streams resources",
                    119: "Machine is not on the network",
                    120: "Package not installed",
                    121: "The object is remote",
                    122: "Advertise error",
                    123: "Srmount error",
                    124: "Communication error on send",
                    125: "Cross mount point (not really error)",
                    126: "Given log. name not unique",
                    127: "f.d. invalid for this operation",
                    128: "Remote address changed",
                    129: "Can   access a needed shared lib",
                    130: "Accessing a corrupted shared lib",
                    131: ".lib section in a.out corrupted",
                    132: "Attempting to link in too many libs",
                    133: "Attempting to exec a shared library",
                    135: "Streams pipe error",
                    136: "Too many users",
                    137: "Socket type not supported",
                    138: "Not supported",
                    139: "Protocol family not supported",
                    140: "Can't send after socket shutdown",
                    141: "Too many references",
                    142: "Host is down",
                    148: "No medium (in tape drive)",
                    156: "Level 2 not synchronized"
                },
                tt = {},
                nt = {
                    root: null,
                    mounts: [],
                    devices: {},
                    streams: [],
                    nextInode: 1,
                    nameTable: null,
                    currentPath: "/",
                    initialized: !1,
                    ignorePermissions: !0,
                    ErrnoError: null,
                    genericErrors: {},
                    filesystems: null,
                    syncFSRequests: 0,
                    lookupPath: (e, t = {}) => {
                        if (!(e = Ke.resolve(nt.cwd(), e))) return {
                            path: "",
                            node: null
                        };
                        if ((t = Object.assign({
                                follow_mount: !0,
                                recurse_count: 0
                            }, t)).recurse_count > 8) throw new nt.ErrnoError(32);
                        for (var n = Xe.normalizeArray(e.split("/").filter((e => !!e)), !1), s = nt.root, i = "/", r = 0; r < n.length; r++) {
                            var o = r === n.length - 1;
                            if (o && t.parent) break;
                            if (s = nt.lookupNode(s, n[r]), i = Xe.join2(i, n[r]), nt.isMountpoint(s) && (!o || o && t.follow_mount) && (s = s.mounted.root), !o || t.follow)
                                for (var _ = 0; nt.isLink(s.mode);) {
                                    var c = nt.readlink(i);
                                    if (i = Ke.resolve(Xe.dirname(i), c), s = nt.lookupPath(i, {
                                            recurse_count: t.recurse_count + 1
                                        }).node, _++ > 40) throw new nt.ErrnoError(32)
                                }
                        }
                        return {
                            path: i,
                            node: s
                        }
                    },
                    getPath: e => {
                        for (var t;;) {
                            if (nt.isRoot(e)) {
                                var n = e.mount.mountpoint;
                                return t ? "/" !== n[n.length - 1] ? n + "/" + t : n + t : n
                            }
                            t = t ? e.name + "/" + t : e.name, e = e.parent
                        }
                    },
                    hashName: (e, t) => {
                        for (var n = 0, s = 0; s < t.length; s++) n = (n << 5) - n + t.charCodeAt(s) | 0;
                        return (e + n >>> 0) % nt.nameTable.length
                    },
                    hashAddNode: e => {
                        var t = nt.hashName(e.parent.id, e.name);
                        e.name_next = nt.nameTable[t], nt.nameTable[t] = e
                    },
                    hashRemoveNode: e => {
                        var t = nt.hashName(e.parent.id, e.name);
                        if (nt.nameTable[t] === e) nt.nameTable[t] = e.name_next;
                        else
                            for (var n = nt.nameTable[t]; n;) {
                                if (n.name_next === e) {
                                    n.name_next = e.name_next;
                                    break
                                }
                                n = n.name_next
                            }
                    },
                    lookupNode: (e, t) => {
                        var n = nt.mayLookup(e);
                        if (n) throw new nt.ErrnoError(n, e);
                        for (var s = nt.hashName(e.id, t), i = nt.nameTable[s]; i; i = i.name_next) {
                            var r = i.name;
                            if (i.parent.id === e.id && r === t) return i
                        }
                        return nt.lookup(e, t)
                    },
                    createNode: (e, t, n, s) => {
                        C("object" == typeof e);
                        var i = new nt.FSNode(e, t, n, s);
                        return nt.hashAddNode(i), i
                    },
                    destroyNode: e => {
                        nt.hashRemoveNode(e)
                    },
                    isRoot: e => e === e.parent,
                    isMountpoint: e => !!e.mounted,
                    isFile: e => 32768 == (61440 & e),
                    isDir: e => 16384 == (61440 & e),
                    isLink: e => 40960 == (61440 & e),
                    isChrdev: e => 8192 == (61440 & e),
                    isBlkdev: e => 24576 == (61440 & e),
                    isFIFO: e => 4096 == (61440 & e),
                    isSocket: e => 49152 == (49152 & e),
                    flagModes: {
                        r: 0,
                        "r+": 2,
                        w: 577,
                        "w+": 578,
                        a: 1089,
                        "a+": 1090
                    },
                    modeStringToFlags: e => {
                        var t = nt.flagModes[e];
                        if (void 0 === t) throw new Error("Unknown file open mode: " + e);
                        return t
                    },
                    flagsToPermissionString: e => {
                        var t = ["r", "w", "rw"][3 & e];
                        return 512 & e && (t += "w"), t
                    },
                    nodePermissions: (e, t) => nt.ignorePermissions || (!t.includes("r") || 292 & e.mode) && (!t.includes("w") || 146 & e.mode) && (!t.includes("x") || 73 & e.mode) ? 0 : 2,
                    mayLookup: e => nt.nodePermissions(e, "x") || (e.node_ops.lookup ? 0 : 2),
                    mayCreate: (e, t) => {
                        try {
                            return nt.lookupNode(e, t), 20
                        } catch (e) {}
                        return nt.nodePermissions(e, "wx")
                    },
                    mayDelete: (e, t, n) => {
                        var s;
                        try {
                            s = nt.lookupNode(e, t)
                        } catch (e) {
                            return e.errno
                        }
                        var i = nt.nodePermissions(e, "wx");
                        if (i) return i;
                        if (n) {
                            if (!nt.isDir(s.mode)) return 54;
                            if (nt.isRoot(s) || nt.getPath(s) === nt.cwd()) return 10
                        } else if (nt.isDir(s.mode)) return 31;
                        return 0
                    },
                    mayOpen: (e, t) => e ? nt.isLink(e.mode) ? 32 : nt.isDir(e.mode) && ("r" !== nt.flagsToPermissionString(t) || 512 & t) ? 31 : nt.nodePermissions(e, nt.flagsToPermissionString(t)) : 44,
                    MAX_OPEN_FDS: 4096,
                    nextfd: (e = 0, t = nt.MAX_OPEN_FDS) => {
                        for (var n = e; n <= t; n++)
                            if (!nt.streams[n]) return n;
                        throw new nt.ErrnoError(33)
                    },
                    getStream: e => nt.streams[e],
                    createStream: (e, t, n) => {
                        nt.FSStream || (nt.FSStream = function() {
                            this.shared = {}
                        }, nt.FSStream.prototype = {}, Object.defineProperties(nt.FSStream.prototype, {
                            object: {
                                get: function() {
                                    return this.node
                                },
                                set: function(e) {
                                    this.node = e
                                }
                            },
                            isRead: {
                                get: function() {
                                    return 1 != (2097155 & this.flags)
                                }
                            },
                            isWrite: {
                                get: function() {
                                    return 0 != (2097155 & this.flags)
                                }
                            },
                            isAppend: {
                                get: function() {
                                    return 1024 & this.flags
                                }
                            },
                            flags: {
                                get: function() {
                                    return this.shared.flags
                                },
                                set: function(e) {
                                    this.shared.flags = e
                                }
                            },
                            position: {
                                get: function() {
                                    return this.shared.position
                                },
                                set: function(e) {
                                    this.shared.position = e
                                }
                            }
                        })), e = Object.assign(new nt.FSStream, e);
                        var s = nt.nextfd(t, n);
                        return e.fd = s, nt.streams[s] = e, e
                    },
                    closeStream: e => {
                        nt.streams[e] = null
                    },
                    chrdev_stream_ops: {
                        open: e => {
                            var t = nt.getDevice(e.node.rdev);
                            e.stream_ops = t.stream_ops, e.stream_ops.open && e.stream_ops.open(e)
                        },
                        llseek: () => {
                            throw new nt.ErrnoError(70)
                        }
                    },
                    major: e => e >> 8,
                    minor: e => 255 & e,
                    makedev: (e, t) => e << 8 | t,
                    registerDevice: (e, t) => {
                        nt.devices[e] = {
                            stream_ops: t
                        }
                    },
                    getDevice: e => nt.devices[e],
                    getMounts: e => {
                        for (var t = [], n = [e]; n.length;) {
                            var s = n.pop();
                            t.push(s), n.push.apply(n, s.mounts)
                        }
                        return t
                    },
                    syncfs: (e, t) => {
                        "function" == typeof e && (t = e, e = !1), nt.syncFSRequests++, nt.syncFSRequests > 1 && A("warning: " + nt.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
                        var n = nt.getMounts(nt.root.mount),
                            s = 0;

                        function i(e) {
                            return C(nt.syncFSRequests > 0), nt.syncFSRequests--, t(e)
                        }

                        function r(e) {
                            if (e) return r.errored ? void 0 : (r.errored = !0, i(e));
                            ++s >= n.length && i(null)
                        }
                        n.forEach((t => {
                            if (!t.type.syncfs) return r(null);
                            t.type.syncfs(t, e, r)
                        }))
                    },
                    mount: (e, t, n) => {
                        if ("string" == typeof e) throw e;
                        var s, i = "/" === n,
                            r = !n;
                        if (i && nt.root) throw new nt.ErrnoError(10);
                        if (!i && !r) {
                            var o = nt.lookupPath(n, {
                                follow_mount: !1
                            });
                            if (n = o.path, s = o.node, nt.isMountpoint(s)) throw new nt.ErrnoError(10);
                            if (!nt.isDir(s.mode)) throw new nt.ErrnoError(54)
                        }
                        var _ = {
                                type: e,
                                opts: t,
                                mountpoint: n,
                                mounts: []
                            },
                            c = e.mount(_);
                        return c.mount = _, _.root = c, i ? nt.root = c : s && (s.mounted = _, s.mount && s.mount.mounts.push(_)), c
                    },
                    unmount: e => {
                        var t = nt.lookupPath(e, {
                            follow_mount: !1
                        });
                        if (!nt.isMountpoint(t.node)) throw new nt.ErrnoError(28);
                        var n = t.node,
                            s = n.mounted,
                            i = nt.getMounts(s);
                        Object.keys(nt.nameTable).forEach((e => {
                            for (var t = nt.nameTable[e]; t;) {
                                var n = t.name_next;
                                i.includes(t.mount) && nt.destroyNode(t), t = n
                            }
                        })), n.mounted = null;
                        var r = n.mount.mounts.indexOf(s);
                        C(-1 !== r), n.mount.mounts.splice(r, 1)
                    },
                    lookup: (e, t) => e.node_ops.lookup(e, t),
                    mknod: (e, t, n) => {
                        var s = nt.lookupPath(e, {
                                parent: !0
                            }).node,
                            i = Xe.basename(e);
                        if (!i || "." === i || ".." === i) throw new nt.ErrnoError(28);
                        var r = nt.mayCreate(s, i);
                        if (r) throw new nt.ErrnoError(r);
                        if (!s.node_ops.mknod) throw new nt.ErrnoError(63);
                        return s.node_ops.mknod(s, i, t, n)
                    },
                    create: (e, t) => (t = void 0 !== t ? t : 438, t &= 4095, t |= 32768, nt.mknod(e, t, 0)),
                    mkdir: (e, t) => (t = void 0 !== t ? t : 511, t &= 1023, t |= 16384, nt.mknod(e, t, 0)),
                    mkdirTree: (e, t) => {
                        for (var n = e.split("/"), s = "", i = 0; i < n.length; ++i)
                            if (n[i]) {
                                s += "/" + n[i];
                                try {
                                    nt.mkdir(s, t)
                                } catch (e) {
                                    if (20 != e.errno) throw e
                                }
                            }
                    },
                    mkdev: (e, t, n) => (void 0 === n && (n = t, t = 438), t |= 8192, nt.mknod(e, t, n)),
                    symlink: (e, t) => {
                        if (!Ke.resolve(e)) throw new nt.ErrnoError(44);
                        var n = nt.lookupPath(t, {
                            parent: !0
                        }).node;
                        if (!n) throw new nt.ErrnoError(44);
                        var s = Xe.basename(t),
                            i = nt.mayCreate(n, s);
                        if (i) throw new nt.ErrnoError(i);
                        if (!n.node_ops.symlink) throw new nt.ErrnoError(63);
                        return n.node_ops.symlink(n, s, e)
                    },
                    rename: (e, t) => {
                        var n, s, i = Xe.dirname(e),
                            r = Xe.dirname(t),
                            o = Xe.basename(e),
                            _ = Xe.basename(t);
                        if (n = nt.lookupPath(e, {
                                parent: !0
                            }).node, s = nt.lookupPath(t, {
                                parent: !0
                            }).node, !n || !s) throw new nt.ErrnoError(44);
                        if (n.mount !== s.mount) throw new nt.ErrnoError(75);
                        var c, a = nt.lookupNode(n, o),
                            d = Ke.relative(e, r);
                        if ("." !== d.charAt(0)) throw new nt.ErrnoError(28);
                        if ("." !== (d = Ke.relative(t, i)).charAt(0)) throw new nt.ErrnoError(55);
                        try {
                            c = nt.lookupNode(s, _)
                        } catch (e) {}
                        if (a !== c) {
                            var g = nt.isDir(a.mode),
                                h = nt.mayDelete(n, o, g);
                            if (h) throw new nt.ErrnoError(h);
                            if (h = c ? nt.mayDelete(s, _, g) : nt.mayCreate(s, _)) throw new nt.ErrnoError(h);
                            if (!n.node_ops.rename) throw new nt.ErrnoError(63);
                            if (nt.isMountpoint(a) || c && nt.isMountpoint(c)) throw new nt.ErrnoError(10);
                            if (s !== n && (h = nt.nodePermissions(n, "w"))) throw new nt.ErrnoError(h);
                            nt.hashRemoveNode(a);
                            try {
                                n.node_ops.rename(a, s, _)
                            } catch (e) {
                                throw e
                            } finally {
                                nt.hashAddNode(a)
                            }
                        }
                    },
                    rmdir: e => {
                        var t = nt.lookupPath(e, {
                                parent: !0
                            }).node,
                            n = Xe.basename(e),
                            s = nt.lookupNode(t, n),
                            i = nt.mayDelete(t, n, !0);
                        if (i) throw new nt.ErrnoError(i);
                        if (!t.node_ops.rmdir) throw new nt.ErrnoError(63);
                        if (nt.isMountpoint(s)) throw new nt.ErrnoError(10);
                        t.node_ops.rmdir(t, n), nt.destroyNode(s)
                    },
                    readdir: e => {
                        var t = nt.lookupPath(e, {
                            follow: !0
                        }).node;
                        if (!t.node_ops.readdir) throw new nt.ErrnoError(54);
                        return t.node_ops.readdir(t)
                    },
                    unlink: e => {
                        var t = nt.lookupPath(e, {
                            parent: !0
                        }).node;
                        if (!t) throw new nt.ErrnoError(44);
                        var n = Xe.basename(e),
                            s = nt.lookupNode(t, n),
                            i = nt.mayDelete(t, n, !1);
                        if (i) throw new nt.ErrnoError(i);
                        if (!t.node_ops.unlink) throw new nt.ErrnoError(63);
                        if (nt.isMountpoint(s)) throw new nt.ErrnoError(10);
                        t.node_ops.unlink(t, n), nt.destroyNode(s)
                    },
                    readlink: e => {
                        var t = nt.lookupPath(e).node;
                        if (!t) throw new nt.ErrnoError(44);
                        if (!t.node_ops.readlink) throw new nt.ErrnoError(28);
                        return Ke.resolve(nt.getPath(t.parent), t.node_ops.readlink(t))
                    },
                    stat: (e, t) => {
                        var n = nt.lookupPath(e, {
                            follow: !t
                        }).node;
                        if (!n) throw new nt.ErrnoError(44);
                        if (!n.node_ops.getattr) throw new nt.ErrnoError(63);
                        return n.node_ops.getattr(n)
                    },
                    lstat: e => nt.stat(e, !0),
                    chmod: (e, t, n) => {
                        var s;
                        if (!(s = "string" == typeof e ? nt.lookupPath(e, {
                                follow: !n
                            }).node : e).node_ops.setattr) throw new nt.ErrnoError(63);
                        s.node_ops.setattr(s, {
                            mode: 4095 & t | -4096 & s.mode,
                            timestamp: Date.now()
                        })
                    },
                    lchmod: (e, t) => {
                        nt.chmod(e, t, !0)
                    },
                    fchmod: (e, t) => {
                        var n = nt.getStream(e);
                        if (!n) throw new nt.ErrnoError(8);
                        nt.chmod(n.node, t)
                    },
                    chown: (e, t, n, s) => {
                        var i;
                        if (!(i = "string" == typeof e ? nt.lookupPath(e, {
                                follow: !s
                            }).node : e).node_ops.setattr) throw new nt.ErrnoError(63);
                        i.node_ops.setattr(i, {
                            timestamp: Date.now()
                        })
                    },
                    lchown: (e, t, n) => {
                        nt.chown(e, t, n, !0)
                    },
                    fchown: (e, t, n) => {
                        var s = nt.getStream(e);
                        if (!s) throw new nt.ErrnoError(8);
                        nt.chown(s.node, t, n)
                    },
                    truncate: (e, t) => {
                        if (t < 0) throw new nt.ErrnoError(28);
                        var n;
                        if (!(n = "string" == typeof e ? nt.lookupPath(e, {
                                follow: !0
                            }).node : e).node_ops.setattr) throw new nt.ErrnoError(63);
                        if (nt.isDir(n.mode)) throw new nt.ErrnoError(31);
                        if (!nt.isFile(n.mode)) throw new nt.ErrnoError(28);
                        var s = nt.nodePermissions(n, "w");
                        if (s) throw new nt.ErrnoError(s);
                        n.node_ops.setattr(n, {
                            size: t,
                            timestamp: Date.now()
                        })
                    },
                    ftruncate: (e, t) => {
                        var n = nt.getStream(e);
                        if (!n) throw new nt.ErrnoError(8);
                        if (0 == (2097155 & n.flags)) throw new nt.ErrnoError(28);
                        nt.truncate(n.node, t)
                    },
                    utime: (e, t, n) => {
                        var s = nt.lookupPath(e, {
                            follow: !0
                        }).node;
                        s.node_ops.setattr(s, {
                            timestamp: Math.max(t, n)
                        })
                    },
                    open: (e, t, n) => {
                        if ("" === e) throw new nt.ErrnoError(44);
                        var s;
                        if (n = void 0 === n ? 438 : n, n = 64 & (t = "string" == typeof t ? nt.modeStringToFlags(t) : t) ? 4095 & n | 32768 : 0, "object" == typeof e) s = e;
                        else {
                            e = Xe.normalize(e);
                            try {
                                s = nt.lookupPath(e, {
                                    follow: !(131072 & t)
                                }).node
                            } catch (e) {}
                        }
                        var r = !1;
                        if (64 & t)
                            if (s) {
                                if (128 & t) throw new nt.ErrnoError(20)
                            } else s = nt.mknod(e, n, 0), r = !0;
                        if (!s) throw new nt.ErrnoError(44);
                        if (nt.isChrdev(s.mode) && (t &= -513), 65536 & t && !nt.isDir(s.mode)) throw new nt.ErrnoError(54);
                        if (!r) {
                            var o = nt.mayOpen(s, t);
                            if (o) throw new nt.ErrnoError(o)
                        }
                        512 & t && !r && nt.truncate(s, 0), t &= -131713;
                        var _ = nt.createStream({
                            node: s,
                            path: nt.getPath(s),
                            flags: t,
                            seekable: !0,
                            position: 0,
                            stream_ops: s.stream_ops,
                            ungotten: [],
                            error: !1
                        });
                        return _.stream_ops.open && _.stream_ops.open(_), !i.logReadFiles || 1 & t || (nt.readFiles || (nt.readFiles = {}), e in nt.readFiles || (nt.readFiles[e] = 1)), _
                    },
                    close: e => {
                        if (nt.isClosed(e)) throw new nt.ErrnoError(8);
                        e.getdents && (e.getdents = null);
                        try {
                            e.stream_ops.close && e.stream_ops.close(e)
                        } catch (e) {
                            throw e
                        } finally {
                            nt.closeStream(e.fd)
                        }
                        e.fd = null
                    },
                    isClosed: e => null === e.fd,
                    llseek: (e, t, n) => {
                        if (nt.isClosed(e)) throw new nt.ErrnoError(8);
                        if (!e.seekable || !e.stream_ops.llseek) throw new nt.ErrnoError(70);
                        if (0 != n && 1 != n && 2 != n) throw new nt.ErrnoError(28);
                        return e.position = e.stream_ops.llseek(e, t, n), e.ungotten = [], e.position
                    },
                    read: (e, t, n, s, i) => {
                        if (s < 0 || i < 0) throw new nt.ErrnoError(28);
                        if (nt.isClosed(e)) throw new nt.ErrnoError(8);
                        if (1 == (2097155 & e.flags)) throw new nt.ErrnoError(8);
                        if (nt.isDir(e.node.mode)) throw new nt.ErrnoError(31);
                        if (!e.stream_ops.read) throw new nt.ErrnoError(28);
                        var r = void 0 !== i;
                        if (r) {
                            if (!e.seekable) throw new nt.ErrnoError(70)
                        } else i = e.position;
                        var o = e.stream_ops.read(e, t, n, s, i);
                        return r || (e.position += o), o
                    },
                    write: (e, t, n, s, i, r) => {
                        if (s < 0 || i < 0) throw new nt.ErrnoError(28);
                        if (nt.isClosed(e)) throw new nt.ErrnoError(8);
                        if (0 == (2097155 & e.flags)) throw new nt.ErrnoError(8);
                        if (nt.isDir(e.node.mode)) throw new nt.ErrnoError(31);
                        if (!e.stream_ops.write) throw new nt.ErrnoError(28);
                        e.seekable && 1024 & e.flags && nt.llseek(e, 0, 2);
                        var o = void 0 !== i;
                        if (o) {
                            if (!e.seekable) throw new nt.ErrnoError(70)
                        } else i = e.position;
                        var _ = e.stream_ops.write(e, t, n, s, i, r);
                        return o || (e.position += _), _
                    },
                    allocate: (e, t, n) => {
                        if (nt.isClosed(e)) throw new nt.ErrnoError(8);
                        if (t < 0 || n <= 0) throw new nt.ErrnoError(28);
                        if (0 == (2097155 & e.flags)) throw new nt.ErrnoError(8);
                        if (!nt.isFile(e.node.mode) && !nt.isDir(e.node.mode)) throw new nt.ErrnoError(43);
                        if (!e.stream_ops.allocate) throw new nt.ErrnoError(138);
                        e.stream_ops.allocate(e, t, n)
                    },
                    mmap: (e, t, n, s, i) => {
                        if (0 != (2 & s) && 0 == (2 & i) && 2 != (2097155 & e.flags)) throw new nt.ErrnoError(2);
                        if (1 == (2097155 & e.flags)) throw new nt.ErrnoError(2);
                        if (!e.stream_ops.mmap) throw new nt.ErrnoError(43);
                        return e.stream_ops.mmap(e, t, n, s, i)
                    },
                    msync: (e, t, n, s, i) => e && e.stream_ops.msync ? e.stream_ops.msync(e, t, n, s, i) : 0,
                    munmap: e => 0,
                    ioctl: (e, t, n) => {
                        if (!e.stream_ops.ioctl) throw new nt.ErrnoError(59);
                        return e.stream_ops.ioctl(e, t, n)
                    },
                    readFile: (e, t = {}) => {
                        if (t.flags = t.flags || 0, t.encoding = t.encoding || "binary", "utf8" !== t.encoding && "binary" !== t.encoding) throw new Error('Invalid encoding type "' + t.encoding + '"');
                        var n, s = nt.open(e, t.flags),
                            i = nt.stat(e).size,
                            r = new Uint8Array(i);
                        return nt.read(s, r, 0, i, 0), "utf8" === t.encoding ? n = $(r, 0) : "binary" === t.encoding && (n = r), nt.close(s), n
                    },
                    writeFile: (e, t, n = {}) => {
                        n.flags = n.flags || 577;
                        var s = nt.open(e, n.flags, n.mode);
                        if ("string" == typeof t) {
                            var i = new Uint8Array(se(t) + 1),
                                r = te(t, i, 0, i.length);
                            nt.write(s, i, 0, r, void 0, n.canOwn)
                        } else {
                            if (!ArrayBuffer.isView(t)) throw new Error("Unsupported data type");
                            nt.write(s, t, 0, t.byteLength, void 0, n.canOwn)
                        }
                        nt.close(s)
                    },
                    cwd: () => nt.currentPath,
                    chdir: e => {
                        var t = nt.lookupPath(e, {
                            follow: !0
                        });
                        if (null === t.node) throw new nt.ErrnoError(44);
                        if (!nt.isDir(t.node.mode)) throw new nt.ErrnoError(54);
                        var n = nt.nodePermissions(t.node, "x");
                        if (n) throw new nt.ErrnoError(n);
                        nt.currentPath = t.path
                    },
                    createDefaultDirectories: () => {
                        nt.mkdir("/tmp"), nt.mkdir("/home"), nt.mkdir("/home/web_user")
                    },
                    createDefaultDevices: () => {
                        nt.mkdir("/dev"), nt.registerDevice(nt.makedev(1, 3), {
                            read: () => 0,
                            write: (e, t, n, s, i) => s
                        }), nt.mkdev("/dev/null", nt.makedev(1, 3)), Qe.register(nt.makedev(5, 0), Qe.default_tty_ops), Qe.register(nt.makedev(6, 0), Qe.default_tty1_ops), nt.mkdev("/dev/tty", nt.makedev(5, 0)), nt.mkdev("/dev/tty1", nt.makedev(6, 0));
                        var e = function() {
                            if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
                                var e = new Uint8Array(1);
                                return function() {
                                    return crypto.getRandomValues(e), e[0]
                                }
                            }
                            if (l) try {
                                var t = require("crypto");
                                return function() {
                                    return t.randomBytes(1)[0]
                                }
                            } catch (e) {}
                            return function() {
                                Pe("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };")
                            }
                        }();
                        nt.createDevice("/dev", "random", e), nt.createDevice("/dev", "urandom", e), nt.mkdir("/dev/shm"), nt.mkdir("/dev/shm/tmp")
                    },
                    createSpecialDirectories: () => {
                        nt.mkdir("/proc");
                        var e = nt.mkdir("/proc/self");
                        nt.mkdir("/proc/self/fd"), nt.mount({
                            mount: () => {
                                var t = nt.createNode(e, "fd", 16895, 73);
                                return t.node_ops = {
                                    lookup: (e, t) => {
                                        var n = +t,
                                            s = nt.getStream(n);
                                        if (!s) throw new nt.ErrnoError(8);
                                        var i = {
                                            parent: null,
                                            mount: {
                                                mountpoint: "fake"
                                            },
                                            node_ops: {
                                                readlink: () => s.path
                                            }
                                        };
                                        return i.parent = i, i
                                    }
                                }, t
                            }
                        }, {}, "/proc/self/fd")
                    },
                    createStandardStreams: () => {
                        i.stdin ? nt.createDevice("/dev", "stdin", i.stdin) : nt.symlink("/dev/tty", "/dev/stdin"), i.stdout ? nt.createDevice("/dev", "stdout", null, i.stdout) : nt.symlink("/dev/tty", "/dev/stdout"), i.stderr ? nt.createDevice("/dev", "stderr", null, i.stderr) : nt.symlink("/dev/tty1", "/dev/stderr");
                        var e = nt.open("/dev/stdin", 0),
                            t = nt.open("/dev/stdout", 1),
                            n = nt.open("/dev/stderr", 1);
                        C(0 === e.fd, "invalid handle for stdin (" + e.fd + ")"), C(1 === t.fd, "invalid handle for stdout (" + t.fd + ")"), C(2 === n.fd, "invalid handle for stderr (" + n.fd + ")")
                    },
                    ensureErrnoError: () => {
                        nt.ErrnoError || (nt.ErrnoError = function(e, t) {
                            this.node = t, this.setErrno = function(e) {
                                for (var t in this.errno = e, tt)
                                    if (tt[t] === e) {
                                        this.code = t;
                                        break
                                    }
                            }, this.setErrno(e), this.message = et[e], this.stack && (Object.defineProperty(this, "stack", {
                                value: (new Error).stack,
                                writable: !0
                            }), this.stack = ze(this.stack))
                        }, nt.ErrnoError.prototype = new Error, nt.ErrnoError.prototype.constructor = nt.ErrnoError, [44].forEach((e => {
                            nt.genericErrors[e] = new nt.ErrnoError(e), nt.genericErrors[e].stack = "<generic error, no stack>"
                        })))
                    },
                    staticInit: () => {
                        nt.ensureErrnoError(), nt.nameTable = new Array(4096), nt.mount($e, {}, "/"), nt.createDefaultDirectories(), nt.createDefaultDevices(), nt.createSpecialDirectories(), nt.filesystems = {
                            MEMFS: $e
                        }
                    },
                    init: (e, t, n) => {
                        C(!nt.init.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"), nt.init.initialized = !0, nt.ensureErrnoError(), i.stdin = e || i.stdin, i.stdout = t || i.stdout, i.stderr = n || i.stderr, nt.createStandardStreams()
                    },
                    quit: () => {
                        nt.init.initialized = !1, Mt(0);
                        for (var e = 0; e < nt.streams.length; e++) {
                            var t = nt.streams[e];
                            t && nt.close(t)
                        }
                    },
                    getMode: (e, t) => {
                        var n = 0;
                        return e && (n |= 365), t && (n |= 146), n
                    },
                    findObject: (e, t) => {
                        var n = nt.analyzePath(e, t);
                        return n.exists ? n.object : null
                    },
                    analyzePath: (e, t) => {
                        try {
                            e = (s = nt.lookupPath(e, {
                                follow: !t
                            })).path
                        } catch (e) {}
                        var n = {
                            isRoot: !1,
                            exists: !1,
                            error: 0,
                            name: null,
                            path: null,
                            object: null,
                            parentExists: !1,
                            parentPath: null,
                            parentObject: null
                        };
                        try {
                            var s = nt.lookupPath(e, {
                                parent: !0
                            });
                            n.parentExists = !0, n.parentPath = s.path, n.parentObject = s.node, n.name = Xe.basename(e), s = nt.lookupPath(e, {
                                follow: !t
                            }), n.exists = !0, n.path = s.path, n.object = s.node, n.name = s.node.name, n.isRoot = "/" === s.path
                        } catch (e) {
                            n.error = e.errno
                        }
                        return n
                    },
                    createPath: (e, t, n, s) => {
                        e = "string" == typeof e ? e : nt.getPath(e);
                        for (var i = t.split("/").reverse(); i.length;) {
                            var r = i.pop();
                            if (r) {
                                var o = Xe.join2(e, r);
                                try {
                                    nt.mkdir(o)
                                } catch (e) {}
                                e = o
                            }
                        }
                        return o
                    },
                    createFile: (e, t, n, s, i) => {
                        var r = Xe.join2("string" == typeof e ? e : nt.getPath(e), t),
                            o = nt.getMode(s, i);
                        return nt.create(r, o)
                    },
                    createDataFile: (e, t, n, s, i, r) => {
                        var o = t;
                        e && (e = "string" == typeof e ? e : nt.getPath(e), o = t ? Xe.join2(e, t) : e);
                        var _ = nt.getMode(s, i),
                            c = nt.create(o, _);
                        if (n) {
                            if ("string" == typeof n) {
                                for (var a = new Array(n.length), d = 0, g = n.length; d < g; ++d) a[d] = n.charCodeAt(d);
                                n = a
                            }
                            nt.chmod(c, 146 | _);
                            var h = nt.open(c, 577);
                            nt.write(h, n, 0, n.length, 0, r), nt.close(h), nt.chmod(c, _)
                        }
                        return c
                    },
                    createDevice: (e, t, n, s) => {
                        var i = Xe.join2("string" == typeof e ? e : nt.getPath(e), t),
                            r = nt.getMode(!!n, !!s);
                        nt.createDevice.major || (nt.createDevice.major = 64);
                        var o = nt.makedev(nt.createDevice.major++, 0);
                        return nt.registerDevice(o, {
                            open: e => {
                                e.seekable = !1
                            },
                            close: e => {
                                s && s.buffer && s.buffer.length && s(10)
                            },
                            read: (e, t, s, i, r) => {
                                for (var o = 0, _ = 0; _ < i; _++) {
                                    var c;
                                    try {
                                        c = n()
                                    } catch (e) {
                                        throw new nt.ErrnoError(29)
                                    }
                                    if (void 0 === c && 0 === o) throw new nt.ErrnoError(6);
                                    if (null == c) break;
                                    o++, t[s + _] = c
                                }
                                return o && (e.node.timestamp = Date.now()), o
                            },
                            write: (e, t, n, i, r) => {
                                for (var o = 0; o < i; o++) try {
                                    s(t[n + o])
                                } catch (e) {
                                    throw new nt.ErrnoError(29)
                                }
                                return i && (e.node.timestamp = Date.now()), o
                            }
                        }), nt.mkdev(i, r, o)
                    },
                    forceLoadFile: e => {
                        if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                        if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                        if (!u) throw new Error("Cannot load without read() or XMLHttpRequest.");
                        try {
                            e.contents = Ut(u(e.url), !0), e.usedBytes = e.contents.length
                        } catch (e) {
                            throw new nt.ErrnoError(29)
                        }
                    },
                    createLazyFile: (e, t, n, s, i) => {
                        function r() {
                            this.lengthKnown = !1, this.chunks = []
                        }
                        if (r.prototype.get = function(e) {
                                if (!(e > this.length - 1 || e < 0)) {
                                    var t = e % this.chunkSize,
                                        n = e / this.chunkSize | 0;
                                    return this.getter(n)[t]
                                }
                            }, r.prototype.setDataGetter = function(e) {
                                this.getter = e
                            }, r.prototype.cacheLength = function() {
                                var e = new XMLHttpRequest;
                                if (e.open("HEAD", n, !1), e.send(null), !(e.status >= 200 && e.status < 300 || 304 === e.status)) throw new Error("Couldn't load " + n + ". Status: " + e.status);
                                var t, s = Number(e.getResponseHeader("Content-length")),
                                    i = (t = e.getResponseHeader("Accept-Ranges")) && "bytes" === t,
                                    r = (t = e.getResponseHeader("Content-Encoding")) && "gzip" === t,
                                    o = 1048576;
                                i || (o = s);
                                var _ = this;
                                _.setDataGetter((e => {
                                    var t = e * o,
                                        i = (e + 1) * o - 1;
                                    if (i = Math.min(i, s - 1), void 0 === _.chunks[e] && (_.chunks[e] = ((e, t) => {
                                            if (e > t) throw new Error("invalid range (" + e + ", " + t + ") or no bytes requested!");
                                            if (t > s - 1) throw new Error("only " + s + " bytes available! programmer error!");
                                            var i = new XMLHttpRequest;
                                            if (i.open("GET", n, !1), s !== o && i.setRequestHeader("Range", "bytes=" + e + "-" + t), i.responseType = "arraybuffer", i.overrideMimeType && i.overrideMimeType("text/plain; charset=x-user-defined"), i.send(null), !(i.status >= 200 && i.status < 300 || 304 === i.status)) throw new Error("Couldn't load " + n + ". Status: " + i.status);
                                            return void 0 !== i.response ? new Uint8Array(i.response || []) : Ut(i.responseText || "", !0)
                                        })(t, i)), void 0 === _.chunks[e]) throw new Error("doXHR failed!");
                                    return _.chunks[e]
                                })), !r && s || (o = s = 1, s = this.getter(0).length, o = s, v("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = s, this._chunkSize = o, this.lengthKnown = !0
                            }, "undefined" != typeof XMLHttpRequest) {
                            if (!f) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                            var o = new r;
                            Object.defineProperties(o, {
                                length: {
                                    get: function() {
                                        return this.lengthKnown || this.cacheLength(), this._length
                                    }
                                },
                                chunkSize: {
                                    get: function() {
                                        return this.lengthKnown || this.cacheLength(), this._chunkSize
                                    }
                                }
                            });
                            var _ = {
                                isDevice: !1,
                                contents: o
                            }
                        } else _ = {
                            isDevice: !1,
                            url: n
                        };
                        var c = nt.createFile(e, t, _, s, i);
                        _.contents ? c.contents = _.contents : _.url && (c.contents = null, c.url = _.url), Object.defineProperties(c, {
                            usedBytes: {
                                get: function() {
                                    return this.contents.length
                                }
                            }
                        });
                        var a = {};

                        function d(e, t, n, s, i) {
                            var r = e.node.contents;
                            if (i >= r.length) return 0;
                            var o = Math.min(r.length - i, s);
                            if (C(o >= 0), r.slice)
                                for (var _ = 0; _ < o; _++) t[n + _] = r[i + _];
                            else
                                for (_ = 0; _ < o; _++) t[n + _] = r.get(i + _);
                            return o
                        }
                        return Object.keys(c.stream_ops).forEach((e => {
                            var t = c.stream_ops[e];
                            a[e] = function() {
                                return nt.forceLoadFile(c), t.apply(null, arguments)
                            }
                        })), a.read = (e, t, n, s, i) => (nt.forceLoadFile(c), d(e, t, n, s, i)), a.mmap = (e, t, n, s, i) => {
                            nt.forceLoadFile(c);
                            var r = Je();
                            if (!r) throw new nt.ErrnoError(48);
                            return d(e, W, r, t, n), {
                                ptr: r,
                                allocated: !0
                            }
                        }, c.stream_ops = a, c
                    },
                    createPreloadedFile: (e, t, n, s, i, r, o, _, c, a) => {
                        var d = t ? Ke.resolve(Xe.join2(e, t)) : e,
                            g = je("cp " + d);

                        function h(n) {
                            function h(n) {
                                a && a(), _ || nt.createDataFile(e, t, n, s, i, c), r && r(), ke(g)
                            }
                            Browser.handledByPreloadPlugin(n, d, h, (() => {
                                o && o(), ke(g)
                            })) || h(n)
                        }
                        Oe(g), "string" == typeof n ? function(e, t, n, s) {
                            var i = je("al " + e);
                            p(e, (function(t) {
                                C(t, 'Loading data file "' + e + '" failed (no arrayBuffer).'), h(new Uint8Array(t)), i && ke(i)
                            }), (function(t) {
                                if (!n) throw 'Loading data file "' + e + '" failed.';
                                n()
                            })), i && Oe(i)
                        }(n, 0, o) : h(n)
                    },
                    indexedDB: () => window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
                    DB_NAME: () => "EM_FS_" + window.location.pathname,
                    DB_VERSION: 20,
                    DB_STORE_NAME: "FILE_DATA",
                    saveFilesToDB: (e, t, n) => {
                        t = t || (() => {}), n = n || (() => {});
                        var s = nt.indexedDB();
                        try {
                            var i = s.open(nt.DB_NAME(), nt.DB_VERSION)
                        } catch (e) {
                            return n(e)
                        }
                        i.onupgradeneeded = () => {
                            v("creating db"), i.result.createObjectStore(nt.DB_STORE_NAME)
                        }, i.onsuccess = () => {
                            var s = i.result.transaction([nt.DB_STORE_NAME], "readwrite"),
                                r = s.objectStore(nt.DB_STORE_NAME),
                                o = 0,
                                _ = 0,
                                c = e.length;

                            function a() {
                                0 == _ ? t() : n()
                            }
                            e.forEach((e => {
                                var t = r.put(nt.analyzePath(e).object.contents, e);
                                t.onsuccess = () => {
                                    ++o + _ == c && a()
                                }, t.onerror = () => {
                                    _++, o + _ == c && a()
                                }
                            })), s.onerror = n
                        }, i.onerror = n
                    },
                    loadFilesFromDB: (e, t, n) => {
                        t = t || (() => {}), n = n || (() => {});
                        var s = nt.indexedDB();
                        try {
                            var i = s.open(nt.DB_NAME(), nt.DB_VERSION)
                        } catch (e) {
                            return n(e)
                        }
                        i.onupgradeneeded = n, i.onsuccess = () => {
                            var s = i.result;
                            try {
                                var r = s.transaction([nt.DB_STORE_NAME], "readonly")
                            } catch (e) {
                                return void n(e)
                            }
                            var o = r.objectStore(nt.DB_STORE_NAME),
                                _ = 0,
                                c = 0,
                                a = e.length;

                            function d() {
                                0 == c ? t() : n()
                            }
                            e.forEach((e => {
                                var t = o.get(e);
                                t.onsuccess = () => {
                                    nt.analyzePath(e).exists && nt.unlink(e), nt.createDataFile(Xe.dirname(e), Xe.basename(e), t.result, !0, !0, !0), ++_ + c == a && d()
                                }, t.onerror = () => {
                                    c++, _ + c == a && d()
                                }
                            })), r.onerror = n
                        }, i.onerror = n
                    },
                    absolutePath: () => {
                        Pe("FS.absolutePath has been removed; use PATH_FS.resolve instead")
                    },
                    createFolder: () => {
                        Pe("FS.createFolder has been removed; use FS.mkdir instead")
                    },
                    createLink: () => {
                        Pe("FS.createLink has been removed; use FS.symlink instead")
                    },
                    joinPath: () => {
                        Pe("FS.joinPath has been removed; use PATH.join instead")
                    },
                    mmapAlloc: () => {
                        Pe("FS.mmapAlloc has been replaced by the top level function mmapAlloc")
                    },
                    standardizePath: () => {
                        Pe("FS.standardizePath has been removed; use PATH.normalize instead")
                    }
                },
                st = {
                    DEFAULT_POLLMASK: 5,
                    calculateAt: function(e, t, n) {
                        if (Xe.isAbs(t)) return t;
                        var s;
                        if (-100 === e) s = nt.cwd();
                        else {
                            var i = nt.getStream(e);
                            if (!i) throw new nt.ErrnoError(8);
                            s = i.path
                        }
                        if (0 == t.length) {
                            if (!n) throw new nt.ErrnoError(44);
                            return s
                        }
                        return Xe.join2(s, t)
                    },
                    doStat: function(e, t, n) {
                        try {
                            var s = e(t)
                        } catch (e) {
                            if (e && e.node && Xe.normalize(t) !== Xe.normalize(nt.getPath(e.node))) return -54;
                            throw e
                        }
                        return V[n >> 2] = s.dev, V[n + 4 >> 2] = 0, V[n + 8 >> 2] = s.ino, V[n + 12 >> 2] = s.mode, V[n + 16 >> 2] = s.nlink, V[n + 20 >> 2] = s.uid, V[n + 24 >> 2] = s.gid, V[n + 28 >> 2] = s.rdev, V[n + 32 >> 2] = 0, K[n + 40 >> 3] = BigInt(s.size), V[n + 48 >> 2] = 4096, V[n + 52 >> 2] = s.blocks, V[n + 56 >> 2] = s.atime.getTime() / 1e3 | 0, V[n + 60 >> 2] = 0, V[n + 64 >> 2] = s.mtime.getTime() / 1e3 | 0, V[n + 68 >> 2] = 0, V[n + 72 >> 2] = s.ctime.getTime() / 1e3 | 0, V[n + 76 >> 2] = 0, K[n + 80 >> 3] = BigInt(s.ino), 0
                    },
                    doMsync: function(e, t, n, s, i) {
                        var r = H.slice(e, e + n);
                        nt.msync(t, r, i, n, s)
                    },
                    varargs: void 0,
                    get: function() {
                        return C(null != st.varargs), st.varargs += 4, V[st.varargs - 4 >> 2]
                    },
                    getStr: function(e) {
                        return ee(e)
                    },
                    getStreamFromFD: function(e) {
                        var t = nt.getStream(e);
                        if (!t) throw new nt.ErrnoError(8);
                        return t
                    }
                };

            function it(e, t, n) {
                if (O) return dt(3, 1, e, t, n);
                st.varargs = n;
                try {
                    var s = st.getStreamFromFD(e);
                    switch (t) {
                        case 0:
                            return (i = st.get()) < 0 ? -28 : nt.createStream(s, i).fd;
                        case 1:
                        case 2:
                        case 6:
                        case 7:
                            return 0;
                        case 3:
                            return s.flags;
                        case 4:
                            var i = st.get();
                            return s.flags |= i, 0;
                        case 5:
                            return i = st.get(), G[i + 0 >> 1] = 2, 0;
                        case 16:
                        case 8:
                        default:
                            return -28;
                        case 9:
                            return 28, V[Lt() >> 2] = 28, -1
                    }
                } catch (e) {
                    if (void 0 === nt || !(e instanceof nt.ErrnoError)) throw e;
                    return -e.errno
                }
            }

            function rt(e, t, n) {
                if (O) return dt(4, 1, e, t, n);
                st.varargs = n;
                try {
                    var s = st.getStreamFromFD(e);
                    switch (t) {
                        case 21509:
                        case 21505:
                        case 21510:
                        case 21511:
                        case 21512:
                        case 21506:
                        case 21507:
                        case 21508:
                        case 21523:
                        case 21524:
                            return s.tty ? 0 : -59;
                        case 21519:
                            if (!s.tty) return -59;
                            var i = st.get();
                            return V[i >> 2] = 0, 0;
                        case 21520:
                            return s.tty ? -28 : -59;
                        case 21531:
                            return i = st.get(), nt.ioctl(s, t, i);
                        default:
                            Pe("bad ioctl syscall " + t)
                    }
                } catch (e) {
                    if (void 0 === nt || !(e instanceof nt.ErrnoError)) throw e;
                    return -e.errno
                }
            }

            function ot(e, t, n, s) {
                if (O) return dt(5, 1, e, t, n, s);
                st.varargs = s;
                try {
                    t = st.getStr(t), t = st.calculateAt(e, t);
                    var i = s ? st.get() : 0;
                    return nt.open(t, n, i).fd
                } catch (e) {
                    if (void 0 === nt || !(e instanceof nt.ErrnoError)) throw e;
                    return -e.errno
                }
            }

            function _t(e) {
                Atomics.store(V, e >> 2, 1), At() && zt(e), Atomics.compareExchange(V, e >> 2, 1, 0)
            }
            i.executeNotifiedProxyingQueue = _t;
            var ct, at = [];

            function dt(e, t) {
                var n = arguments.length - 2,
                    s = arguments;
                if (n > 19) throw "emscripten_proxy_to_main_thread_js: Too many arguments " + n + " to proxied function idx=" + e + ", maximum supported is 19!";
                return xe((function() {
                    for (var i = 2 * n, r = Ht(8 * i), o = r >> 3, _ = 0; _ < n; _++) {
                        var c = s[2 + _];
                        "bigint" == typeof c ? (K[o + 2 * _] = 1n, K[o + 2 * _ + 1] = c) : (K[o + 2 * _] = 0n, Q[o + 2 * _ + 1] = c)
                    }
                    return xt(e, i, r, t)
                }))
            }
            ct = l ? () => {
                var e = process.hrtime();
                return 1e3 * e[0] + e[1] / 1e6
            } : O ? () => performance.now() - i.__performance_now_clock_drift : () => performance.now();
            var gt = [],
                ht = {};

            function ft() {
                if (!ft.strings) {
                    var e = {
                        USER: "web_user",
                        LOGNAME: "web_user",
                        PATH: "/",
                        PWD: "/",
                        HOME: "/home/web_user",
                        LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                        _: d || "./this.program"
                    };
                    for (var t in ht) void 0 === ht[t] ? delete e[t] : e[t] = ht[t];
                    var n = [];
                    for (var t in e) n.push(t + "=" + e[t]);
                    ft.strings = n
                }
                return ft.strings
            }

            function lt(e, t) {
                if (O) return dt(6, 1, e, t);
                var n = 0;
                return ft().forEach((function(s, i) {
                    var r = t + n;
                    X[e + 4 * i >> 2] = r,
                        function(e, t, n) {
                            for (var s = 0; s < e.length; ++s) C(e.charCodeAt(s) === (255 & e.charCodeAt(s))), W[t++ >> 0] = e.charCodeAt(s);
                            n || (W[t >> 0] = 0)
                        }(s, r), n += s.length + 1
                })), 0
            }

            function bt(e, t) {
                if (O) return dt(7, 1, e, t);
                var n = ft();
                X[e >> 2] = n.length;
                var s = 0;
                return n.forEach((function(e) {
                    s += e.length + 1
                })), X[t >> 2] = s, 0
            }

            function ut(e) {
                if (O) return dt(8, 1, e);
                try {
                    var t = st.getStreamFromFD(e);
                    return nt.close(t), 0
                } catch (e) {
                    if (void 0 === nt || !(e instanceof nt.ErrnoError)) throw e;
                    return e.errno
                }
            }

            function pt(e, t, n, s) {
                if (O) return dt(9, 1, e, t, n, s);
                try {
                    var i = function(e, t, n, s) {
                        for (var i = 0, r = 0; r < n; r++) {
                            var o = X[t >> 2],
                                _ = X[t + 4 >> 2];
                            t += 8;
                            var c = nt.read(e, W, o, _, undefined);
                            if (c < 0) return -1;
                            if (i += c, c < _) break
                        }
                        return i
                    }(st.getStreamFromFD(e), t, n);
                    return V[s >> 2] = i, 0
                } catch (e) {
                    if (void 0 === nt || !(e instanceof nt.ErrnoError)) throw e;
                    return e.errno
                }
            }

            function Zt(e, t, n, s) {
                if (O) return dt(10, 1, e, t, n, s);
                try {
                    if (t = (r = t) < -9007199254740992 || r > 9007199254740992 ? NaN : Number(r), isNaN(t)) return 61;
                    var i = st.getStreamFromFD(e);
                    return nt.llseek(i, t, n), K[s >> 3] = BigInt(i.position), i.getdents && 0 === t && 0 === n && (i.getdents = null), 0
                } catch (e) {
                    if (void 0 === nt || !(e instanceof nt.ErrnoError)) throw e;
                    return e.errno
                }
                var r
            }

            function mt(e, t, n, s) {
                if (O) return dt(11, 1, e, t, n, s);
                try {
                    var i = function(e, t, n, s) {
                        for (var i = 0, r = 0; r < n; r++) {
                            var o = X[t >> 2],
                                _ = X[t + 4 >> 2];
                            t += 8;
                            var c = nt.write(e, W, o, _, undefined);
                            if (c < 0) return -1;
                            i += c
                        }
                        return i
                    }(st.getStreamFromFD(e), t, n);
                    return X[s >> 2] = i, 0
                } catch (e) {
                    if (void 0 === nt || !(e instanceof nt.ErrnoError)) throw e;
                    return e.errno
                }
            }

            function yt(e) {
                if (O) return dt(12, 1, e);
                Qt(e)
            }

            function jt(e) {
                return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
            }
            var Ot = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                kt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            Le.init();
            var Pt = function(e, t, n, s) {
                e || (e = this), this.parent = e, this.mount = e.mount, this.mounted = null, this.id = nt.nextInode++, this.name = t, this.mode = n, this.node_ops = {}, this.stream_ops = {}, this.rdev = s
            };
            Object.defineProperties(Pt.prototype, {
                read: {
                    get: function() {
                        return 365 == (365 & this.mode)
                    },
                    set: function(e) {
                        e ? this.mode |= 365 : this.mode &= -366
                    }
                },
                write: {
                    get: function() {
                        return 146 == (146 & this.mode)
                    },
                    set: function(e) {
                        e ? this.mode |= 146 : this.mode &= -147
                    }
                },
                isFolder: {
                    get: function() {
                        return nt.isDir(this.mode)
                    }
                },
                isDevice: {
                    get: function() {
                        return nt.isChrdev(this.mode)
                    }
                }
            }), nt.FSNode = Pt, nt.staticInit(), tt = {
                EPERM: 63,
                ENOENT: 44,
                ESRCH: 71,
                EINTR: 27,
                EIO: 29,
                ENXIO: 60,
                E2BIG: 1,
                ENOEXEC: 45,
                EBADF: 8,
                ECHILD: 12,
                EAGAIN: 6,
                EWOULDBLOCK: 6,
                ENOMEM: 48,
                EACCES: 2,
                EFAULT: 21,
                ENOTBLK: 105,
                EBUSY: 10,
                EEXIST: 20,
                EXDEV: 75,
                ENODEV: 43,
                ENOTDIR: 54,
                EISDIR: 31,
                EINVAL: 28,
                ENFILE: 41,
                EMFILE: 33,
                ENOTTY: 59,
                ETXTBSY: 74,
                EFBIG: 22,
                ENOSPC: 51,
                ESPIPE: 70,
                EROFS: 69,
                EMLINK: 34,
                EPIPE: 64,
                EDOM: 18,
                ERANGE: 68,
                ENOMSG: 49,
                EIDRM: 24,
                ECHRNG: 106,
                EL2NSYNC: 156,
                EL3HLT: 107,
                EL3RST: 108,
                ELNRNG: 109,
                EUNATCH: 110,
                ENOCSI: 111,
                EL2HLT: 112,
                EDEADLK: 16,
                ENOLCK: 46,
                EBADE: 113,
                EBADR: 114,
                EXFULL: 115,
                ENOANO: 104,
                EBADRQC: 103,
                EBADSLT: 102,
                EDEADLOCK: 16,
                EBFONT: 101,
                ENOSTR: 100,
                ENODATA: 116,
                ETIME: 117,
                ENOSR: 118,
                ENONET: 119,
                ENOPKG: 120,
                EREMOTE: 121,
                ENOLINK: 47,
                EADV: 122,
                ESRMNT: 123,
                ECOMM: 124,
                EPROTO: 65,
                EMULTIHOP: 36,
                EDOTDOT: 125,
                EBADMSG: 9,
                ENOTUNIQ: 126,
                EBADFD: 127,
                EREMCHG: 128,
                ELIBACC: 129,
                ELIBBAD: 130,
                ELIBSCN: 131,
                ELIBMAX: 132,
                ELIBEXEC: 133,
                ENOSYS: 52,
                ENOTEMPTY: 55,
                ENAMETOOLONG: 37,
                ELOOP: 32,
                EOPNOTSUPP: 138,
                EPFNOSUPPORT: 139,
                ECONNRESET: 15,
                ENOBUFS: 42,
                EAFNOSUPPORT: 5,
                EPROTOTYPE: 67,
                ENOTSOCK: 57,
                ENOPROTOOPT: 50,
                ESHUTDOWN: 140,
                ECONNREFUSED: 14,
                EADDRINUSE: 3,
                ECONNABORTED: 13,
                ENETUNREACH: 40,
                ENETDOWN: 38,
                ETIMEDOUT: 73,
                EHOSTDOWN: 142,
                EHOSTUNREACH: 23,
                EINPROGRESS: 26,
                EALREADY: 7,
                EDESTADDRREQ: 17,
                EMSGSIZE: 35,
                EPROTONOSUPPORT: 66,
                ESOCKTNOSUPPORT: 137,
                EADDRNOTAVAIL: 4,
                ENETRESET: 39,
                EISCONN: 30,
                ENOTCONN: 53,
                ETOOMANYREFS: 141,
                EUSERS: 136,
                EDQUOT: 19,
                ESTALE: 72,
                ENOTSUP: 138,
                ENOMEDIUM: 148,
                EILSEQ: 25,
                EOVERFLOW: 61,
                ECANCELED: 11,
                ENOTRECOVERABLE: 56,
                EOWNERDEAD: 62,
                ESTRPIPE: 135
            };
            var wt = [null, Se, Ge, it, rt, ot, lt, bt, ut, pt, Zt, mt, yt];

            function Ut(e, t, n) {
                var s = n > 0 ? n : se(e) + 1,
                    i = new Array(s),
                    r = te(e, i, 0, i.length);
                return t && (i.length = r), i
            }
            var Dt, Et, vt = {
                    __assert_fail: function(e, t, n, s) {
                        Pe("Assertion failed: " + ee(e) + ", at: " + [t ? ee(t) : "unknown filename", n, s ? ee(s) : "unknown function"])
                    },
                    __call_sighandler: function(e, t) {
                        Ne(e)(t)
                    },
                    __cxa_allocate_exception: function(e) {
                        return Rt(e + 24) + 24
                    },
                    __cxa_begin_catch: function(e) {
                        var t = new We(e);
                        return t.get_caught() || (t.set_caught(!0), Ce--), t.set_rethrown(!1), Fe.push(t),
                            function(e) {
                                e.add_ref()
                            }(t), t.get_exception_ptr()
                    },
                    __cxa_end_catch: function() {
                        Nt(0), C(Fe.length > 0),
                            function(e) {
                                if (e.release_ref() && !e.get_rethrown()) {
                                    var t = e.get_destructor();
                                    t && Ne(t)(e.excPtr), He(e.excPtr)
                                }
                            }(Fe.pop()), Be = 0
                    },
                    __cxa_find_matching_catch_2: function() {
                        var e = Be;
                        if (!e) return q(0), 0;
                        var t = new We(e);
                        t.set_adjusted_ptr(e);
                        var n = t.get_type();
                        if (!n) return q(0), e;
                        for (var s = Array.prototype.slice.call(arguments), i = 0; i < s.length; i++) {
                            var r = s[i];
                            if (0 === r || r === n) break;
                            var o = t.ptr + 16;
                            if (Gt(r, n, o)) return q(r), e
                        }
                        return q(n), e
                    },
                    __cxa_find_matching_catch_3: function() {
                        var e = Be;
                        if (!e) return q(0), 0;
                        var t = new We(e);
                        t.set_adjusted_ptr(e);
                        var n = t.get_type();
                        if (!n) return q(0), e;
                        for (var s = Array.prototype.slice.call(arguments), i = 0; i < s.length; i++) {
                            var r = s[i];
                            if (0 === r || r === n) break;
                            var o = t.ptr + 16;
                            if (Gt(r, n, o)) return q(r), e
                        }
                        return q(n), e
                    },
                    __cxa_find_matching_catch_4: function() {
                        var e = Be;
                        if (!e) return q(0), 0;
                        var t = new We(e);
                        t.set_adjusted_ptr(e);
                        var n = t.get_type();
                        if (!n) return q(0), e;
                        for (var s = Array.prototype.slice.call(arguments), i = 0; i < s.length; i++) {
                            var r = s[i];
                            if (0 === r || r === n) break;
                            var o = t.ptr + 16;
                            if (Gt(r, n, o)) return q(r), e
                        }
                        return q(n), e
                    },
                    __cxa_find_matching_catch_7: function() {
                        var e = Be;
                        if (!e) return q(0), 0;
                        var t = new We(e);
                        t.set_adjusted_ptr(e);
                        var n = t.get_type();
                        if (!n) return q(0), e;
                        for (var s = Array.prototype.slice.call(arguments), i = 0; i < s.length; i++) {
                            var r = s[i];
                            if (0 === r || r === n) break;
                            var o = t.ptr + 16;
                            if (Gt(r, n, o)) return q(r), e
                        }
                        return q(n), e
                    },
                    __cxa_find_matching_catch_8: function() {
                        var e = Be;
                        if (!e) return q(0), 0;
                        var t = new We(e);
                        t.set_adjusted_ptr(e);
                        var n = t.get_type();
                        if (!n) return q(0), e;
                        for (var s = Array.prototype.slice.call(arguments), i = 0; i < s.length; i++) {
                            var r = s[i];
                            if (0 === r || r === n) break;
                            var o = t.ptr + 16;
                            if (Gt(r, n, o)) return q(r), e
                        }
                        return q(n), e
                    },
                    __cxa_free_exception: He,
                    __cxa_rethrow: function() {
                        var e = Fe.pop();
                        e || Pe("no exception to throw");
                        var t = e.excPtr;
                        throw e.get_rethrown() || (Fe.push(e), e.set_rethrown(!0), e.set_caught(!1), Ce++), Be = t, t
                    },
                    __cxa_throw: function(e, t, n) {
                        throw new We(e).init(t, n), Be = e, Ce++, e
                    },
                    __cxa_uncaught_exceptions: function() {
                        return Ce
                    },
                    __emscripten_init_main_thread_js: function(e) {
                        Yt(e, !f, 1, !h), Le.threadInitTLS()
                    },
                    __emscripten_thread_cleanup: function(e) {
                        O ? postMessage({
                            cmd: "cleanupThread",
                            thread: e
                        }) : Me(e)
                    },
                    __pthread_create_js: Ve,
                    __resumeException: function(e) {
                        throw Be || (Be = e), e
                    },
                    __syscall_fcntl64: it,
                    __syscall_ioctl: rt,
                    __syscall_openat: ot,
                    _emscripten_date_now: function() {
                        return Date.now()
                    },
                    _emscripten_default_pthread_stack_size: function() {
                        return 2097152
                    },
                    _emscripten_get_now_is_monotonic: function() {
                        return !0
                    },
                    _emscripten_notify_task_queue: function(e, t, n, s) {
                        if (e == t) setTimeout((() => _t(s)));
                        else if (O) postMessage({
                            targetThread: e,
                            cmd: "processProxyingQueue",
                            queue: s
                        });
                        else {
                            var i = Le.pthreads[e],
                                r = i && i.worker;
                            if (!r) return void A("Cannot send message to thread with ID " + e + ", unknown thread ID!");
                            r.postMessage({
                                cmd: "processProxyingQueue",
                                queue: s
                            })
                        }
                        return 1
                    },
                    _emscripten_set_offscreencanvas_size: function(e, t, n) {
                        return A("emscripten_set_offscreencanvas_size: Build with -sOFFSCREENCANVAS_SUPPORT=1 to enable transferring canvases to pthreads."), -1
                    },
                    abort: function() {
                        Pe("native code called abort()")
                    },
                    emscripten_asm_const_async_on_main_thread: function(e, t, n) {
                        return function(e, t, n, s) {
                            var i = function(e, t) {
                                var n;
                                for (C(Array.isArray(at)), C(t % 16 == 0), at.length = 0, t >>= 2; n = H[e++];) {
                                    var s = String.fromCharCode(n),
                                        i = ["d", "f", "i"];
                                    i.push("j"), C(i.includes(s), "Invalid character " + n + '("' + s + '") in readAsmConstArgs! Use only [' + i + '], and do not specify "v" for void return argument.'), t += 105 != n & t, at.push(105 == n ? V[t] : (106 == n ? K : Q)[t++ >> 1]), ++t
                                }
                                return at
                            }(t, n);
                            return O ? dt.apply(null, [-1 - e, s].concat(i)) : (Ae.hasOwnProperty(e) || Pe("No EM_ASM constant found at address " + e), Ae[e].apply(null, i))
                        }(e, t, n, 0)
                    },
                    emscripten_check_blocking_allowed: function() {
                        l || f || M("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")
                    },
                    emscripten_get_now: ct,
                    emscripten_memcpy_big: function(e, t, n) {
                        H.copyWithin(e, t, t + n)
                    },
                    emscripten_receive_on_main_thread_js: function(e, t, n) {
                        t /= 2, gt.length = t;
                        for (var s = n >> 3, i = 0; i < t; i++) K[s + 2 * i] ? gt[i] = K[s + 2 * i + 1] : gt[i] = Q[s + 2 * i + 1];
                        var r = e < 0 ? Ae[-e - 1] : wt[e];
                        return C(r.length == t, "Call args mismatch in emscripten_receive_on_main_thread_js"), r.apply(null, gt)
                    },
                    emscripten_resize_heap: function(e) {
                        H.length,
                            function(e) {
                                Pe("Cannot enlarge memory arrays to size " + e + " bytes (OOM). Either (1) compile with -sINITIAL_MEMORY=X with X higher than the current value " + W.length + ", (2) compile with -sALLOW_MEMORY_GROWTH which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with -sABORTING_MALLOC=0")
                            }(e >>>= 0)
                    },
                    emscripten_unwind_to_js_event_loop: function() {
                        throw "unwind"
                    },
                    environ_get: lt,
                    environ_sizes_get: bt,
                    exit: Re,
                    fd_close: ut,
                    fd_read: pt,
                    fd_seek: Zt,
                    fd_write: mt,
                    getTempRet0: function() {
                        return x
                    },
                    invoke_di: function(e, t) {
                        var n = Bt();
                        try {
                            return Ne(e)(t)
                        } catch (e) {
                            if (Wt(n), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_dii: function(e, t, n) {
                        var s = Bt();
                        try {
                            return Ne(e)(t, n)
                        } catch (e) {
                            if (Wt(s), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_diid: function(e, t, n, s) {
                        var i = Bt();
                        try {
                            return Ne(e)(t, n, s)
                        } catch (e) {
                            if (Wt(i), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_diii: function(e, t, n, s) {
                        var i = Bt();
                        try {
                            return Ne(e)(t, n, s)
                        } catch (e) {
                            if (Wt(i), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_diiid: function(e, t, n, s, i) {
                        var r = Bt();
                        try {
                            return Ne(e)(t, n, s, i)
                        } catch (e) {
                            if (Wt(r), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_diiii: function(e, t, n, s, i) {
                        var r = Bt();
                        try {
                            return Ne(e)(t, n, s, i)
                        } catch (e) {
                            if (Wt(r), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_fii: function(e, t, n) {
                        var s = Bt();
                        try {
                            return Ne(e)(t, n)
                        } catch (e) {
                            if (Wt(s), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_fiii: function(e, t, n, s) {
                        var i = Bt();
                        try {
                            return Ne(e)(t, n, s)
                        } catch (e) {
                            if (Wt(i), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_fiiii: function(e, t, n, s, i) {
                        var r = Bt();
                        try {
                            return Ne(e)(t, n, s, i)
                        } catch (e) {
                            if (Wt(r), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_i: function(e) {
                        var t = Bt();
                        try {
                            return Ne(e)()
                        } catch (e) {
                            if (Wt(t), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_id: function(e, t) {
                        var n = Bt();
                        try {
                            return Ne(e)(t)
                        } catch (e) {
                            if (Wt(n), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_ii: function(e, t) {
                        var n = Bt();
                        try {
                            return Ne(e)(t)
                        } catch (e) {
                            if (Wt(n), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iid: function(e, t, n) {
                        var s = Bt();
                        try {
                            return Ne(e)(t, n)
                        } catch (e) {
                            if (Wt(s), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iii: function(e, t, n) {
                        var s = Bt();
                        try {
                            return Ne(e)(t, n)
                        } catch (e) {
                            if (Wt(s), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iiid: function(e, t, n, s) {
                        var i = Bt();
                        try {
                            return Ne(e)(t, n, s)
                        } catch (e) {
                            if (Wt(i), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iiii: function(e, t, n, s) {
                        var i = Bt();
                        try {
                            return Ne(e)(t, n, s)
                        } catch (e) {
                            if (Wt(i), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iiiii: function(e, t, n, s, i) {
                        var r = Bt();
                        try {
                            return Ne(e)(t, n, s, i)
                        } catch (e) {
                            if (Wt(r), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iiiiid: function(e, t, n, s, i, r) {
                        var o = Bt();
                        try {
                            return Ne(e)(t, n, s, i, r)
                        } catch (e) {
                            if (Wt(o), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iiiiii: function(e, t, n, s, i, r) {
                        var o = Bt();
                        try {
                            return Ne(e)(t, n, s, i, r)
                        } catch (e) {
                            if (Wt(o), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iiiiiii: function(e, t, n, s, i, r, o) {
                        var _ = Bt();
                        try {
                            return Ne(e)(t, n, s, i, r, o)
                        } catch (e) {
                            if (Wt(_), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iiiiiiii: function(e, t, n, s, i, r, o, _) {
                        var c = Bt();
                        try {
                            return Ne(e)(t, n, s, i, r, o, _)
                        } catch (e) {
                            if (Wt(c), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iiiiiiiii: function(e, t, n, s, i, r, o, _, c) {
                        var a = Bt();
                        try {
                            return Ne(e)(t, n, s, i, r, o, _, c)
                        } catch (e) {
                            if (Wt(a), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iiiiiiiiii: function(e, t, n, s, i, r, o, _, c, a) {
                        var d = Bt();
                        try {
                            return Ne(e)(t, n, s, i, r, o, _, c, a)
                        } catch (e) {
                            if (Wt(d), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iiiiiiiiiii: function(e, t, n, s, i, r, o, _, c, a, d) {
                        var g = Bt();
                        try {
                            return Ne(e)(t, n, s, i, r, o, _, c, a, d)
                        } catch (e) {
                            if (Wt(g), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iiiiiiiiiiii: function(e, t, n, s, i, r, o, _, c, a, d, g) {
                        var h = Bt();
                        try {
                            return Ne(e)(t, n, s, i, r, o, _, c, a, d, g)
                        } catch (e) {
                            if (Wt(h), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iiiiiiiiiiiii: function(e, t, n, s, i, r, o, _, c, a, d, g, h) {
                        var f = Bt();
                        try {
                            return Ne(e)(t, n, s, i, r, o, _, c, a, d, g, h)
                        } catch (e) {
                            if (Wt(f), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iiiiiiiiiiiiii: function(e, t, n, s, i, r, o, _, c, a, d, g, h, f) {
                        var l = Bt();
                        try {
                            return Ne(e)(t, n, s, i, r, o, _, c, a, d, g, h, f)
                        } catch (e) {
                            if (Wt(l), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iiiiij: function(e, t, n, s, i, r) {
                        var o = Bt();
                        try {
                            return Ne(e)(t, n, s, i, r)
                        } catch (e) {
                            if (Wt(o), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iiij: function(e, t, n, s) {
                        var i = Bt();
                        try {
                            return Ne(e)(t, n, s)
                        } catch (e) {
                            if (Wt(i), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iij: function(e, t, n) {
                        var s = Bt();
                        try {
                            return Ne(e)(t, n)
                        } catch (e) {
                            if (Wt(s), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iiji: function(e, t, n, s) {
                        var i = Bt();
                        try {
                            return Ne(e)(t, n, s)
                        } catch (e) {
                            if (Wt(i), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_iijii: function(e, t, n, s, i) {
                        var r = Bt();
                        try {
                            return Ne(e)(t, n, s, i)
                        } catch (e) {
                            if (Wt(r), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_j: function(e) {
                        var t = Bt();
                        try {
                            return Ne(e)()
                        } catch (e) {
                            if (Wt(t), e !== e + 0) throw e;
                            return Nt(1, 0), 0n
                        }
                    },
                    invoke_ji: function(e, t) {
                        var n = Bt();
                        try {
                            return Ne(e)(t)
                        } catch (e) {
                            if (Wt(n), e !== e + 0) throw e;
                            return Nt(1, 0), 0n
                        }
                    },
                    invoke_jii: function(e, t, n) {
                        var s = Bt();
                        try {
                            return Ne(e)(t, n)
                        } catch (e) {
                            if (Wt(s), e !== e + 0) throw e;
                            return Nt(1, 0), 0n
                        }
                    },
                    invoke_jiii: function(e, t, n, s) {
                        var i = Bt();
                        try {
                            return Ne(e)(t, n, s)
                        } catch (e) {
                            if (Wt(i), e !== e + 0) throw e;
                            return Nt(1, 0), 0n
                        }
                    },
                    invoke_jiiii: function(e, t, n, s, i) {
                        var r = Bt();
                        try {
                            return Ne(e)(t, n, s, i)
                        } catch (e) {
                            if (Wt(r), e !== e + 0) throw e;
                            return Nt(1, 0), 0n
                        }
                    },
                    invoke_jiij: function(e, t, n, s) {
                        var i = Bt();
                        try {
                            return Ne(e)(t, n, s)
                        } catch (e) {
                            if (Wt(i), e !== e + 0) throw e;
                            return Nt(1, 0), 0n
                        }
                    },
                    invoke_v: function(e) {
                        var t = Bt();
                        try {
                            Ne(e)()
                        } catch (e) {
                            if (Wt(t), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_vi: function(e, t) {
                        var n = Bt();
                        try {
                            Ne(e)(t)
                        } catch (e) {
                            if (Wt(n), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_vid: function(e, t, n) {
                        var s = Bt();
                        try {
                            Ne(e)(t, n)
                        } catch (e) {
                            if (Wt(s), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_vidi: function(e, t, n, s) {
                        var i = Bt();
                        try {
                            Ne(e)(t, n, s)
                        } catch (e) {
                            if (Wt(i), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_vifi: function(e, t, n, s) {
                        var i = Bt();
                        try {
                            Ne(e)(t, n, s)
                        } catch (e) {
                            if (Wt(i), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_vii: function(e, t, n) {
                        var s = Bt();
                        try {
                            Ne(e)(t, n)
                        } catch (e) {
                            if (Wt(s), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viid: function(e, t, n, s) {
                        var i = Bt();
                        try {
                            Ne(e)(t, n, s)
                        } catch (e) {
                            if (Wt(i), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viidi: function(e, t, n, s, i) {
                        var r = Bt();
                        try {
                            Ne(e)(t, n, s, i)
                        } catch (e) {
                            if (Wt(r), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viii: function(e, t, n, s) {
                        var i = Bt();
                        try {
                            Ne(e)(t, n, s)
                        } catch (e) {
                            if (Wt(i), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viiid: function(e, t, n, s, i) {
                        var r = Bt();
                        try {
                            Ne(e)(t, n, s, i)
                        } catch (e) {
                            if (Wt(r), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viiii: function(e, t, n, s, i) {
                        var r = Bt();
                        try {
                            Ne(e)(t, n, s, i)
                        } catch (e) {
                            if (Wt(r), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viiiid: function(e, t, n, s, i, r) {
                        var o = Bt();
                        try {
                            Ne(e)(t, n, s, i, r)
                        } catch (e) {
                            if (Wt(o), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viiiif: function(e, t, n, s, i, r) {
                        var o = Bt();
                        try {
                            Ne(e)(t, n, s, i, r)
                        } catch (e) {
                            if (Wt(o), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viiiii: function(e, t, n, s, i, r) {
                        var o = Bt();
                        try {
                            Ne(e)(t, n, s, i, r)
                        } catch (e) {
                            if (Wt(o), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viiiiii: function(e, t, n, s, i, r, o) {
                        var _ = Bt();
                        try {
                            Ne(e)(t, n, s, i, r, o)
                        } catch (e) {
                            if (Wt(_), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viiiiiii: function(e, t, n, s, i, r, o, _) {
                        var c = Bt();
                        try {
                            Ne(e)(t, n, s, i, r, o, _)
                        } catch (e) {
                            if (Wt(c), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viiiiiiii: function(e, t, n, s, i, r, o, _, c) {
                        var a = Bt();
                        try {
                            Ne(e)(t, n, s, i, r, o, _, c)
                        } catch (e) {
                            if (Wt(a), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viiiiiiiii: function(e, t, n, s, i, r, o, _, c, a) {
                        var d = Bt();
                        try {
                            Ne(e)(t, n, s, i, r, o, _, c, a)
                        } catch (e) {
                            if (Wt(d), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viiiiiiiiii: function(e, t, n, s, i, r, o, _, c, a, d) {
                        var g = Bt();
                        try {
                            Ne(e)(t, n, s, i, r, o, _, c, a, d)
                        } catch (e) {
                            if (Wt(g), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viiiiiiiiiii: function(e, t, n, s, i, r, o, _, c, a, d, g) {
                        var h = Bt();
                        try {
                            Ne(e)(t, n, s, i, r, o, _, c, a, d, g)
                        } catch (e) {
                            if (Wt(h), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viiiiiiiiiiii: function(e, t, n, s, i, r, o, _, c, a, d, g, h) {
                        var f = Bt();
                        try {
                            Ne(e)(t, n, s, i, r, o, _, c, a, d, g, h)
                        } catch (e) {
                            if (Wt(f), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viiiiiiiiiiiii: function(e, t, n, s, i, r, o, _, c, a, d, g, h, f) {
                        var l = Bt();
                        try {
                            Ne(e)(t, n, s, i, r, o, _, c, a, d, g, h, f)
                        } catch (e) {
                            if (Wt(l), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viiiiiiiiiiiiiii: function(e, t, n, s, i, r, o, _, c, a, d, g, h, f, l, b) {
                        var u = Bt();
                        try {
                            Ne(e)(t, n, s, i, r, o, _, c, a, d, g, h, f, l, b)
                        } catch (e) {
                            if (Wt(u), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viiiiij: function(e, t, n, s, i, r, o) {
                        var _ = Bt();
                        try {
                            Ne(e)(t, n, s, i, r, o)
                        } catch (e) {
                            if (Wt(_), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viiiiiji: function(e, t, n, s, i, r, o, _) {
                        var c = Bt();
                        try {
                            Ne(e)(t, n, s, i, r, o, _)
                        } catch (e) {
                            if (Wt(c), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viiiiijj: function(e, t, n, s, i, r, o, _) {
                        var c = Bt();
                        try {
                            Ne(e)(t, n, s, i, r, o, _)
                        } catch (e) {
                            if (Wt(c), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viij: function(e, t, n, s) {
                        var i = Bt();
                        try {
                            Ne(e)(t, n, s)
                        } catch (e) {
                            if (Wt(i), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viiji: function(e, t, n, s, i) {
                        var r = Bt();
                        try {
                            Ne(e)(t, n, s, i)
                        } catch (e) {
                            if (Wt(r), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viijji: function(e, t, n, s, i, r) {
                        var o = Bt();
                        try {
                            Ne(e)(t, n, s, i, r)
                        } catch (e) {
                            if (Wt(o), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_vij: function(e, t, n) {
                        var s = Bt();
                        try {
                            Ne(e)(t, n)
                        } catch (e) {
                            if (Wt(s), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_viji: function(e, t, n, s) {
                        var i = Bt();
                        try {
                            Ne(e)(t, n, s)
                        } catch (e) {
                            if (Wt(i), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    invoke_vijj: function(e, t, n, s) {
                        var i = Bt();
                        try {
                            Ne(e)(t, n, s)
                        } catch (e) {
                            if (Wt(i), e !== e + 0) throw e;
                            Nt(1, 0)
                        }
                    },
                    llvm_eh_typeid_for: function(e) {
                        return e
                    },
                    memory: z || i.wasmMemory,
                    proc_exit: yt,
                    strftime_l: function(e, t, n, s) {
                        return function(e, t, n, s) {
                            var i = V[s + 40 >> 2],
                                r = {
                                    tm_sec: V[s >> 2],
                                    tm_min: V[s + 4 >> 2],
                                    tm_hour: V[s + 8 >> 2],
                                    tm_mday: V[s + 12 >> 2],
                                    tm_mon: V[s + 16 >> 2],
                                    tm_year: V[s + 20 >> 2],
                                    tm_wday: V[s + 24 >> 2],
                                    tm_yday: V[s + 28 >> 2],
                                    tm_isdst: V[s + 32 >> 2],
                                    tm_gmtoff: V[s + 36 >> 2],
                                    tm_zone: i ? ee(i) : ""
                                },
                                o = ee(n),
                                _ = {
                                    "%c": "%a %b %d %H:%M:%S %Y",
                                    "%D": "%m/%d/%y",
                                    "%F": "%Y-%m-%d",
                                    "%h": "%b",
                                    "%r": "%I:%M:%S %p",
                                    "%R": "%H:%M",
                                    "%T": "%H:%M:%S",
                                    "%x": "%m/%d/%y",
                                    "%X": "%H:%M:%S",
                                    "%Ec": "%c",
                                    "%EC": "%C",
                                    "%Ex": "%m/%d/%y",
                                    "%EX": "%H:%M:%S",
                                    "%Ey": "%y",
                                    "%EY": "%Y",
                                    "%Od": "%d",
                                    "%Oe": "%e",
                                    "%OH": "%H",
                                    "%OI": "%I",
                                    "%Om": "%m",
                                    "%OM": "%M",
                                    "%OS": "%S",
                                    "%Ou": "%u",
                                    "%OU": "%U",
                                    "%OV": "%V",
                                    "%Ow": "%w",
                                    "%OW": "%W",
                                    "%Oy": "%y"
                                };
                            for (var c in _) o = o.replace(new RegExp(c, "g"), _[c]);
                            var a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                d = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                            function g(e, t, n) {
                                for (var s = "number" == typeof e ? e.toString() : e || ""; s.length < t;) s = n[0] + s;
                                return s
                            }

                            function h(e, t) {
                                return g(e, t, "0")
                            }

                            function f(e, t) {
                                function n(e) {
                                    return e < 0 ? -1 : e > 0 ? 1 : 0
                                }
                                var s;
                                return 0 === (s = n(e.getFullYear() - t.getFullYear())) && 0 === (s = n(e.getMonth() - t.getMonth())) && (s = n(e.getDate() - t.getDate())), s
                            }

                            function l(e) {
                                switch (e.getDay()) {
                                    case 0:
                                        return new Date(e.getFullYear() - 1, 11, 29);
                                    case 1:
                                        return e;
                                    case 2:
                                        return new Date(e.getFullYear(), 0, 3);
                                    case 3:
                                        return new Date(e.getFullYear(), 0, 2);
                                    case 4:
                                        return new Date(e.getFullYear(), 0, 1);
                                    case 5:
                                        return new Date(e.getFullYear() - 1, 11, 31);
                                    case 6:
                                        return new Date(e.getFullYear() - 1, 11, 30)
                                }
                            }

                            function b(e) {
                                var t = function(e, t) {
                                        for (var n = new Date(e.getTime()); t > 0;) {
                                            var s = jt(n.getFullYear()),
                                                i = n.getMonth(),
                                                r = (s ? Ot : kt)[i];
                                            if (!(t > r - n.getDate())) return n.setDate(n.getDate() + t), n;
                                            t -= r - n.getDate() + 1, n.setDate(1), i < 11 ? n.setMonth(i + 1) : (n.setMonth(0), n.setFullYear(n.getFullYear() + 1))
                                        }
                                        return n
                                    }(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
                                    n = new Date(t.getFullYear(), 0, 4),
                                    s = new Date(t.getFullYear() + 1, 0, 4),
                                    i = l(n),
                                    r = l(s);
                                return f(i, t) <= 0 ? f(r, t) <= 0 ? t.getFullYear() + 1 : t.getFullYear() : t.getFullYear() - 1
                            }
                            var u = {
                                "%a": function(e) {
                                    return a[e.tm_wday].substring(0, 3)
                                },
                                "%A": function(e) {
                                    return a[e.tm_wday]
                                },
                                "%b": function(e) {
                                    return d[e.tm_mon].substring(0, 3)
                                },
                                "%B": function(e) {
                                    return d[e.tm_mon]
                                },
                                "%C": function(e) {
                                    return h((e.tm_year + 1900) / 100 | 0, 2)
                                },
                                "%d": function(e) {
                                    return h(e.tm_mday, 2)
                                },
                                "%e": function(e) {
                                    return g(e.tm_mday, 2, " ")
                                },
                                "%g": function(e) {
                                    return b(e).toString().substring(2)
                                },
                                "%G": function(e) {
                                    return b(e)
                                },
                                "%H": function(e) {
                                    return h(e.tm_hour, 2)
                                },
                                "%I": function(e) {
                                    var t = e.tm_hour;
                                    return 0 == t ? t = 12 : t > 12 && (t -= 12), h(t, 2)
                                },
                                "%j": function(e) {
                                    return h(e.tm_mday + function(e, t) {
                                        for (var n = 0, s = 0; s <= t; n += e[s++]);
                                        return n
                                    }(jt(e.tm_year + 1900) ? Ot : kt, e.tm_mon - 1), 3)
                                },
                                "%m": function(e) {
                                    return h(e.tm_mon + 1, 2)
                                },
                                "%M": function(e) {
                                    return h(e.tm_min, 2)
                                },
                                "%n": function() {
                                    return "\n"
                                },
                                "%p": function(e) {
                                    return e.tm_hour >= 0 && e.tm_hour < 12 ? "AM" : "PM"
                                },
                                "%S": function(e) {
                                    return h(e.tm_sec, 2)
                                },
                                "%t": function() {
                                    return "\t"
                                },
                                "%u": function(e) {
                                    return e.tm_wday || 7
                                },
                                "%U": function(e) {
                                    var t = e.tm_yday + 7 - e.tm_wday;
                                    return h(Math.floor(t / 7), 2)
                                },
                                "%V": function(e) {
                                    var t = Math.floor((e.tm_yday + 7 - (e.tm_wday + 6) % 7) / 7);
                                    if ((e.tm_wday + 371 - e.tm_yday - 2) % 7 <= 2 && t++, t) {
                                        if (53 == t) {
                                            var n = (e.tm_wday + 371 - e.tm_yday) % 7;
                                            4 == n || 3 == n && jt(e.tm_year) || (t = 1)
                                        }
                                    } else {
                                        t = 52;
                                        var s = (e.tm_wday + 7 - e.tm_yday - 1) % 7;
                                        (4 == s || 5 == s && jt(e.tm_year % 400 - 1)) && t++
                                    }
                                    return h(t, 2)
                                },
                                "%w": function(e) {
                                    return e.tm_wday
                                },
                                "%W": function(e) {
                                    var t = e.tm_yday + 7 - (e.tm_wday + 6) % 7;
                                    return h(Math.floor(t / 7), 2)
                                },
                                "%y": function(e) {
                                    return (e.tm_year + 1900).toString().substring(2)
                                },
                                "%Y": function(e) {
                                    return e.tm_year + 1900
                                },
                                "%z": function(e) {
                                    var t = e.tm_gmtoff,
                                        n = t >= 0;
                                    return t = (t = Math.abs(t) / 60) / 60 * 100 + t % 60, (n ? "+" : "-") + String("0000" + t).slice(-4)
                                },
                                "%Z": function(e) {
                                    return e.tm_zone
                                },
                                "%%": function() {
                                    return "%"
                                }
                            };
                            for (var c in o = o.replace(/%%/g, "\0\0"), u) o.includes(c) && (o = o.replace(new RegExp(c, "g"), u[c](r)));
                            var p = Ut(o = o.replace(/\0\0/g, "%"), !1);
                            return p.length > t ? 0 : (ie(p, e), p.length - 1)
                        }(e, t, n, s)
                    }
                },
                At = (function() {
                    var e = {
                        env: vt,
                        wasi_snapshot_preview1: vt
                    };

                    function t(e, t) {
                        var n, s, r = e.exports;
                        i.asm = r, n = i.asm._emscripten_tls_init, Le.tlsInitFunctions.push(n), C(_e = i.asm.__indirect_function_table, "table not found in wasm exports"), s = i.asm.__wasm_call_ctors, he.unshift(s), S = t, O || ke("wasm-instantiate")
                    }
                    O || Oe("wasm-instantiate");
                    var n = i;

                    function r(e) {
                        C(i === n, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"), n = null, t(e.instance, e.module)
                    }

                    function o(t) {
                        return function() {
                            if (!Y && (h || f)) {
                                if ("function" == typeof fetch && !De(we)) return fetch(we, {
                                    credentials: "same-origin"
                                }).then((function(e) {
                                    if (!e.ok) throw "failed to load wasm binary file at '" + we + "'";
                                    return e.arrayBuffer()
                                })).catch((function() {
                                    return ve(we)
                                }));
                                if (p) return new Promise((function(e, t) {
                                    p(we, (function(t) {
                                        e(new Uint8Array(t))
                                    }), t)
                                }))
                            }
                            return Promise.resolve().then((function() {
                                return ve(we)
                            }))
                        }().then((function(t) {
                            return WebAssembly.instantiate(t, e)
                        })).then((function(e) {
                            return e
                        })).then(t, (function(e) {
                            A("failed to asynchronously prepare wasm: " + e), De(we) && A("warning: Loading from a file URI (" + we + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing"), Pe(e)
                        }))
                    }
                    if (i.instantiateWasm) try {
                        return i.instantiateWasm(e, t)
                    } catch (e) {
                        return A("Module.instantiateWasm callback failed with error: " + e), !1
                    }(Y || "function" != typeof WebAssembly.instantiateStreaming || Ue(we) || De(we) || l || "function" != typeof fetch ? o(r) : fetch(we, {
                        credentials: "same-origin"
                    }).then((function(t) {
                        return WebAssembly.instantiateStreaming(t, e).then(r, (function(e) {
                            return A("wasm streaming compile failed: " + e), A("falling back to ArrayBuffer instantiation"), o(r)
                        }))
                    }))).catch(s)
                }(), i.___wasm_call_ctors = Ee("__wasm_call_ctors"), i._Z3_get_error_msg = Ee("Z3_get_error_msg"), i._set_throwy_error_handler = Ee("set_throwy_error_handler"), i._set_noop_error_handler = Ee("set_noop_error_handler"), i._async_Z3_eval_smtlib2_string = Ee("async_Z3_eval_smtlib2_string"), i._async_Z3_simplify = Ee("async_Z3_simplify"), i._async_Z3_simplify_ex = Ee("async_Z3_simplify_ex"), i._async_Z3_solver_check = Ee("async_Z3_solver_check"), i._async_Z3_solver_check_assumptions = Ee("async_Z3_solver_check_assumptions"), i._async_Z3_solver_cube = Ee("async_Z3_solver_cube"), i._async_Z3_solver_get_consequences = Ee("async_Z3_solver_get_consequences"), i._async_Z3_tactic_apply = Ee("async_Z3_tactic_apply"), i._async_Z3_tactic_apply_ex = Ee("async_Z3_tactic_apply_ex"), i._async_Z3_optimize_check = Ee("async_Z3_optimize_check"), i._async_Z3_algebraic_roots = Ee("async_Z3_algebraic_roots"), i._async_Z3_algebraic_eval = Ee("async_Z3_algebraic_eval"), i._async_Z3_fixedpoint_query = Ee("async_Z3_fixedpoint_query"), i._async_Z3_fixedpoint_query_relations = Ee("async_Z3_fixedpoint_query_relations"), i._async_Z3_fixedpoint_query_from_lvl = Ee("async_Z3_fixedpoint_query_from_lvl"), i._async_Z3_polynomial_subresultants = Ee("async_Z3_polynomial_subresultants"), i._Z3_eval_smtlib2_string = Ee("Z3_eval_smtlib2_string"), i._Z3_simplify = Ee("Z3_simplify"), i._Z3_simplify_ex = Ee("Z3_simplify_ex"), i._Z3_solver_check = Ee("Z3_solver_check"), i._Z3_solver_check_assumptions = Ee("Z3_solver_check_assumptions"), i._Z3_solver_cube = Ee("Z3_solver_cube"), i._Z3_solver_get_consequences = Ee("Z3_solver_get_consequences"), i._Z3_tactic_apply = Ee("Z3_tactic_apply"), i._Z3_tactic_apply_ex = Ee("Z3_tactic_apply_ex"), i._Z3_optimize_check = Ee("Z3_optimize_check"), i._Z3_algebraic_roots = Ee("Z3_algebraic_roots"), i._Z3_algebraic_eval = Ee("Z3_algebraic_eval"), i._Z3_fixedpoint_query = Ee("Z3_fixedpoint_query"), i._Z3_fixedpoint_query_relations = Ee("Z3_fixedpoint_query_relations"), i._Z3_fixedpoint_query_from_lvl = Ee("Z3_fixedpoint_query_from_lvl"), i._Z3_polynomial_subresultants = Ee("Z3_polynomial_subresultants"), i._Z3_mk_context = Ee("Z3_mk_context"), i._Z3_mk_context_rc = Ee("Z3_mk_context_rc"), i._Z3_del_context = Ee("Z3_del_context"), i._Z3_interrupt = Ee("Z3_interrupt"), i._Z3_enable_concurrent_dec_ref = Ee("Z3_enable_concurrent_dec_ref"), i._Z3_toggle_warning_messages = Ee("Z3_toggle_warning_messages"), i._Z3_inc_ref = Ee("Z3_inc_ref"), i._Z3_dec_ref = Ee("Z3_dec_ref"), i._Z3_get_version = Ee("Z3_get_version"), i._Z3_get_full_version = Ee("Z3_get_full_version"), i._Z3_enable_trace = Ee("Z3_enable_trace"), i._Z3_disable_trace = Ee("Z3_disable_trace"), i._Z3_reset_memory = Ee("Z3_reset_memory"), i._Z3_finalize_memory = Ee("Z3_finalize_memory"), i._Z3_get_error_code = Ee("Z3_get_error_code"), i._Z3_set_error = Ee("Z3_set_error"), i._Z3_set_ast_print_mode = Ee("Z3_set_ast_print_mode"), i._Z3_global_param_set = Ee("Z3_global_param_set"), i._Z3_global_param_reset_all = Ee("Z3_global_param_reset_all"), i._Z3_global_param_get = Ee("Z3_global_param_get"), i._Z3_get_global_param_descrs = Ee("Z3_get_global_param_descrs"), i._Z3_mk_config = Ee("Z3_mk_config"), i._Z3_del_config = Ee("Z3_del_config"), i._Z3_set_param_value = Ee("Z3_set_param_value"), i._Z3_update_param_value = Ee("Z3_update_param_value"), i._Z3_mk_linear_order = Ee("Z3_mk_linear_order"), i._Z3_mk_partial_order = Ee("Z3_mk_partial_order"), i._Z3_mk_piecewise_linear_order = Ee("Z3_mk_piecewise_linear_order"), i._Z3_mk_tree_order = Ee("Z3_mk_tree_order"), i._Z3_mk_transitive_closure = Ee("Z3_mk_transitive_closure"), i._Z3_mk_bv_sort = Ee("Z3_mk_bv_sort"), i._Z3_mk_bvnot = Ee("Z3_mk_bvnot"), i._Z3_mk_bvredand = Ee("Z3_mk_bvredand"), i._Z3_mk_bvredor = Ee("Z3_mk_bvredor"), i._Z3_mk_bvand = Ee("Z3_mk_bvand"), i._Z3_mk_bvor = Ee("Z3_mk_bvor"), i._Z3_mk_bvxor = Ee("Z3_mk_bvxor"), i._Z3_mk_bvnand = Ee("Z3_mk_bvnand"), i._Z3_mk_bvnor = Ee("Z3_mk_bvnor"), i._Z3_mk_bvxnor = Ee("Z3_mk_bvxnor"), i._Z3_mk_bvadd = Ee("Z3_mk_bvadd"), i._Z3_mk_bvmul = Ee("Z3_mk_bvmul"), i._Z3_mk_bvudiv = Ee("Z3_mk_bvudiv"), i._Z3_mk_bvsdiv = Ee("Z3_mk_bvsdiv"), i._Z3_mk_bvurem = Ee("Z3_mk_bvurem"), i._Z3_mk_bvsrem = Ee("Z3_mk_bvsrem"), i._Z3_mk_bvsmod = Ee("Z3_mk_bvsmod"), i._Z3_mk_bvule = Ee("Z3_mk_bvule"), i._Z3_mk_bvsle = Ee("Z3_mk_bvsle"), i._Z3_mk_bvuge = Ee("Z3_mk_bvuge"), i._Z3_mk_bvsge = Ee("Z3_mk_bvsge"), i._Z3_mk_bvult = Ee("Z3_mk_bvult"), i._Z3_mk_bvslt = Ee("Z3_mk_bvslt"), i._Z3_mk_bvugt = Ee("Z3_mk_bvugt"), i._Z3_mk_bvsgt = Ee("Z3_mk_bvsgt"), i._Z3_mk_concat = Ee("Z3_mk_concat"), i._Z3_mk_bvshl = Ee("Z3_mk_bvshl"), i._Z3_mk_bvlshr = Ee("Z3_mk_bvlshr"), i._Z3_mk_bvashr = Ee("Z3_mk_bvashr"), i._Z3_mk_ext_rotate_left = Ee("Z3_mk_ext_rotate_left"), i._Z3_mk_ext_rotate_right = Ee("Z3_mk_ext_rotate_right"), i._Z3_mk_extract = Ee("Z3_mk_extract"), i._Z3_mk_sign_ext = Ee("Z3_mk_sign_ext"), i._Z3_mk_zero_ext = Ee("Z3_mk_zero_ext"), i._Z3_mk_repeat = Ee("Z3_mk_repeat"), i._Z3_mk_bit2bool = Ee("Z3_mk_bit2bool"), i._Z3_mk_rotate_left = Ee("Z3_mk_rotate_left"), i._Z3_mk_rotate_right = Ee("Z3_mk_rotate_right"), i._Z3_mk_int2bv = Ee("Z3_mk_int2bv"), i._Z3_mk_bv2int = Ee("Z3_mk_bv2int"), i._Z3_get_bv_sort_size = Ee("Z3_get_bv_sort_size"), i._Z3_mk_bvadd_no_overflow = Ee("Z3_mk_bvadd_no_overflow"), i._Z3_mk_bvadd_no_underflow = Ee("Z3_mk_bvadd_no_underflow"), i._Z3_mk_bvsub_no_overflow = Ee("Z3_mk_bvsub_no_overflow"), i._Z3_mk_bvneg = Ee("Z3_mk_bvneg"), i._Z3_mk_bvsub_no_underflow = Ee("Z3_mk_bvsub_no_underflow"), i._Z3_mk_bvmul_no_overflow = Ee("Z3_mk_bvmul_no_overflow"), i._Z3_mk_bvmul_no_underflow = Ee("Z3_mk_bvmul_no_underflow"), i._Z3_mk_bvneg_no_overflow = Ee("Z3_mk_bvneg_no_overflow"), i._Z3_mk_bvsdiv_no_overflow = Ee("Z3_mk_bvsdiv_no_overflow"), i._Z3_mk_bvsub = Ee("Z3_mk_bvsub"), i._Z3_mk_goal = Ee("Z3_mk_goal"), i._Z3_goal_inc_ref = Ee("Z3_goal_inc_ref"), i._Z3_goal_dec_ref = Ee("Z3_goal_dec_ref"), i._Z3_goal_precision = Ee("Z3_goal_precision"), i._Z3_goal_assert = Ee("Z3_goal_assert"), i._Z3_goal_inconsistent = Ee("Z3_goal_inconsistent"), i._Z3_goal_depth = Ee("Z3_goal_depth"), i._Z3_goal_reset = Ee("Z3_goal_reset"), i._Z3_goal_size = Ee("Z3_goal_size"), i._Z3_goal_formula = Ee("Z3_goal_formula"), i._Z3_goal_num_exprs = Ee("Z3_goal_num_exprs"), i._Z3_goal_is_decided_sat = Ee("Z3_goal_is_decided_sat"), i._Z3_goal_is_decided_unsat = Ee("Z3_goal_is_decided_unsat"), i._Z3_goal_convert_model = Ee("Z3_goal_convert_model"), i._Z3_goal_translate = Ee("Z3_goal_translate"), i._Z3_goal_to_string = Ee("Z3_goal_to_string"), i._Z3_goal_to_dimacs_string = Ee("Z3_goal_to_dimacs_string"), i._Z3_mk_tactic = Ee("Z3_mk_tactic"), i._Z3_tactic_inc_ref = Ee("Z3_tactic_inc_ref"), i._Z3_tactic_dec_ref = Ee("Z3_tactic_dec_ref"), i._Z3_mk_probe = Ee("Z3_mk_probe"), i._Z3_probe_inc_ref = Ee("Z3_probe_inc_ref"), i._Z3_probe_dec_ref = Ee("Z3_probe_dec_ref"), i._Z3_tactic_and_then = Ee("Z3_tactic_and_then"), i._Z3_tactic_or_else = Ee("Z3_tactic_or_else"), i._Z3_tactic_par_or = Ee("Z3_tactic_par_or"), i._Z3_tactic_par_and_then = Ee("Z3_tactic_par_and_then"), i._Z3_tactic_try_for = Ee("Z3_tactic_try_for"), i._Z3_tactic_when = Ee("Z3_tactic_when"), i._Z3_tactic_cond = Ee("Z3_tactic_cond"), i._Z3_tactic_repeat = Ee("Z3_tactic_repeat"), i._Z3_tactic_skip = Ee("Z3_tactic_skip"), i._Z3_tactic_fail = Ee("Z3_tactic_fail"), i._Z3_tactic_fail_if = Ee("Z3_tactic_fail_if"), i._Z3_tactic_fail_if_not_decided = Ee("Z3_tactic_fail_if_not_decided"), i._Z3_tactic_using_params = Ee("Z3_tactic_using_params"), i._Z3_probe_const = Ee("Z3_probe_const"), i._Z3_probe_lt = Ee("Z3_probe_lt"), i._Z3_probe_gt = Ee("Z3_probe_gt"), i._Z3_probe_le = Ee("Z3_probe_le"), i._Z3_probe_ge = Ee("Z3_probe_ge"), i._Z3_probe_eq = Ee("Z3_probe_eq"), i._Z3_probe_and = Ee("Z3_probe_and"), i._Z3_probe_or = Ee("Z3_probe_or"), i._Z3_probe_not = Ee("Z3_probe_not"), i._Z3_get_num_tactics = Ee("Z3_get_num_tactics"), i._Z3_get_tactic_name = Ee("Z3_get_tactic_name"), i._Z3_get_num_probes = Ee("Z3_get_num_probes"), i._Z3_get_probe_name = Ee("Z3_get_probe_name"), i._Z3_tactic_get_help = Ee("Z3_tactic_get_help"), i._Z3_tactic_get_param_descrs = Ee("Z3_tactic_get_param_descrs"), i._Z3_tactic_get_descr = Ee("Z3_tactic_get_descr"), i._Z3_probe_get_descr = Ee("Z3_probe_get_descr"), i._Z3_probe_apply = Ee("Z3_probe_apply"), i._Z3_apply_result_inc_ref = Ee("Z3_apply_result_inc_ref"), i._Z3_apply_result_dec_ref = Ee("Z3_apply_result_dec_ref"), i._Z3_apply_result_to_string = Ee("Z3_apply_result_to_string"), i._Z3_apply_result_get_num_subgoals = Ee("Z3_apply_result_get_num_subgoals"), i._Z3_apply_result_get_subgoal = Ee("Z3_apply_result_get_subgoal"), i._Z3_mk_simplifier = Ee("Z3_mk_simplifier"), i._Z3_simplifier_inc_ref = Ee("Z3_simplifier_inc_ref"), i._Z3_simplifier_dec_ref = Ee("Z3_simplifier_dec_ref"), i._Z3_get_num_simplifiers = Ee("Z3_get_num_simplifiers"), i._Z3_get_simplifier_name = Ee("Z3_get_simplifier_name"), i._Z3_simplifier_and_then = Ee("Z3_simplifier_and_then"), i._Z3_simplifier_using_params = Ee("Z3_simplifier_using_params"), i._Z3_simplifier_get_help = Ee("Z3_simplifier_get_help"), i._Z3_simplifier_get_param_descrs = Ee("Z3_simplifier_get_param_descrs"), i._Z3_simplifier_get_descr = Ee("Z3_simplifier_get_descr"), i._Z3_mk_atmost = Ee("Z3_mk_atmost"), i._Z3_mk_atleast = Ee("Z3_mk_atleast"), i._Z3_mk_pble = Ee("Z3_mk_pble"), i._Z3_mk_pbge = Ee("Z3_mk_pbge"), i._Z3_mk_pbeq = Ee("Z3_mk_pbeq"), i._Z3_open_log = Ee("Z3_open_log"), i._Z3_append_log = Ee("Z3_append_log"), i._Z3_close_log = Ee("Z3_close_log"), i._Z3_stats_to_string = Ee("Z3_stats_to_string"), i._Z3_stats_inc_ref = Ee("Z3_stats_inc_ref"), i._Z3_stats_dec_ref = Ee("Z3_stats_dec_ref"), i._Z3_stats_size = Ee("Z3_stats_size"), i._Z3_stats_get_key = Ee("Z3_stats_get_key"), i._Z3_stats_is_uint = Ee("Z3_stats_is_uint"), i._Z3_stats_is_double = Ee("Z3_stats_is_double"), i._Z3_stats_get_uint_value = Ee("Z3_stats_get_uint_value"), i._Z3_stats_get_double_value = Ee("Z3_stats_get_double_value"), i._Z3_get_estimated_alloc_size = Ee("Z3_get_estimated_alloc_size"), i._Z3_mk_numeral = Ee("Z3_mk_numeral"), i._Z3_mk_int = Ee("Z3_mk_int"), i._Z3_mk_unsigned_int = Ee("Z3_mk_unsigned_int"), i._Z3_mk_int64 = Ee("Z3_mk_int64"), i._Z3_mk_unsigned_int64 = Ee("Z3_mk_unsigned_int64"), i._Z3_is_numeral_ast = Ee("Z3_is_numeral_ast"), i._Z3_get_numeral_binary_string = Ee("Z3_get_numeral_binary_string"), i._Z3_get_numeral_string = Ee("Z3_get_numeral_string"), i._Z3_get_numeral_double = Ee("Z3_get_numeral_double"), i._Z3_get_numeral_decimal_string = Ee("Z3_get_numeral_decimal_string"), i._Z3_get_numeral_small = Ee("Z3_get_numeral_small"), i._Z3_get_numeral_int = Ee("Z3_get_numeral_int"), i._Z3_get_numeral_int64 = Ee("Z3_get_numeral_int64"), i._Z3_get_numeral_uint = Ee("Z3_get_numeral_uint"), i._Z3_get_numeral_uint64 = Ee("Z3_get_numeral_uint64"), i._Z3_get_numeral_rational_int64 = Ee("Z3_get_numeral_rational_int64"), i._Z3_mk_bv_numeral = Ee("Z3_mk_bv_numeral"), i._Z3_mk_seq_sort = Ee("Z3_mk_seq_sort"), i._Z3_mk_re_sort = Ee("Z3_mk_re_sort"), i._Z3_mk_string = Ee("Z3_mk_string"), i._Z3_mk_lstring = Ee("Z3_mk_lstring"), i._Z3_mk_u32string = Ee("Z3_mk_u32string"), i._Z3_mk_char = Ee("Z3_mk_char"), i._Z3_mk_string_sort = Ee("Z3_mk_string_sort"), i._Z3_mk_char_sort = Ee("Z3_mk_char_sort"), i._Z3_is_seq_sort = Ee("Z3_is_seq_sort"), i._Z3_is_re_sort = Ee("Z3_is_re_sort"), i._Z3_get_seq_sort_basis = Ee("Z3_get_seq_sort_basis"), i._Z3_get_re_sort_basis = Ee("Z3_get_re_sort_basis"), i._Z3_is_char_sort = Ee("Z3_is_char_sort"), i._Z3_is_string_sort = Ee("Z3_is_string_sort"), i._Z3_is_string = Ee("Z3_is_string"), i._Z3_get_string = Ee("Z3_get_string"), i._Z3_get_lstring = Ee("Z3_get_lstring"), i._Z3_get_string_length = Ee("Z3_get_string_length"), i._Z3_get_string_contents = Ee("Z3_get_string_contents"), i._Z3_mk_seq_empty = Ee("Z3_mk_seq_empty"), i._Z3_mk_seq_unit = Ee("Z3_mk_seq_unit"), i._Z3_mk_seq_concat = Ee("Z3_mk_seq_concat"), i._Z3_mk_seq_prefix = Ee("Z3_mk_seq_prefix"), i._Z3_mk_seq_suffix = Ee("Z3_mk_seq_suffix"), i._Z3_mk_seq_contains = Ee("Z3_mk_seq_contains"), i._Z3_mk_str_lt = Ee("Z3_mk_str_lt"), i._Z3_mk_str_le = Ee("Z3_mk_str_le"), i._Z3_mk_string_to_code = Ee("Z3_mk_string_to_code"), i._Z3_mk_string_from_code = Ee("Z3_mk_string_from_code"), i._Z3_mk_seq_extract = Ee("Z3_mk_seq_extract"), i._Z3_mk_seq_replace = Ee("Z3_mk_seq_replace"), i._Z3_mk_seq_at = Ee("Z3_mk_seq_at"), i._Z3_mk_seq_nth = Ee("Z3_mk_seq_nth"), i._Z3_mk_seq_length = Ee("Z3_mk_seq_length"), i._Z3_mk_seq_index = Ee("Z3_mk_seq_index"), i._Z3_mk_seq_last_index = Ee("Z3_mk_seq_last_index"), i._Z3_mk_seq_to_re = Ee("Z3_mk_seq_to_re"), i._Z3_mk_seq_in_re = Ee("Z3_mk_seq_in_re"), i._Z3_mk_int_to_str = Ee("Z3_mk_int_to_str"), i._Z3_mk_str_to_int = Ee("Z3_mk_str_to_int"), i._Z3_mk_ubv_to_str = Ee("Z3_mk_ubv_to_str"), i._Z3_mk_sbv_to_str = Ee("Z3_mk_sbv_to_str"), i._Z3_mk_re_loop = Ee("Z3_mk_re_loop"), i._Z3_mk_re_power = Ee("Z3_mk_re_power"), i._Z3_mk_re_plus = Ee("Z3_mk_re_plus"), i._Z3_mk_re_star = Ee("Z3_mk_re_star"), i._Z3_mk_re_option = Ee("Z3_mk_re_option"), i._Z3_mk_re_complement = Ee("Z3_mk_re_complement"), i._Z3_mk_re_diff = Ee("Z3_mk_re_diff"), i._Z3_mk_re_union = Ee("Z3_mk_re_union"), i._Z3_mk_re_intersect = Ee("Z3_mk_re_intersect"), i._Z3_mk_re_concat = Ee("Z3_mk_re_concat"), i._Z3_mk_re_range = Ee("Z3_mk_re_range"), i._Z3_mk_re_allchar = Ee("Z3_mk_re_allchar"), i._Z3_mk_re_empty = Ee("Z3_mk_re_empty"), i._Z3_mk_re_full = Ee("Z3_mk_re_full"), i._Z3_mk_char_le = Ee("Z3_mk_char_le"), i._Z3_mk_char_to_int = Ee("Z3_mk_char_to_int"), i._Z3_mk_char_to_bv = Ee("Z3_mk_char_to_bv"), i._Z3_mk_char_from_bv = Ee("Z3_mk_char_from_bv"), i._Z3_mk_char_is_digit = Ee("Z3_mk_char_is_digit"), i._Z3_get_relation_arity = Ee("Z3_get_relation_arity"), i._Z3_get_relation_column = Ee("Z3_get_relation_column"), i._Z3_mk_finite_domain_sort = Ee("Z3_mk_finite_domain_sort"), i._Z3_get_finite_domain_sort_size = Ee("Z3_get_finite_domain_sort_size"), i._Z3_mk_fixedpoint = Ee("Z3_mk_fixedpoint"), i._Z3_fixedpoint_inc_ref = Ee("Z3_fixedpoint_inc_ref"), i._Z3_fixedpoint_dec_ref = Ee("Z3_fixedpoint_dec_ref"), i._Z3_fixedpoint_assert = Ee("Z3_fixedpoint_assert"), i._Z3_fixedpoint_add_rule = Ee("Z3_fixedpoint_add_rule"), i._Z3_fixedpoint_add_fact = Ee("Z3_fixedpoint_add_fact"), i._Z3_get_sort_kind = Ee("Z3_get_sort_kind"), i._Z3_fixedpoint_get_answer = Ee("Z3_fixedpoint_get_answer"), i._Z3_fixedpoint_get_reason_unknown = Ee("Z3_fixedpoint_get_reason_unknown"), i._Z3_fixedpoint_to_string = Ee("Z3_fixedpoint_to_string"), i._Z3_fixedpoint_from_string = Ee("Z3_fixedpoint_from_string"), i._Z3_fixedpoint_from_file = Ee("Z3_fixedpoint_from_file"), i._Z3_fixedpoint_get_statistics = Ee("Z3_fixedpoint_get_statistics"), i._Z3_fixedpoint_register_relation = Ee("Z3_fixedpoint_register_relation"), i._Z3_fixedpoint_set_predicate_representation = Ee("Z3_fixedpoint_set_predicate_representation"), i._Z3_fixedpoint_get_rules = Ee("Z3_fixedpoint_get_rules"), i._Z3_fixedpoint_get_assertions = Ee("Z3_fixedpoint_get_assertions"), i._Z3_fixedpoint_update_rule = Ee("Z3_fixedpoint_update_rule"), i._Z3_fixedpoint_get_num_levels = Ee("Z3_fixedpoint_get_num_levels"), i._Z3_fixedpoint_get_cover_delta = Ee("Z3_fixedpoint_get_cover_delta"), i._Z3_fixedpoint_add_cover = Ee("Z3_fixedpoint_add_cover"), i._Z3_fixedpoint_get_help = Ee("Z3_fixedpoint_get_help"), i._Z3_fixedpoint_get_param_descrs = Ee("Z3_fixedpoint_get_param_descrs"), i._Z3_fixedpoint_set_params = Ee("Z3_fixedpoint_set_params"), i._Z3_fixedpoint_get_ground_sat_answer = Ee("Z3_fixedpoint_get_ground_sat_answer"), i._Z3_fixedpoint_get_rules_along_trace = Ee("Z3_fixedpoint_get_rules_along_trace"), i._Z3_fixedpoint_get_rule_names_along_trace = Ee("Z3_fixedpoint_get_rule_names_along_trace"), i._Z3_fixedpoint_add_invariant = Ee("Z3_fixedpoint_add_invariant"), i._Z3_fixedpoint_get_reachable = Ee("Z3_fixedpoint_get_reachable"), i._Z3_mk_simple_solver = Ee("Z3_mk_simple_solver"), i._Z3_mk_solver = Ee("Z3_mk_solver"), i._Z3_mk_solver_for_logic = Ee("Z3_mk_solver_for_logic"), i._Z3_mk_solver_from_tactic = Ee("Z3_mk_solver_from_tactic"), i._Z3_solver_add_simplifier = Ee("Z3_solver_add_simplifier"), i._Z3_solver_translate = Ee("Z3_solver_translate"), i._Z3_solver_import_model_converter = Ee("Z3_solver_import_model_converter"), i._Z3_solver_from_string = Ee("Z3_solver_from_string"), i._Z3_solver_from_file = Ee("Z3_solver_from_file"), i._Z3_solver_get_help = Ee("Z3_solver_get_help"), i._Z3_solver_get_param_descrs = Ee("Z3_solver_get_param_descrs"), i._Z3_solver_set_params = Ee("Z3_solver_set_params"), i._Z3_solver_inc_ref = Ee("Z3_solver_inc_ref"), i._Z3_solver_dec_ref = Ee("Z3_solver_dec_ref"), i._Z3_solver_push = Ee("Z3_solver_push"), i._Z3_solver_interrupt = Ee("Z3_solver_interrupt"), i._Z3_solver_pop = Ee("Z3_solver_pop"), i._Z3_solver_reset = Ee("Z3_solver_reset"), i._Z3_solver_get_num_scopes = Ee("Z3_solver_get_num_scopes"), i._Z3_solver_assert = Ee("Z3_solver_assert"), i._Z3_solver_assert_and_track = Ee("Z3_solver_assert_and_track"), i._Z3_solver_get_assertions = Ee("Z3_solver_get_assertions"), i._Z3_solver_get_units = Ee("Z3_solver_get_units"), i._Z3_solver_get_non_units = Ee("Z3_solver_get_non_units"), i._Z3_solver_get_levels = Ee("Z3_solver_get_levels"), i._Z3_solver_get_trail = Ee("Z3_solver_get_trail"), i._pthread_self = Ee("pthread_self")),
                Mt = (i._Z3_ast_vector_size = Ee("Z3_ast_vector_size"), i._Z3_ast_vector_get = Ee("Z3_ast_vector_get"), i._Z3_solver_get_model = Ee("Z3_solver_get_model"), i._Z3_solver_get_proof = Ee("Z3_solver_get_proof"), i._Z3_solver_get_unsat_core = Ee("Z3_solver_get_unsat_core"), i._Z3_solver_get_reason_unknown = Ee("Z3_solver_get_reason_unknown"), i._Z3_solver_get_statistics = Ee("Z3_solver_get_statistics"), i._Z3_solver_to_string = Ee("Z3_solver_to_string"), i._Z3_solver_to_dimacs_string = Ee("Z3_solver_to_dimacs_string"), i._Z3_get_implied_equalities = Ee("Z3_get_implied_equalities"), i._Z3_solver_congruence_root = Ee("Z3_solver_congruence_root"), i._Z3_solver_congruence_next = Ee("Z3_solver_congruence_next"), i._Z3_solver_register_on_clause = Ee("Z3_solver_register_on_clause"), i._Z3_solver_propagate_init = Ee("Z3_solver_propagate_init"), i._Z3_solver_propagate_fixed = Ee("Z3_solver_propagate_fixed"), i._Z3_solver_propagate_final = Ee("Z3_solver_propagate_final"), i._Z3_solver_propagate_eq = Ee("Z3_solver_propagate_eq"), i._Z3_solver_propagate_diseq = Ee("Z3_solver_propagate_diseq"), i._Z3_solver_propagate_register = Ee("Z3_solver_propagate_register"), i._Z3_solver_propagate_register_cb = Ee("Z3_solver_propagate_register_cb"), i._Z3_solver_propagate_consequence = Ee("Z3_solver_propagate_consequence"), i._Z3_solver_propagate_created = Ee("Z3_solver_propagate_created"), i._Z3_solver_propagate_decide = Ee("Z3_solver_propagate_decide"), i._Z3_solver_next_split = Ee("Z3_solver_next_split"), i._Z3_solver_propagate_declare = Ee("Z3_solver_propagate_declare"), i._Z3_mk_quantifier = Ee("Z3_mk_quantifier"), i._Z3_mk_quantifier_ex = Ee("Z3_mk_quantifier_ex"), i._Z3_mk_forall = Ee("Z3_mk_forall"), i._Z3_mk_exists = Ee("Z3_mk_exists"), i._Z3_mk_lambda = Ee("Z3_mk_lambda"), i._Z3_mk_lambda_const = Ee("Z3_mk_lambda_const"), i._Z3_mk_quantifier_const_ex = Ee("Z3_mk_quantifier_const_ex"), i._Z3_mk_quantifier_const = Ee("Z3_mk_quantifier_const"), i._Z3_mk_forall_const = Ee("Z3_mk_forall_const"), i._Z3_mk_exists_const = Ee("Z3_mk_exists_const"), i._Z3_mk_pattern = Ee("Z3_mk_pattern"), i._Z3_mk_bound = Ee("Z3_mk_bound"), i._Z3_is_quantifier_forall = Ee("Z3_is_quantifier_forall"), i._Z3_is_quantifier_exists = Ee("Z3_is_quantifier_exists"), i._Z3_is_lambda = Ee("Z3_is_lambda"), i._Z3_get_quantifier_weight = Ee("Z3_get_quantifier_weight"), i._Z3_get_quantifier_num_patterns = Ee("Z3_get_quantifier_num_patterns"), i._Z3_get_quantifier_pattern_ast = Ee("Z3_get_quantifier_pattern_ast"), i._Z3_get_quantifier_num_no_patterns = Ee("Z3_get_quantifier_num_no_patterns"), i._Z3_get_quantifier_no_pattern_ast = Ee("Z3_get_quantifier_no_pattern_ast"), i._Z3_get_quantifier_bound_name = Ee("Z3_get_quantifier_bound_name"), i._Z3_get_quantifier_bound_sort = Ee("Z3_get_quantifier_bound_sort"), i._Z3_get_quantifier_body = Ee("Z3_get_quantifier_body"), i._Z3_get_quantifier_num_bound = Ee("Z3_get_quantifier_num_bound"), i._Z3_get_pattern_num_terms = Ee("Z3_get_pattern_num_terms"), i._Z3_get_pattern = Ee("Z3_get_pattern"), i._Z3_pattern_to_ast = Ee("Z3_pattern_to_ast"), i._Z3_pattern_to_string = Ee("Z3_pattern_to_string"), i._Z3_mk_int_sort = Ee("Z3_mk_int_sort"), i._Z3_mk_real_sort = Ee("Z3_mk_real_sort"), i._Z3_mk_real_int64 = Ee("Z3_mk_real_int64"), i._Z3_mk_real = Ee("Z3_mk_real"), i._Z3_mk_add = Ee("Z3_mk_add"), i._Z3_mk_mul = Ee("Z3_mk_mul"), i._Z3_mk_power = Ee("Z3_mk_power"), i._Z3_mk_mod = Ee("Z3_mk_mod"), i._Z3_mk_rem = Ee("Z3_mk_rem"), i._Z3_mk_div = Ee("Z3_mk_div"), i._Z3_mk_lt = Ee("Z3_mk_lt"), i._Z3_mk_gt = Ee("Z3_mk_gt"), i._Z3_mk_le = Ee("Z3_mk_le"), i._Z3_mk_ge = Ee("Z3_mk_ge"), i._Z3_mk_divides = Ee("Z3_mk_divides"), i._Z3_mk_int2real = Ee("Z3_mk_int2real"), i._Z3_mk_real2int = Ee("Z3_mk_real2int"), i._Z3_mk_is_int = Ee("Z3_mk_is_int"), i._Z3_mk_sub = Ee("Z3_mk_sub"), i._Z3_mk_unary_minus = Ee("Z3_mk_unary_minus"), i._Z3_is_algebraic_number = Ee("Z3_is_algebraic_number"), i._Z3_get_algebraic_number_lower = Ee("Z3_get_algebraic_number_lower"), i._Z3_get_algebraic_number_upper = Ee("Z3_get_algebraic_number_upper"), i._Z3_get_numerator = Ee("Z3_get_numerator"), i._Z3_get_denominator = Ee("Z3_get_denominator"), i._Z3_algebraic_is_value = Ee("Z3_algebraic_is_value"), i._Z3_algebraic_is_pos = Ee("Z3_algebraic_is_pos"), i._Z3_algebraic_sign = Ee("Z3_algebraic_sign"), i._Z3_algebraic_is_neg = Ee("Z3_algebraic_is_neg"), i._Z3_algebraic_is_zero = Ee("Z3_algebraic_is_zero"), i._Z3_algebraic_add = Ee("Z3_algebraic_add"), i._Z3_algebraic_sub = Ee("Z3_algebraic_sub"), i._Z3_algebraic_mul = Ee("Z3_algebraic_mul"), i._Z3_algebraic_div = Ee("Z3_algebraic_div"), i._Z3_algebraic_root = Ee("Z3_algebraic_root"), i._Z3_algebraic_power = Ee("Z3_algebraic_power"), i._Z3_algebraic_lt = Ee("Z3_algebraic_lt"), i._Z3_algebraic_gt = Ee("Z3_algebraic_gt"), i._Z3_algebraic_le = Ee("Z3_algebraic_le"), i._Z3_algebraic_ge = Ee("Z3_algebraic_ge"), i._Z3_algebraic_eq = Ee("Z3_algebraic_eq"), i._Z3_algebraic_neq = Ee("Z3_algebraic_neq"), i._Z3_algebraic_get_poly = Ee("Z3_algebraic_get_poly"), i._Z3_algebraic_get_i = Ee("Z3_algebraic_get_i"), i._Z3_mk_ast_map = Ee("Z3_mk_ast_map"), i._Z3_ast_map_inc_ref = Ee("Z3_ast_map_inc_ref"), i._Z3_ast_map_dec_ref = Ee("Z3_ast_map_dec_ref"), i._Z3_ast_map_contains = Ee("Z3_ast_map_contains"), i._Z3_ast_map_find = Ee("Z3_ast_map_find"), i._Z3_ast_map_insert = Ee("Z3_ast_map_insert"), i._Z3_ast_map_reset = Ee("Z3_ast_map_reset"), i._Z3_ast_map_erase = Ee("Z3_ast_map_erase"), i._Z3_ast_map_size = Ee("Z3_ast_map_size"), i._Z3_ast_map_keys = Ee("Z3_ast_map_keys"), i._Z3_ast_map_to_string = Ee("Z3_ast_map_to_string"), i._Z3_qe_model_project = Ee("Z3_qe_model_project"), i._Z3_qe_model_project_skolem = Ee("Z3_qe_model_project_skolem"), i._Z3_model_extrapolate = Ee("Z3_model_extrapolate"), i._Z3_qe_lite = Ee("Z3_qe_lite"), i._Z3_mk_params = Ee("Z3_mk_params"), i._Z3_params_inc_ref = Ee("Z3_params_inc_ref"), i._Z3_params_dec_ref = Ee("Z3_params_dec_ref"), i._Z3_params_set_bool = Ee("Z3_params_set_bool"), i._Z3_params_set_uint = Ee("Z3_params_set_uint"), i._Z3_params_set_double = Ee("Z3_params_set_double"), i._Z3_params_set_symbol = Ee("Z3_params_set_symbol"), i._Z3_params_to_string = Ee("Z3_params_to_string"), i._Z3_params_validate = Ee("Z3_params_validate"), i._Z3_param_descrs_inc_ref = Ee("Z3_param_descrs_inc_ref"), i._Z3_param_descrs_dec_ref = Ee("Z3_param_descrs_dec_ref"), i._Z3_param_descrs_get_kind = Ee("Z3_param_descrs_get_kind"), i._Z3_param_descrs_size = Ee("Z3_param_descrs_size"), i._Z3_param_descrs_get_name = Ee("Z3_param_descrs_get_name"), i._Z3_param_descrs_get_documentation = Ee("Z3_param_descrs_get_documentation"), i._Z3_param_descrs_to_string = Ee("Z3_param_descrs_to_string"), i._Z3_mk_tuple_sort = Ee("Z3_mk_tuple_sort"), i._Z3_mk_enumeration_sort = Ee("Z3_mk_enumeration_sort"), i._Z3_mk_list_sort = Ee("Z3_mk_list_sort"), i._Z3_mk_constructor = Ee("Z3_mk_constructor"), i._Z3_query_constructor = Ee("Z3_query_constructor"), i._Z3_del_constructor = Ee("Z3_del_constructor"), i._Z3_mk_datatype = Ee("Z3_mk_datatype"), i._Z3_mk_constructor_list = Ee("Z3_mk_constructor_list"), i._Z3_del_constructor_list = Ee("Z3_del_constructor_list"), i._Z3_mk_datatype_sort = Ee("Z3_mk_datatype_sort"), i._Z3_mk_datatypes = Ee("Z3_mk_datatypes"), i._Z3_get_datatype_sort_num_constructors = Ee("Z3_get_datatype_sort_num_constructors"), i._Z3_get_datatype_sort_constructor = Ee("Z3_get_datatype_sort_constructor"), i._Z3_get_datatype_sort_recognizer = Ee("Z3_get_datatype_sort_recognizer"), i._Z3_get_datatype_sort_constructor_accessor = Ee("Z3_get_datatype_sort_constructor_accessor"), i._Z3_get_tuple_sort_mk_decl = Ee("Z3_get_tuple_sort_mk_decl"), i._Z3_get_tuple_sort_num_fields = Ee("Z3_get_tuple_sort_num_fields"), i._Z3_get_tuple_sort_field_decl = Ee("Z3_get_tuple_sort_field_decl"), i._Z3_datatype_update_field = Ee("Z3_datatype_update_field"), i._Z3_mk_ast_vector = Ee("Z3_mk_ast_vector"), i._Z3_ast_vector_inc_ref = Ee("Z3_ast_vector_inc_ref"), i._Z3_ast_vector_dec_ref = Ee("Z3_ast_vector_dec_ref"), i._Z3_ast_vector_set = Ee("Z3_ast_vector_set"), i._Z3_ast_vector_resize = Ee("Z3_ast_vector_resize"), i._Z3_ast_vector_push = Ee("Z3_ast_vector_push"), i._Z3_ast_vector_translate = Ee("Z3_ast_vector_translate"), i._Z3_ast_vector_to_string = Ee("Z3_ast_vector_to_string"), i._Z3_mk_array_sort = Ee("Z3_mk_array_sort"), i._Z3_mk_array_sort_n = Ee("Z3_mk_array_sort_n"), i._Z3_mk_select = Ee("Z3_mk_select"), i._Z3_mk_select_n = Ee("Z3_mk_select_n"), i._Z3_mk_store = Ee("Z3_mk_store"), i._Z3_mk_store_n = Ee("Z3_mk_store_n"), i._Z3_mk_map = Ee("Z3_mk_map"), i._Z3_mk_const_array = Ee("Z3_mk_const_array"), i._Z3_mk_array_default = Ee("Z3_mk_array_default"), i._Z3_mk_set_sort = Ee("Z3_mk_set_sort"), i._Z3_mk_empty_set = Ee("Z3_mk_empty_set"), i._Z3_mk_full_set = Ee("Z3_mk_full_set"), i._Z3_mk_set_union = Ee("Z3_mk_set_union"), i._Z3_mk_set_intersect = Ee("Z3_mk_set_intersect"), i._Z3_mk_set_difference = Ee("Z3_mk_set_difference"), i._Z3_mk_set_complement = Ee("Z3_mk_set_complement"), i._Z3_mk_set_subset = Ee("Z3_mk_set_subset"), i._Z3_mk_array_ext = Ee("Z3_mk_array_ext"), i._Z3_mk_set_has_size = Ee("Z3_mk_set_has_size"), i._Z3_mk_as_array = Ee("Z3_mk_as_array"), i._Z3_mk_set_member = Ee("Z3_mk_set_member"), i._Z3_mk_set_add = Ee("Z3_mk_set_add"), i._Z3_mk_set_del = Ee("Z3_mk_set_del"), i._Z3_get_array_sort_domain = Ee("Z3_get_array_sort_domain"), i._Z3_get_array_sort_domain_n = Ee("Z3_get_array_sort_domain_n"), i._Z3_get_array_sort_range = Ee("Z3_get_array_sort_range"), i._Z3_mk_parser_context = Ee("Z3_mk_parser_context"), i._Z3_parser_context_inc_ref = Ee("Z3_parser_context_inc_ref"), i._Z3_parser_context_dec_ref = Ee("Z3_parser_context_dec_ref"), i._Z3_parser_context_add_sort = Ee("Z3_parser_context_add_sort"), i._Z3_parser_context_add_decl = Ee("Z3_parser_context_add_decl"), i._Z3_parser_context_from_string = Ee("Z3_parser_context_from_string"), i._Z3_parse_smtlib2_string = Ee("Z3_parse_smtlib2_string"), i._Z3_parse_smtlib2_file = Ee("Z3_parse_smtlib2_file"), i._Z3_mk_model = Ee("Z3_mk_model"), i._Z3_model_inc_ref = Ee("Z3_model_inc_ref"), i._Z3_model_dec_ref = Ee("Z3_model_dec_ref"), i._Z3_model_get_const_interp = Ee("Z3_model_get_const_interp"), i._Z3_model_has_interp = Ee("Z3_model_has_interp"), i._Z3_model_get_func_interp = Ee("Z3_model_get_func_interp"), i._Z3_model_get_num_consts = Ee("Z3_model_get_num_consts"), i._Z3_model_get_const_decl = Ee("Z3_model_get_const_decl"), i._Z3_model_get_num_funcs = Ee("Z3_model_get_num_funcs"), i._Z3_model_get_func_decl = Ee("Z3_model_get_func_decl"), i._Z3_model_eval = Ee("Z3_model_eval"), i._Z3_model_get_num_sorts = Ee("Z3_model_get_num_sorts"), i._Z3_model_get_sort = Ee("Z3_model_get_sort"), i._Z3_model_get_sort_universe = Ee("Z3_model_get_sort_universe"), i._Z3_model_translate = Ee("Z3_model_translate"), i._Z3_is_as_array = Ee("Z3_is_as_array"), i._Z3_get_as_array_func_decl = Ee("Z3_get_as_array_func_decl"), i._Z3_add_func_interp = Ee("Z3_add_func_interp"), i._Z3_add_const_interp = Ee("Z3_add_const_interp"), i._Z3_func_interp_inc_ref = Ee("Z3_func_interp_inc_ref"), i._Z3_func_interp_dec_ref = Ee("Z3_func_interp_dec_ref"), i._Z3_func_interp_get_num_entries = Ee("Z3_func_interp_get_num_entries"), i._Z3_func_interp_get_entry = Ee("Z3_func_interp_get_entry"), i._Z3_func_interp_get_else = Ee("Z3_func_interp_get_else"), i._Z3_func_interp_set_else = Ee("Z3_func_interp_set_else"), i._Z3_func_interp_get_arity = Ee("Z3_func_interp_get_arity"), i._Z3_func_interp_add_entry = Ee("Z3_func_interp_add_entry"), i._Z3_func_entry_inc_ref = Ee("Z3_func_entry_inc_ref"), i._Z3_func_entry_dec_ref = Ee("Z3_func_entry_dec_ref"), i._Z3_func_entry_get_value = Ee("Z3_func_entry_get_value"), i._Z3_func_entry_get_num_args = Ee("Z3_func_entry_get_num_args"), i._Z3_func_entry_get_arg = Ee("Z3_func_entry_get_arg"), i._Z3_model_to_string = Ee("Z3_model_to_string"), i._Z3_mk_int_symbol = Ee("Z3_mk_int_symbol"), i._Z3_mk_string_symbol = Ee("Z3_mk_string_symbol"), i._Z3_is_eq_sort = Ee("Z3_is_eq_sort"), i._Z3_mk_uninterpreted_sort = Ee("Z3_mk_uninterpreted_sort"), i._Z3_is_eq_ast = Ee("Z3_is_eq_ast"), i._Z3_is_eq_func_decl = Ee("Z3_is_eq_func_decl"), i._Z3_mk_func_decl = Ee("Z3_mk_func_decl"), i._Z3_mk_rec_func_decl = Ee("Z3_mk_rec_func_decl"), i._Z3_add_rec_def = Ee("Z3_add_rec_def"), i._Z3_mk_app = Ee("Z3_mk_app"), i._Z3_mk_const = Ee("Z3_mk_const"), i._Z3_mk_fresh_func_decl = Ee("Z3_mk_fresh_func_decl"), i._Z3_mk_fresh_const = Ee("Z3_mk_fresh_const"), i._Z3_mk_true = Ee("Z3_mk_true"), i._Z3_mk_false = Ee("Z3_mk_false"), i._Z3_mk_not = Ee("Z3_mk_not"), i._Z3_mk_eq = Ee("Z3_mk_eq"), i._Z3_mk_distinct = Ee("Z3_mk_distinct"), i._Z3_mk_iff = Ee("Z3_mk_iff"), i._Z3_mk_implies = Ee("Z3_mk_implies"), i._Z3_mk_xor = Ee("Z3_mk_xor"), i._Z3_mk_and = Ee("Z3_mk_and"), i._Z3_mk_or = Ee("Z3_mk_or"), i._Z3_mk_ite = Ee("Z3_mk_ite"), i._Z3_mk_bool_sort = Ee("Z3_mk_bool_sort"), i._Z3_app_to_ast = Ee("Z3_app_to_ast"), i._Z3_sort_to_ast = Ee("Z3_sort_to_ast"), i._Z3_func_decl_to_ast = Ee("Z3_func_decl_to_ast"), i._Z3_get_ast_id = Ee("Z3_get_ast_id"), i._Z3_get_func_decl_id = Ee("Z3_get_func_decl_id"), i._Z3_get_sort_id = Ee("Z3_get_sort_id"), i._Z3_is_well_sorted = Ee("Z3_is_well_sorted"), i._Z3_get_symbol_kind = Ee("Z3_get_symbol_kind"), i._Z3_get_symbol_int = Ee("Z3_get_symbol_int"), i._Z3_get_symbol_string = Ee("Z3_get_symbol_string"), i._Z3_get_ast_kind = Ee("Z3_get_ast_kind"), i._Z3_get_ast_hash = Ee("Z3_get_ast_hash"), i._Z3_is_app = Ee("Z3_is_app"), i._Z3_to_app = Ee("Z3_to_app"), i._Z3_to_func_decl = Ee("Z3_to_func_decl"), i._Z3_get_app_decl = Ee("Z3_get_app_decl"), i._Z3_get_app_num_args = Ee("Z3_get_app_num_args"), i._Z3_get_app_arg = Ee("Z3_get_app_arg"), i._Z3_get_decl_name = Ee("Z3_get_decl_name"), i._Z3_get_decl_num_parameters = Ee("Z3_get_decl_num_parameters"), i._Z3_get_decl_parameter_kind = Ee("Z3_get_decl_parameter_kind"), i._Z3_get_decl_int_parameter = Ee("Z3_get_decl_int_parameter"), i._Z3_get_decl_double_parameter = Ee("Z3_get_decl_double_parameter"), i._Z3_get_decl_symbol_parameter = Ee("Z3_get_decl_symbol_parameter"), i._Z3_get_decl_sort_parameter = Ee("Z3_get_decl_sort_parameter"), i._Z3_get_decl_ast_parameter = Ee("Z3_get_decl_ast_parameter"), i._Z3_get_decl_func_decl_parameter = Ee("Z3_get_decl_func_decl_parameter"), i._Z3_get_decl_rational_parameter = Ee("Z3_get_decl_rational_parameter"), i._Z3_get_sort_name = Ee("Z3_get_sort_name"), i._Z3_get_sort = Ee("Z3_get_sort"), i._Z3_get_arity = Ee("Z3_get_arity"), i._Z3_get_domain_size = Ee("Z3_get_domain_size"), i._Z3_get_domain = Ee("Z3_get_domain"), i._Z3_get_range = Ee("Z3_get_range"), i._Z3_get_bool_value = Ee("Z3_get_bool_value"), i._Z3_simplify_get_help = Ee("Z3_simplify_get_help"), i._Z3_simplify_get_param_descrs = Ee("Z3_simplify_get_param_descrs"), i._Z3_update_term = Ee("Z3_update_term"), i._Z3_substitute = Ee("Z3_substitute"), i._Z3_substitute_funs = Ee("Z3_substitute_funs"), i._Z3_substitute_vars = Ee("Z3_substitute_vars"), i._Z3_ast_to_string = Ee("Z3_ast_to_string"), i._Z3_sort_to_string = Ee("Z3_sort_to_string"), i._Z3_func_decl_to_string = Ee("Z3_func_decl_to_string"), i._Z3_benchmark_to_smtlib_string = Ee("Z3_benchmark_to_smtlib_string"), i._Z3_get_decl_kind = Ee("Z3_get_decl_kind"), i._Z3_get_index_value = Ee("Z3_get_index_value"), i._Z3_translate = Ee("Z3_translate"), i._Z3_mk_optimize = Ee("Z3_mk_optimize"), i._Z3_optimize_inc_ref = Ee("Z3_optimize_inc_ref"), i._Z3_optimize_dec_ref = Ee("Z3_optimize_dec_ref"), i._Z3_optimize_assert = Ee("Z3_optimize_assert"), i._Z3_optimize_assert_and_track = Ee("Z3_optimize_assert_and_track"), i._Z3_optimize_assert_soft = Ee("Z3_optimize_assert_soft"), i._Z3_optimize_maximize = Ee("Z3_optimize_maximize"), i._Z3_optimize_minimize = Ee("Z3_optimize_minimize"), i._Z3_optimize_push = Ee("Z3_optimize_push"), i._Z3_optimize_pop = Ee("Z3_optimize_pop"), i._Z3_optimize_get_unsat_core = Ee("Z3_optimize_get_unsat_core"), i._Z3_optimize_get_reason_unknown = Ee("Z3_optimize_get_reason_unknown"), i._Z3_optimize_get_model = Ee("Z3_optimize_get_model"), i._Z3_optimize_set_params = Ee("Z3_optimize_set_params"), i._Z3_optimize_get_param_descrs = Ee("Z3_optimize_get_param_descrs"), i._Z3_optimize_get_lower = Ee("Z3_optimize_get_lower"), i._Z3_optimize_get_upper = Ee("Z3_optimize_get_upper"), i._Z3_optimize_get_lower_as_vector = Ee("Z3_optimize_get_lower_as_vector"), i._Z3_optimize_get_upper_as_vector = Ee("Z3_optimize_get_upper_as_vector"), i._Z3_optimize_to_string = Ee("Z3_optimize_to_string"), i._Z3_optimize_get_help = Ee("Z3_optimize_get_help"), i._Z3_optimize_get_statistics = Ee("Z3_optimize_get_statistics"), i._Z3_optimize_from_string = Ee("Z3_optimize_from_string"), i._Z3_optimize_from_file = Ee("Z3_optimize_from_file"), i._Z3_optimize_get_assertions = Ee("Z3_optimize_get_assertions"), i._Z3_optimize_get_objectives = Ee("Z3_optimize_get_objectives"), i._Z3_rcf_del = Ee("Z3_rcf_del"), i._Z3_rcf_mk_rational = Ee("Z3_rcf_mk_rational"), i._Z3_rcf_mk_small_int = Ee("Z3_rcf_mk_small_int"), i._Z3_rcf_mk_pi = Ee("Z3_rcf_mk_pi"), i._Z3_rcf_mk_e = Ee("Z3_rcf_mk_e"), i._Z3_rcf_mk_infinitesimal = Ee("Z3_rcf_mk_infinitesimal"), i._Z3_rcf_mk_roots = Ee("Z3_rcf_mk_roots"), i._Z3_rcf_add = Ee("Z3_rcf_add"), i._Z3_rcf_sub = Ee("Z3_rcf_sub"), i._Z3_rcf_mul = Ee("Z3_rcf_mul"), i._Z3_rcf_div = Ee("Z3_rcf_div"), i._Z3_rcf_neg = Ee("Z3_rcf_neg"), i._Z3_rcf_inv = Ee("Z3_rcf_inv"), i._Z3_rcf_power = Ee("Z3_rcf_power"), i._Z3_rcf_lt = Ee("Z3_rcf_lt"), i._Z3_rcf_gt = Ee("Z3_rcf_gt"), i._Z3_rcf_le = Ee("Z3_rcf_le"), i._Z3_rcf_ge = Ee("Z3_rcf_ge"), i._Z3_rcf_eq = Ee("Z3_rcf_eq"), i._Z3_rcf_neq = Ee("Z3_rcf_neq"), i._Z3_rcf_num_to_string = Ee("Z3_rcf_num_to_string"), i._Z3_rcf_num_to_decimal_string = Ee("Z3_rcf_num_to_decimal_string"), i._Z3_rcf_get_numerator_denominator = Ee("Z3_rcf_get_numerator_denominator"), i._Z3_mk_fpa_rounding_mode_sort = Ee("Z3_mk_fpa_rounding_mode_sort"), i._Z3_mk_fpa_round_nearest_ties_to_even = Ee("Z3_mk_fpa_round_nearest_ties_to_even"), i._Z3_mk_fpa_rne = Ee("Z3_mk_fpa_rne"), i._Z3_mk_fpa_round_nearest_ties_to_away = Ee("Z3_mk_fpa_round_nearest_ties_to_away"), i._Z3_mk_fpa_rna = Ee("Z3_mk_fpa_rna"), i._Z3_mk_fpa_round_toward_positive = Ee("Z3_mk_fpa_round_toward_positive"), i._Z3_mk_fpa_rtp = Ee("Z3_mk_fpa_rtp"), i._Z3_mk_fpa_round_toward_negative = Ee("Z3_mk_fpa_round_toward_negative"), i._Z3_mk_fpa_rtn = Ee("Z3_mk_fpa_rtn"), i._Z3_mk_fpa_round_toward_zero = Ee("Z3_mk_fpa_round_toward_zero"), i._Z3_mk_fpa_rtz = Ee("Z3_mk_fpa_rtz"), i._Z3_mk_fpa_sort = Ee("Z3_mk_fpa_sort"), i._Z3_mk_fpa_sort_half = Ee("Z3_mk_fpa_sort_half"), i._Z3_mk_fpa_sort_16 = Ee("Z3_mk_fpa_sort_16"), i._Z3_mk_fpa_sort_single = Ee("Z3_mk_fpa_sort_single"), i._Z3_mk_fpa_sort_32 = Ee("Z3_mk_fpa_sort_32"), i._Z3_mk_fpa_sort_double = Ee("Z3_mk_fpa_sort_double"), i._Z3_mk_fpa_sort_64 = Ee("Z3_mk_fpa_sort_64"), i._Z3_mk_fpa_sort_quadruple = Ee("Z3_mk_fpa_sort_quadruple"), i._Z3_mk_fpa_sort_128 = Ee("Z3_mk_fpa_sort_128"), i._Z3_mk_fpa_nan = Ee("Z3_mk_fpa_nan"), i._Z3_mk_fpa_inf = Ee("Z3_mk_fpa_inf"), i._Z3_mk_fpa_zero = Ee("Z3_mk_fpa_zero"), i._Z3_mk_fpa_fp = Ee("Z3_mk_fpa_fp"), i._Z3_mk_fpa_numeral_float = Ee("Z3_mk_fpa_numeral_float"), i._Z3_mk_fpa_numeral_double = Ee("Z3_mk_fpa_numeral_double"), i._Z3_mk_fpa_numeral_int = Ee("Z3_mk_fpa_numeral_int"), i._Z3_mk_fpa_numeral_int_uint = Ee("Z3_mk_fpa_numeral_int_uint"), i._Z3_mk_fpa_numeral_int64_uint64 = Ee("Z3_mk_fpa_numeral_int64_uint64"), i._Z3_mk_fpa_abs = Ee("Z3_mk_fpa_abs"), i._Z3_mk_fpa_neg = Ee("Z3_mk_fpa_neg"), i._Z3_mk_fpa_add = Ee("Z3_mk_fpa_add"), i._Z3_mk_fpa_sub = Ee("Z3_mk_fpa_sub"), i._Z3_mk_fpa_mul = Ee("Z3_mk_fpa_mul"), i._Z3_mk_fpa_div = Ee("Z3_mk_fpa_div"), i._Z3_mk_fpa_fma = Ee("Z3_mk_fpa_fma"), i._Z3_mk_fpa_sqrt = Ee("Z3_mk_fpa_sqrt"), i._Z3_mk_fpa_rem = Ee("Z3_mk_fpa_rem"), i._Z3_mk_fpa_round_to_integral = Ee("Z3_mk_fpa_round_to_integral"), i._Z3_mk_fpa_min = Ee("Z3_mk_fpa_min"), i._Z3_mk_fpa_max = Ee("Z3_mk_fpa_max"), i._Z3_mk_fpa_leq = Ee("Z3_mk_fpa_leq"), i._Z3_mk_fpa_lt = Ee("Z3_mk_fpa_lt"), i._Z3_mk_fpa_geq = Ee("Z3_mk_fpa_geq"), i._Z3_mk_fpa_gt = Ee("Z3_mk_fpa_gt"), i._Z3_mk_fpa_eq = Ee("Z3_mk_fpa_eq"), i._Z3_mk_fpa_is_normal = Ee("Z3_mk_fpa_is_normal"), i._Z3_mk_fpa_is_subnormal = Ee("Z3_mk_fpa_is_subnormal"), i._Z3_mk_fpa_is_zero = Ee("Z3_mk_fpa_is_zero"), i._Z3_mk_fpa_is_infinite = Ee("Z3_mk_fpa_is_infinite"), i._Z3_mk_fpa_is_nan = Ee("Z3_mk_fpa_is_nan"), i._Z3_mk_fpa_is_negative = Ee("Z3_mk_fpa_is_negative"), i._Z3_mk_fpa_is_positive = Ee("Z3_mk_fpa_is_positive"), i._Z3_mk_fpa_to_fp_bv = Ee("Z3_mk_fpa_to_fp_bv"), i._Z3_mk_fpa_to_fp_float = Ee("Z3_mk_fpa_to_fp_float"), i._Z3_mk_fpa_to_fp_real = Ee("Z3_mk_fpa_to_fp_real"), i._Z3_mk_fpa_to_fp_signed = Ee("Z3_mk_fpa_to_fp_signed"), i._Z3_mk_fpa_to_fp_unsigned = Ee("Z3_mk_fpa_to_fp_unsigned"), i._Z3_mk_fpa_to_ubv = Ee("Z3_mk_fpa_to_ubv"), i._Z3_mk_fpa_to_sbv = Ee("Z3_mk_fpa_to_sbv"), i._Z3_mk_fpa_to_real = Ee("Z3_mk_fpa_to_real"), i._Z3_fpa_get_ebits = Ee("Z3_fpa_get_ebits"), i._Z3_fpa_get_sbits = Ee("Z3_fpa_get_sbits"), i._Z3_fpa_get_numeral_sign = Ee("Z3_fpa_get_numeral_sign"), i._Z3_fpa_get_numeral_sign_bv = Ee("Z3_fpa_get_numeral_sign_bv"), i._Z3_fpa_get_numeral_significand_bv = Ee("Z3_fpa_get_numeral_significand_bv"), i._Z3_fpa_get_numeral_significand_string = Ee("Z3_fpa_get_numeral_significand_string"), i._Z3_fpa_get_numeral_significand_uint64 = Ee("Z3_fpa_get_numeral_significand_uint64"), i._Z3_fpa_get_numeral_exponent_string = Ee("Z3_fpa_get_numeral_exponent_string"), i._Z3_fpa_get_numeral_exponent_int64 = Ee("Z3_fpa_get_numeral_exponent_int64"), i._Z3_fpa_get_numeral_exponent_bv = Ee("Z3_fpa_get_numeral_exponent_bv"), i._Z3_mk_fpa_to_ieee_bv = Ee("Z3_mk_fpa_to_ieee_bv"), i._Z3_mk_fpa_to_fp_int_real = Ee("Z3_mk_fpa_to_fp_int_real"), i._Z3_fpa_is_numeral_nan = Ee("Z3_fpa_is_numeral_nan"), i._Z3_fpa_is_numeral_inf = Ee("Z3_fpa_is_numeral_inf"), i._Z3_fpa_is_numeral_zero = Ee("Z3_fpa_is_numeral_zero"), i._Z3_fpa_is_numeral_normal = Ee("Z3_fpa_is_numeral_normal"), i._Z3_fpa_is_numeral_subnormal = Ee("Z3_fpa_is_numeral_subnormal"), i._Z3_fpa_is_numeral_positive = Ee("Z3_fpa_is_numeral_positive"), i._Z3_fpa_is_numeral_negative = Ee("Z3_fpa_is_numeral_negative"), i._fflush = Ee("fflush")),
                It = i._free = Ee("free"),
                Rt = i._malloc = Ee("malloc"),
                Lt = (i.__emscripten_tls_init = Ee("_emscripten_tls_init"), i.___errno_location = Ee("__errno_location")),
                Yt = i.__emscripten_thread_init = Ee("_emscripten_thread_init"),
                xt = (i.__emscripten_thread_crashed = Ee("_emscripten_thread_crashed"), i._emscripten_main_thread_process_queued_calls = Ee("emscripten_main_thread_process_queued_calls"), i._emscripten_main_browser_thread_id = Ee("emscripten_main_browser_thread_id"), i._emscripten_run_in_main_runtime_thread_js = Ee("emscripten_run_in_main_runtime_thread_js")),
                qt = (i._emscripten_dispatch_to_thread_ = Ee("emscripten_dispatch_to_thread_"), i._emscripten_stack_get_base = function() {
                    return (i._emscripten_stack_get_base = i.asm.emscripten_stack_get_base).apply(null, arguments)
                }, i._emscripten_stack_get_end = function() {
                    return (qt = i._emscripten_stack_get_end = i.asm.emscripten_stack_get_end).apply(null, arguments)
                }),
                zt = i.__emscripten_proxy_execute_task_queue = Ee("_emscripten_proxy_execute_task_queue"),
                St = i.__emscripten_thread_free_data = Ee("_emscripten_thread_free_data"),
                Tt = i.__emscripten_thread_exit = Ee("_emscripten_thread_exit"),
                Nt = i._setThrew = Ee("setThrew"),
                Ft = i._emscripten_stack_init = function() {
                    return (Ft = i._emscripten_stack_init = i.asm.emscripten_stack_init).apply(null, arguments)
                },
                Ct = i._emscripten_stack_set_limits = function() {
                    return (Ct = i._emscripten_stack_set_limits = i.asm.emscripten_stack_set_limits).apply(null, arguments)
                },
                Bt = (i._emscripten_stack_get_free = function() {
                    return (i._emscripten_stack_get_free = i.asm.emscripten_stack_get_free).apply(null, arguments)
                }, i.stackSave = Ee("stackSave")),
                Wt = i.stackRestore = Ee("stackRestore"),
                Ht = i.stackAlloc = Ee("stackAlloc"),
                Gt = (i.___cxa_demangle = Ee("__cxa_demangle"), i.___cxa_can_catch = Ee("__cxa_can_catch")),
                Vt = i.___cxa_is_pointer_type = Ee("__cxa_is_pointer_type");

            function Xt(e) {
                this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e
            }

            function Kt(e) {
                if (e = e || a, !(pe > 0)) {
                    if (O || (C(!O), Ft(), ae()), O) return n(i), ue(), void postMessage({
                        cmd: "loaded"
                    });
                    ! function() {
                        if (C(!O), i.preRun)
                            for ("function" == typeof i.preRun && (i.preRun = [i.preRun]); i.preRun.length;) e = i.preRun.shift(), ge.unshift(e);
                        var e;
                        Ye(ge)
                    }(), pe > 0 || (i.setStatus ? (i.setStatus("Running..."), setTimeout((function() {
                        setTimeout((function() {
                            i.setStatus("")
                        }), 1), t()
                    }), 1)) : t(), de())
                }

                function t() {
                    Et || (Et = !0, i.calledRun = !0, F || (ue(), n(i), i.onRuntimeInitialized && i.onRuntimeInitialized(), C(!i._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'), function() {
                        if (de(), !O) {
                            if (i.postRun)
                                for ("function" == typeof i.postRun && (i.postRun = [i.postRun]); i.postRun.length;) e = i.postRun.shift(), fe.unshift(e);
                            var e;
                            Ye(fe)
                        }
                    }()))
                }
            }

            function Qt(e) {
                N = e, be() || (Le.terminateAllThreads(), i.onExit && i.onExit(e), F = !0), g(e, new Xt(e))
            }
            if (i.ccall = function(e, t, n, s, r) {
                    var o = {
                            string: function(e) {
                                var t = 0;
                                if (null != e && 0 !== e) {
                                    var n = 1 + (e.length << 2);
                                    ne(e, t = Ht(n), n)
                                }
                                return t
                            },
                            array: function(e) {
                                var t = Ht(e.length);
                                return ie(e, t), t
                            }
                        },
                        _ = function(e) {
                            var t = i["_" + e];
                            return C(t, "Cannot call unknown function " + e + ", make sure it is exported"), t
                        }(e),
                        c = [],
                        a = 0;
                    if (C("array" !== t, 'Return type should not be "array".'), s)
                        for (var d = 0; d < s.length; d++) {
                            var g = o[n[d]];
                            g ? (0 === a && (a = Bt()), c[d] = g(s[d])) : c[d] = s[d]
                        }
                    var h = _.apply(null, c);
                    return function(e) {
                        return 0 !== a && Wt(a),
                            function(e) {
                                return "string" === t ? ee(e) : "boolean" === t ? Boolean(e) : e
                            }(e)
                    }(h)
                }, L("cwrap", !1), i.allocate = function(e, t) {
                    var n;
                    return C("number" == typeof t, "allocate no longer takes a type argument"), C("number" != typeof e, "allocate no longer takes a number as arg0"), n = 1 == t ? Ht(e.length) : Rt(e.length), e.subarray || e.slice || (e = new Uint8Array(e)), H.set(e, n), n
                }, L("UTF8ArrayToString", !1), i.UTF8ToString = ee, L("stringToUTF8Array", !1), L("stringToUTF8", !1), L("lengthBytesUTF8", !1), L("addOnPreRun", !1), L("addOnInit", !1), L("addOnPreMain", !1), L("addOnExit", !1), L("addOnPostRun", !1), L("addRunDependency", !0), L("removeRunDependency", !0), L("FS_createFolder", !1), L("FS_createPath", !0), L("FS_createDataFile", !0), L("FS_createPreloadedFile", !0), L("FS_createLazyFile", !0), L("FS_createLink", !1), L("FS_createDevice", !0), L("FS_unlink", !0), L("getLEB", !1), L("getFunctionTables", !1), L("alignFunctionTables", !1), L("registerFunctions", !1), L("addFunction", !1), L("removeFunction", !1), L("prettyPrint", !1), L("getCompilerSetting", !1), L("print", !1), L("printErr", !1), L("getTempRet0", !1), L("setTempRet0", !1), L("callMain", !1), L("abort", !1), i.keepRuntimeAlive = be, i.wasmMemory = z, L("warnOnce", !1), L("stackSave", !1), L("stackRestore", !1), L("stackAlloc", !1), L("AsciiToString", !1), L("stringToAscii", !1), L("UTF16ToString", !1), L("stringToUTF16", !1), L("lengthBytesUTF16", !1), L("UTF32ToString", !1), L("stringToUTF32", !1), L("lengthBytesUTF32", !1), L("allocateUTF8", !1), L("allocateUTF8OnStack", !1), i.ExitStatus = Xt, i.intArrayFromString = Ut, L("intArrayToString", !1), L("writeStringToMemory", !1), L("writeArrayToMemory", !1), L("writeAsciiToMemory", !1), i.writeStackCookie = ae, i.checkStackCookie = de, L("ptrToString", !1), L("zeroMemory", !1), L("stringToNewUTF8", !1), L("getHeapMax", !1), L("abortOnCannotGrowMemory", !1), L("emscripten_realloc_buffer", !1), L("ENV", !1), L("ERRNO_CODES", !1), L("ERRNO_MESSAGES", !1), L("setErrNo", !1), L("inetPton4", !1), L("inetNtop4", !1), L("inetPton6", !1), L("inetNtop6", !1), L("readSockaddr", !1), L("writeSockaddr", !1), L("DNS", !1), L("getHostByName", !1), L("Protocols", !1), L("Sockets", !1), L("getRandomDevice", !1), L("traverseStack", !1), L("UNWIND_CACHE", !1), L("convertPCtoSourceLocation", !1), L("readAsmConstArgsArray", !1), L("readAsmConstArgs", !1), L("mainThreadEM_ASM", !1), L("jstoi_q", !1), L("jstoi_s", !1), L("getExecutableName", !1), L("listenOnce", !1), L("autoResumeAudioContext", !1), L("getDynCaller", !1), L("dynCall", !1), L("handleException", !1), L("runtimeKeepalivePush", !1), L("runtimeKeepalivePop", !1), L("callUserCallback", !1), L("maybeExit", !1), L("safeSetTimeout", !1), L("asmjsMangle", !1), L("asyncLoad", !1), L("alignMemory", !1), L("mmapAlloc", !1), L("writeI53ToI64", !1), L("writeI53ToI64Clamped", !1), L("writeI53ToI64Signaling", !1), L("writeI53ToU64Clamped", !1), L("writeI53ToU64Signaling", !1), L("readI53FromI64", !1), L("readI53FromU64", !1), L("convertI32PairToI53", !1), L("convertI32PairToI53Checked", !1), L("convertU32PairToI53", !1), L("MAX_INT53", !1), L("MIN_INT53", !1), L("bigintToI53Checked", !1), L("reallyNegative", !1), L("unSign", !1), L("strLen", !1), L("reSign", !1), L("formatString", !1), L("setValue", !1), L("getValue", !1), L("PATH", !1), L("PATH_FS", !1), L("SYSCALLS", !1), L("getSocketFromFD", !1), L("getSocketAddress", !1), L("JSEvents", !1), L("registerKeyEventCallback", !1), L("specialHTMLTargets", !1), L("maybeCStringToJsString", !1), L("findEventTarget", !1), L("findCanvasEventTarget", !1), L("getBoundingClientRect", !1), L("fillMouseEventData", !1), L("registerMouseEventCallback", !1), L("registerWheelEventCallback", !1), L("registerUiEventCallback", !1), L("registerFocusEventCallback", !1), L("fillDeviceOrientationEventData", !1), L("registerDeviceOrientationEventCallback", !1), L("fillDeviceMotionEventData", !1), L("registerDeviceMotionEventCallback", !1), L("screenOrientation", !1), L("fillOrientationChangeEventData", !1), L("registerOrientationChangeEventCallback", !1), L("fillFullscreenChangeEventData", !1), L("registerFullscreenChangeEventCallback", !1), L("JSEvents_requestFullscreen", !1), L("JSEvents_resizeCanvasForFullscreen", !1), L("registerRestoreOldStyle", !1), L("hideEverythingExceptGivenElement", !1), L("restoreHiddenElements", !1), L("setLetterbox", !1), L("currentFullscreenStrategy", !1), L("restoreOldWindowedStyle", !1), L("softFullscreenResizeWebGLRenderTarget", !1), L("doRequestFullscreen", !1), L("fillPointerlockChangeEventData", !1), L("registerPointerlockChangeEventCallback", !1), L("registerPointerlockErrorEventCallback", !1), L("requestPointerLock", !1), L("fillVisibilityChangeEventData", !1), L("registerVisibilityChangeEventCallback", !1), L("registerTouchEventCallback", !1), L("fillGamepadEventData", !1), L("registerGamepadEventCallback", !1), L("registerBeforeUnloadEventCallback", !1), L("fillBatteryEventData", !1), L("battery", !1), L("registerBatteryEventCallback", !1), L("setCanvasElementSize", !1), L("getCanvasElementSize", !1), L("demangle", !1), L("demangleAll", !1), L("jsStackTrace", !1), L("stackTrace", !1), L("getEnvStrings", !1), L("checkWasiClock", !1), L("doReadv", !1), L("doWritev", !1), L("dlopenMissingError", !1), L("setImmediateWrapped", !1), L("clearImmediateWrapped", !1), L("polyfillSetImmediate", !1), L("uncaughtExceptionCount", !1), L("exceptionLast", !1), L("exceptionCaught", !1), L("ExceptionInfo", !1), L("exception_addRef", !1), L("exception_decRef", !1), L("incrementExceptionRefcount", !1), L("decrementExceptionRefcount", !1), L("getExceptionMessage", !1), L("Browser", !1), L("setMainLoop", !1), L("wget", !1), i.FS = nt, L("MEMFS", !1), L("TTY", !1), L("PIPEFS", !1), L("SOCKFS", !1), L("_setNetworkCallback", !1), L("tempFixedLengthArray", !1), L("miniTempWebGLFloatBuffers", !1), L("heapObjectForWebGLType", !1), L("heapAccessShiftForWebGLHeap", !1), L("GL", !1), L("emscriptenWebGLGet", !1), L("computeUnpackAlignedImageSize", !1), L("emscriptenWebGLGetTexPixelData", !1), L("emscriptenWebGLGetUniform", !1), L("webglGetUniformLocation", !1), L("webglPrepareUniformLocationsBeforeFirstUse", !1), L("webglGetLeftBracePos", !1), L("emscriptenWebGLGetVertexAttrib", !1), L("writeGLArray", !1), L("AL", !1), L("SDL_unicode", !1), L("SDL_ttfContext", !1), L("SDL_audio", !1), L("SDL", !1), L("SDL_gfx", !1), L("GLUT", !1), L("EGL", !1), L("GLFW_Window", !1), L("GLFW", !1), L("GLEW", !1), L("IDBStore", !1), L("runAndAbortIfError", !1), i.PThread = Le, L("killThread", !1), L("cleanupThread", !1), L("registerTLSInit", !1), L("cancelThread", !1), L("spawnThread", !1), L("exitOnMainThread", !1), L("invokeEntryPoint", !1), L("executeNotifiedProxyingQueue", !1), i.ALLOC_NORMAL = 0, Dt = "ALLOC_STACK", !1, Object.getOwnPropertyDescriptor(i, Dt) || Object.defineProperty(i, Dt, {
                    configurable: !0,
                    get: function() {
                        Pe(R(Dt, false))
                    }
                }), me = function e() {
                    Et || Kt(), Et || (me = e)
                }, i.run = Kt, i.preInit)
                for ("function" == typeof i.preInit && (i.preInit = [i.preInit]); i.preInit.length > 0;) i.preInit.pop()();
            return Kt(), t.ready
        }
})();
"object" == typeof exports && "object" == typeof module ? module.exports = initZ3 : "function" == typeof define && define.amd ? define([], (function() {
    return initZ3
})) : "object" == typeof exports && (exports.initZ3 = initZ3);
