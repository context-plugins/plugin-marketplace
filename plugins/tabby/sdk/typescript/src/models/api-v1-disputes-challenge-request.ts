import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";

export type ApiV1DisputesChallengeRequest = {
  /** ID of the dispute */
  disputeId: string;
  /** Comment for Tabby support. */
  description: string;
  /**
   * Reason for requesting dispute challenge:
   *   - `merchant_reason_other` - there were other problems with the order that required further
   *     clarification;
   *   - `merchant_reason_order_on_its_way` - the order has been confirmed and is in the process of
   *     being delivered;
   *   - `merchant_reason_order_has_been_already_delivered` - the order has already been delivered
   *     and is complete;
   *   - `merchant_reason_order_amount_should_be_different` - there was a problem with the amount of
   *     the order and it needed to be changed;
   *   - `merchant_reason_problem_with_delivery` - there was a problem with the order during
   *     delivery that needed to be adjusted and resolved.
   */
  reason: Reason;
  /**
   * If the dispute challenged with reason `merchant_reason_order_amount_should_be_different` - a
   * new disputed amount is required.
   */
  amount?: string;
  /** Attachment ID that will be attached. ID can be received via `upload attachment` endpoint. */
  attachmentIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1DisputesChallengeRequestSchema: Schema<ApiV1DisputesChallengeRequest> =
  s.object<ApiV1DisputesChallengeRequest>(
    {
      disputeId: s.string(),
      description: s.string(),
      reason: reasonSchema,
      amount: s.optional(s.string()),
      attachmentIds: s.optional(s.array(s.string())),
      _keysMap: {
        disputeId: "dispute_id",
        attachmentIds: "attachment_ids",
      },
    },
    { additionalProperties: s.json() },
  );
