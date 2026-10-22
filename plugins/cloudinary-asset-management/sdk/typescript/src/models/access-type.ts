import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of access control to apply to the asset. */
export const AccessType = {
  Token: "token",
  Anonymous: "anonymous",
} as const;
export type AccessType = (typeof AccessType)[keyof typeof AccessType] | (string & {});

export const accessTypeSchema: EnumSchema<AccessType> = s.enumOf<AccessType>(AccessType);
