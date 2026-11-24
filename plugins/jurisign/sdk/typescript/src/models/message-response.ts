import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MessageResponse = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const messageResponseSchema: Schema<MessageResponse> = s.object<MessageResponse>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
