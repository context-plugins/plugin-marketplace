import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Reason for rejection, present when `status` is `"rejected"`.
 * - `invalid_handle` — the delivery address is not a valid email or phone number
 * - `missing_variables` — one or more required template variables are absent (`handle` recipients
 *   only; `id` recipients are checked at send time)
 * - `invalid_id` — the profile ID is empty or missing
 * - `missing_handle_or_id` — the recipient has neither `handle` nor `id`
 * - `invalid_locale` — the `locale` is empty or longer than 7 characters
 * - `whatsapp_marketing_us_number` — the message uses a marketing WhatsApp template, which Meta
 *   does not deliver to US phone numbers
 */
export const Reason = {
  InvalidHandle: "invalid_handle",
  MissingVariables: "missing_variables",
  InvalidId: "invalid_id",
  MissingHandleOrId: "missing_handle_or_id",
  InvalidLocale: "invalid_locale",
  WhatsappMarketingUsNumber: "whatsapp_marketing_us_number",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
