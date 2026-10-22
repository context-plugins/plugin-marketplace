import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The email address for this user. */
export type EmailAddress2 = string;

export const emailAddress2Schema: Schema<EmailAddress2> = s.of<EmailAddress2>(s.union([s.string()]));
