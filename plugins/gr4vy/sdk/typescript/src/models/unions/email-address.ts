import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The email address of the user that created the API key pair, when it was created by a dashboard
 * user.
 */
export type EmailAddress = string;

export const emailAddressSchema: Schema<EmailAddress> = s.of<EmailAddress>(s.union([s.string()]));
