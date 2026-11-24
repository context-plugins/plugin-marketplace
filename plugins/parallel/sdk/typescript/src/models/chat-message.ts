import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { role1Schema, type Role1 } from "./role1.js";
import { name2Schema, type Name2 } from "./unions/name2.js";

/** Chat message for OpenAI API. */
export type ChatMessage = {
  /** The role of the chat message. */
  role: Role1;
  /** The content of the chat message. */
  content: string;
  /**
   * An optional name for the participant. Provides the model information to differentiate between
   * participants of the same role.
   */
  name?: Name2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chatMessageSchema: Schema<ChatMessage> = s.object<ChatMessage>(
  {
    role: role1Schema,
    content: s.string(),
    name: s.optional(s.lazy(() => name2Schema)),
  },
  { additionalProperties: s.json() },
);
