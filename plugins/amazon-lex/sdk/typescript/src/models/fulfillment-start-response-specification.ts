import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageGroupSchema, type MessageGroup } from "./message-group.js";

export type FulfillmentStartResponseSpecification = {
  /**
   * The delay between when the Lambda fulfillment function starts running and the start message is
   * played. If the Lambda function returns before the delay is over, the start message isn't
   * played.
   */
  delayInSeconds: number;
  /**
   * 1 - 5 message groups that contain start messages. Amazon Lex chooses one of the messages to
   * play to the user.
   */
  messageGroups: MessageGroup[];
  /** Determines whether the user can interrupt the start message while it is playing. */
  allowInterrupt?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fulfillmentStartResponseSpecificationSchema: Schema<FulfillmentStartResponseSpecification> =
  s.object<FulfillmentStartResponseSpecification>(
    {
      delayInSeconds: s.int(),
      messageGroups: s.array(s.lazy(() => messageGroupSchema)),
      allowInterrupt: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
