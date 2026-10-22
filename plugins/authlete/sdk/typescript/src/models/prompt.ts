import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The prompt that the UI displayed to the end-user must satisfy as the minimum level. This value
 * comes from `prompt` request parameter.
 *
 * When the authorization request does not contain `prompt` request parameter, `CONSENT` is used as
 * the default value.
 *
 * See "[OpenID Connect Core 1.0, 3.1.2.1. Authentication
 * Request](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest), prompt" for `prompt`
 * request parameter.
 */
export const Prompt = {
  None: "NONE",
  Login: "LOGIN",
  Consent: "CONSENT",
  SelectAccount: "SELECT_ACCOUNT",
  Create: "CREATE",
} as const;
export type Prompt = (typeof Prompt)[keyof typeof Prompt] | (string & {});

export const promptSchema: EnumSchema<Prompt> = s.enumOf<Prompt>(Prompt);
