import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** An identified group is not restricted. */
export const IsIdentityRestricted = {
  False: "false",
} as const;
export type IsIdentityRestricted =
  | (typeof IsIdentityRestricted)[keyof typeof IsIdentityRestricted]
  | (string & {});

export const isIdentityRestrictedSchema: EnumSchema<IsIdentityRestricted> =
  s.enumOf<IsIdentityRestricted>(IsIdentityRestricted);
