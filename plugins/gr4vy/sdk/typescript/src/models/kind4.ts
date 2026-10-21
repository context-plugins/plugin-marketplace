import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of authentication for webhook request. */
export const Kind4 = {
  OauthPassword: "oauth_password",
} as const;
export type Kind4 = (typeof Kind4)[keyof typeof Kind4] | (string & {});

export const kind4Schema: EnumSchema<Kind4> = s.enumOf<Kind4>(Kind4);
