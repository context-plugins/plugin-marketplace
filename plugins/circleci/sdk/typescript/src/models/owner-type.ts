import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OwnerType = {
  Account: "account",
  Organization: "organization",
} as const;
export type OwnerType = (typeof OwnerType)[keyof typeof OwnerType] | (string & {});

export const ownerTypeSchema: EnumSchema<OwnerType> = s.enumOf<OwnerType>(OwnerType);
