import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The email address of the passenger. */
export type EmailAddress1 = string;

export const emailAddress1Schema: Schema<EmailAddress1> = s.of<EmailAddress1>(s.union([s.string()]));
