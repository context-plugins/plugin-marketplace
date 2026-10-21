import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of principal. */
export const PrincipalType = {
  User: "user",
  Group: "group",
  ApiKey: "apiKey",
} as const;
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType] | (string & {});

export const principalTypeSchema: EnumSchema<PrincipalType> = s.enumOf<PrincipalType>(PrincipalType);
