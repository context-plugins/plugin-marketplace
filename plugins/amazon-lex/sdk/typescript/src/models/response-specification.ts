import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageGroupSchema, type MessageGroup } from "./message-group.js";

export type ResponseSpecification = {
  /**
   * A collection of responses that Amazon Lex can send to the user. Amazon Lex chooses the actual
   * response to send at runtime.
   */
  messageGroups: MessageGroup[];
  /** Indicates whether the user can interrupt a speech response from Amazon Lex. */
  allowInterrupt?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseSpecificationSchema: Schema<ResponseSpecification> = s.object<ResponseSpecification>(
  {
    messageGroups: s.array(s.lazy(() => messageGroupSchema)),
    allowInterrupt: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
