import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The email address for the buyer. */
export type EmailAddress3 = string;

export const emailAddress3Schema: Schema<EmailAddress3> = s.of<EmailAddress3>(s.union([s.string()]));
