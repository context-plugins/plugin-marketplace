import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageGroupSchema, type MessageGroup } from "./message-group.js";

export type StillWaitingResponseSpecification = {
  /**
   * One or more message groups, each containing one or more messages, that define the prompts that
   * Amazon Lex sends to the user.
   */
  messageGroups: MessageGroup[];
  /** How often a message should be sent to the user. Minimum of 1 second, maximum of 5 minutes. */
  frequencyInSeconds: number;
  /**
   * If Amazon Lex waits longer than this length of time for a response, it will stop sending
   * messages.
   */
  timeoutInSeconds: number;
  /**
   * Indicates that the user can interrupt the response by speaking while the message is being
   * played.
   */
  allowInterrupt?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stillWaitingResponseSpecificationSchema: Schema<StillWaitingResponseSpecification> =
  s.object<StillWaitingResponseSpecification>(
    {
      messageGroups: s.array(s.lazy(() => messageGroupSchema)),
      frequencyInSeconds: s.int(),
      timeoutInSeconds: s.int(),
      allowInterrupt: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
