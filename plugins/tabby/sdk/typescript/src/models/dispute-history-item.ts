import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventTypeSchema, type EventType } from "./event-type.js";
import { sourceSchema, type Source } from "./source.js";

export type DisputeHistoryItem = {
  /** Array of links to images which were uploaded by customer or merchant. */
  attachments: string[];
  /**
   * Date and time of creation of dispute history items, in UTC, and displayed in ISO 8601 datetime
   * format.
   */
  createdAt: string;
  /**
   * Indicates the entity responsible for the creation of the record. It can take one of the
   * following values:
   *   - If `source` is set to `customer`, this field will contain the email address of the
   *     customer;
   *   - If `source` is set to `merchant` and the action was performed through the
   *     merchant-dashboard, then field will contain the email address of the dashboard user;
   *   - If `source` is set to `merchant` and the action was performed through the Disputes API,
   *     this field will contain the constant value 'Disputes API';
   *   - If `source` is set to `tabby-support`, this field will be empty.
   */
  createdBy: string;
  /**
   * Contains additional information or comments related to the performed action. It can take one of
   * the following values:
   *   - If `source` is set to `customer`, this field will contain the customer's comment.
   *   - If `source` is set to `merchant`, this field will contain the reason for the challenge.
   *   - If `source` is set to `tabby-support`, this field will be empty.
   */
  content: string;
  /**
   * This field specifies author that led to the creation of the record. It can take one of the
   * following values:
   *   - `customer`: Indicates that the action was initiated by a customer;
   *   - `merchant`: Indicates that the action was initiated by a merchant;
   *   - `tabby-support`: Indicates that the action was initiated by Tabby support.
   */
  source: Source;
  /**
   * The event type of the dispute history item:
   *   - `dispute_created` - the customer raised a dispute;
   *   - `dispute_approved` - disputed was approved and amount was refunded to customer;
   *   - `dispute_declined` - dispute was declined by Tabby support;
   *   - `dispute_canceled` - dispute was canceled by customer;
   *   - `dispute_in_arbitration` - merchant challenged dispute (e.g incorrect amount);
   *   - `dispute_amount_changed` - disputed amount was changed;
   *   - `dispute_comment_added` - merchant added comment to the dispute;
   *   - `evidence_merchant` - agent requested evidence from the merchant;
   *   - `evidence_customer` - agent requested evidence from the customer;
   *   - `evidence_merchant_provided` - merchant provided evidence;
   *   - `evidence_customer_provided` - customer provided evidence;
   *   - `merchant_14d_unresponsive` - merchant did not respond within 14 days;
   *   - `customer_14d_unresponsive` - customer did not respond within 14 days.
   */
  eventType: EventType;
  /** Contains additional message provided by merchant while perform action. */
  note?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disputeHistoryItemSchema: Schema<DisputeHistoryItem> = s.object<DisputeHistoryItem>(
  {
    attachments: s.array(s.string()),
    createdAt: s.string(),
    createdBy: s.string(),
    content: s.string(),
    source: sourceSchema,
    eventType: eventTypeSchema,
    note: s.optional(s.string()),
    _keysMap: {
      createdAt: "created_at",
      createdBy: "created_by",
      eventType: "event_type",
    },
  },
  { additionalProperties: s.json() },
);
