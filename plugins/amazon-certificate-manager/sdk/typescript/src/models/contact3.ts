import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The updated contact requirement. */
export const Contact3 = {
  Required: "REQUIRED",
  NotRequired: "NOT_REQUIRED",
} as const;
export type Contact3 = (typeof Contact3)[keyof typeof Contact3] | (string & {});

export const contact3Schema: EnumSchema<Contact3> = s.enumOf<Contact3>(Contact3);
