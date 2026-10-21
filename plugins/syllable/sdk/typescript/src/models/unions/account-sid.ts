import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** SID of the Twilio account */
export type AccountSid = string;

export const accountSidSchema: Schema<AccountSid> = s.of<AccountSid>(s.union([s.string()]));
