import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The name of the field to use for filtering. */
export const Name26 = {
  SlotTypeName: "SlotTypeName",
  ExternalSourceType: "ExternalSourceType",
} as const;
export type Name26 = (typeof Name26)[keyof typeof Name26] | (string & {});

export const name26Schema: EnumSchema<Name26> = s.enumOf<Name26>(Name26);
