import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatSchema, type Chat } from "./chat.js";

export type ChatResult = {
  /** A historical representation of a series of chat messages a user had with Glean Assistant. */
  chat?: Chat;
  /** An opaque token that represents this particular Chat. To be used for `/feedback` reporting. */
  trackingToken?: string;
};

export const chatResultSchema: Schema<ChatResult> = s.object<ChatResult>({
  chat: s.optional(s.lazy(() => chatSchema)),
  trackingToken: s.optional(s.string()),
});
