import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Email address of the buyer to match. */
export type EmailAddress7 = string;

export const emailAddress7Schema: Schema<EmailAddress7> = s.of<EmailAddress7>(s.union([s.string()]));
