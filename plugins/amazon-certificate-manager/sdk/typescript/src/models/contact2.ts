import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies whether ACME clients must provide contact information during account registration. */
export const Contact2 = {
  Required: "REQUIRED",
  NotRequired: "NOT_REQUIRED",
} as const;
export type Contact2 = (typeof Contact2)[keyof typeof Contact2] | (string & {});

export const contact2Schema: EnumSchema<Contact2> = s.enumOf<Contact2>(Contact2);
