import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reason1Schema, type Reason1 } from "./reason1.js";

export type TransferFailedRequestMessage = {
  /**
   * Message type for the client to inform the bot that the client failed to transfer the session to
   * another target.
   *
   * @default "transferFailed"
   */
  type?: "transferFailed";
  /**
   * Client-generated sequence number of the message in a session. Increase this number for each
   * subsequent message.
   */
  sequenceId: number;
  /** Message ID of the previous response you are replying to. */
  inReplyToMessageId?: string;
  /** Reason for the failed transfer. */
  reason: Reason1;
  /** Description of why the transfer failed. */
  description?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transferFailedRequestMessageSchema: Schema<TransferFailedRequestMessage> =
  s.object<TransferFailedRequestMessage>(
    {
      type: s.defaulted(s.literal("transferFailed"), "transferFailed"),
      sequenceId: s.int(),
      inReplyToMessageId: s.optional(s.string()),
      reason: reason1Schema,
      description: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
