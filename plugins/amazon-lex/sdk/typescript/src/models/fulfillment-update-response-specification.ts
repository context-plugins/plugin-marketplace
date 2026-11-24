import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageGroupSchema, type MessageGroup } from "./message-group.js";

export type FulfillmentUpdateResponseSpecification = {
  /**
   * The frequency that a message is sent to the user. When the period ends, Amazon Lex chooses a
   * message from the message groups and plays it to the user. If the fulfillment Lambda returns
   * before the first period ends, an update message is not played to the user.
   */
  frequencyInSeconds: number;
  /**
   * 1 - 5 message groups that contain update messages. Amazon Lex chooses one of the messages to
   * play to the user.
   */
  messageGroups: MessageGroup[];
  /** Determines whether the user can interrupt an update message while it is playing. */
  allowInterrupt?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fulfillmentUpdateResponseSpecificationSchema: Schema<FulfillmentUpdateResponseSpecification> =
  s.object<FulfillmentUpdateResponseSpecification>(
    {
      frequencyInSeconds: s.int(),
      messageGroups: s.array(s.lazy(() => messageGroupSchema)),
      allowInterrupt: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
