import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The values to use for the authentication, as a dict. Should contain "username" and "password"
 * keys if auth type is basic, "token" key if auth type is bearer, arbitrary header keys if auth
 * type is custom_headers. or "client_id", "client_secret", and "auth_url" keys if auth type is
 * oauth2. On an update, leave a value for a given key null and the value in the database will not
 * be updated. (If a key is omitted entirely, any existing value for that key will be removed.)
 */
export type AuthValues2 = Record<string, unknown>;

export const authValues2Schema: Schema<AuthValues2> = s.of<AuthValues2>(
  s.union([s.record(s.string(), s.unknown())]),
);
