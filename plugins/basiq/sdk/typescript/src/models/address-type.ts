import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of address object present. */
export const AddressType = {
  Paf: "paf",
  Simple: "simple",
} as const;
export type AddressType = (typeof AddressType)[keyof typeof AddressType] | (string & {});

export const addressTypeSchema: EnumSchema<AddressType> = s.enumOf<AddressType>(AddressType);
