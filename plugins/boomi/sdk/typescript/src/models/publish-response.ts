import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response returned after successfully publishing messages. */
export type PublishResponse = {
  /** Status of the publish operation. */
  status?: string;
  /** Comma-separated list of message IDs assigned to the published messages. */
  messageIds?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publishResponseSchema: Schema<PublishResponse> = s.object<PublishResponse>(
  {
    status: s.optional(s.string()),
    messageIds: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
