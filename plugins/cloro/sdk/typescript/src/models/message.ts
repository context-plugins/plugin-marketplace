import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Event payload describing the assistant message */
export type Message = {
  id?: string;
  role?: string;
  model?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const messageSchema: Schema<Message> = s.object<Message>(
  {
    id: s.optional(s.string()),
    role: s.optional(s.string()),
    model: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
