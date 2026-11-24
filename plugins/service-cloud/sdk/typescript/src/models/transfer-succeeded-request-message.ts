import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TransferSucceededRequestMessage = {
  /**
   * Message type for the client to inform the bot that the client successfully transferred the
   * session to another target.
   *
   * @default "transferSucceeded"
   */
  type?: "transferSucceeded";
  /**
   * Client-generated sequence number of the message in a session. Increase this number for each
   * subsequent message.
   */
  sequenceId: number;
  /** Message ID of the previous response you are replying to. */
  inReplyToMessageId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transferSucceededRequestMessageSchema: Schema<TransferSucceededRequestMessage> =
  s.object<TransferSucceededRequestMessage>(
    {
      type: s.defaulted(s.literal("transferSucceeded"), "transferSucceeded"),
      sequenceId: s.int(),
      inReplyToMessageId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
