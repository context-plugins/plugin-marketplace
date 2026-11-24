import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether ACME clients must provide contact information during account registration. */
export const Contact = {
  Required: "REQUIRED",
  NotRequired: "NOT_REQUIRED",
} as const;
export type Contact = (typeof Contact)[keyof typeof Contact] | (string & {});

export const contactSchema: EnumSchema<Contact> = s.enumOf<Contact>(Contact);
