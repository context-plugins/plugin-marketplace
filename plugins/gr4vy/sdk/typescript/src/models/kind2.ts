import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of authentication for webhook request. */
export const Kind2 = {
  OauthClientCredentials: "oauth_client_credentials",
} as const;
export type Kind2 = (typeof Kind2)[keyof typeof Kind2] | (string & {});

export const kind2Schema: EnumSchema<Kind2> = s.enumOf<Kind2>(Kind2);
