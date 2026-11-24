import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";
import { statusSchema, type Status } from "./status.js";

/**
 * Per-recipient result returned synchronously after the trigger request. Accepted recipients are
 * queued for delivery; check the send status endpoint for delivery confirmation.
 */
export type CampaignSendResult = {
  /** Delivery address of the recipient, present for inline (`handle`) recipients. */
  handle?: string;
  /**
   * Primary key of the recipient as configured on the Personalization API sync, present for profile
   * (`id`) recipients.
   */
  id?: string;
  /** Whether this recipient was accepted for delivery or rejected at validation time. */
  status: Status;
  /**
   * Unique identifier for this send, present when `status` is `"accepted"`. Use with `POST
   * /campaigns/{id}/sends/batch-get` to poll for delivery status; it accepts up to 100 `sendId`
   * values per request.
   */
  sendId?: string;
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
  reason?: Reason;
  /**
   * Names of the required template variables absent from the recipient's data, present when
   * `reason` is `"missing_variables"`.
   */
  missingVariables?: string[];
};

export const campaignSendResultSchema: Schema<CampaignSendResult> = s.object<CampaignSendResult>({
  handle: s.optional(s.string()),
  id: s.optional(s.string()),
  status: statusSchema,
  sendId: s.optional(s.string()),
  reason: s.optional(s.lazy(() => reasonSchema)),
  missingVariables: s.optional(s.array(s.string())),
});
