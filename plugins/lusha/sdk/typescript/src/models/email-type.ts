import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of email address (alternative to 'type') */
export const EmailType = {
  Work: "work",
  Private: "private",
} as const;
export type EmailType = (typeof EmailType)[keyof typeof EmailType] | (string & {});

export const emailTypeSchema: EnumSchema<EmailType> = s.enumOf<EmailType>(EmailType);
