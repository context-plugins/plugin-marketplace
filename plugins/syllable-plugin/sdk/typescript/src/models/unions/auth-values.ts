import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { authValues1Schema, type AuthValues1 } from "./auth-values1.js";

/**
 * Optional dict of auth values. Currently, only the key "hmac_secret" is allowed; value must be
 * standard Base64 (RFC 4648) decoding to 32–512 bytes of key material. On update, leave a value for
 * a given key null and the stored value for that key is kept. (If a key is omitted entirely, any
 * existing value for that key is removed.)
 */
export type AuthValues = Record<string, AuthValues1>;

export const authValuesSchema: Schema<AuthValues> = s.of<AuthValues>(
  s.union([
    s.record(
      s.string(),
      s.lazy(() => authValues1Schema),
    ),
  ]),
);
