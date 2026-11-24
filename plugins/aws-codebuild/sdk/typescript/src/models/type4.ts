import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The authorization type to use. Valid options are OAUTH, CODECONNECTIONS, or SECRETS_MANAGER. */
export const Type4 = {
  Oauth: "OAUTH",
  Codeconnections: "CODECONNECTIONS",
  SecretsManager: "SECRETS_MANAGER",
} as const;
export type Type4 = (typeof Type4)[keyof typeof Type4] | (string & {});

export const type4Schema: EnumSchema<Type4> = s.enumOf<Type4>(Type4);
