import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authTypeSchema, type AuthType } from "./unions/auth-type.js";
import { authValues2Schema, type AuthValues2 } from "./unions/auth-values2.js";

/** Request model to create a service. */
export type ServiceCreateRequest = {
  /** The name of the service */
  name: string;
  /** The description of the service */
  description: string;
  /** The type of authentication to use for the service's tools */
  authType?: AuthType;
  /**
   * The values to use for the authentication, as a dict. Should contain "username" and "password"
   * keys if auth type is basic, "token" key if auth type is bearer, arbitrary header keys if auth
   * type is custom_headers. or "client_id", "client_secret", and "auth_url" keys if auth type is
   * oauth2. On an update, leave a value for a given key null and the value in the database will not
   * be updated. (If a key is omitted entirely, any existing value for that key will be removed.)
   */
  authValues?: AuthValues2;
};

export const serviceCreateRequestSchema: Schema<ServiceCreateRequest> = s.object<ServiceCreateRequest>({
  name: s.string(),
  description: s.string(),
  authType: s.optional(s.lazy(() => authTypeSchema)),
  authValues: s.optional(s.lazy(() => authValues2Schema)),
  _keysMap: {
    authType: "auth_type",
    authValues: "auth_values",
  },
});
