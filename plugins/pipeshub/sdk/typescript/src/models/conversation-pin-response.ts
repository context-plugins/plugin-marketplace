import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { meta4Schema, type Meta4 } from "./meta4.js";

export type ConversationPinResponse = {
  /** Conversation identifier */
  id: string;
  /** The conversation's pin state after the call. */
  isPinned: boolean;
  meta: Meta4;
};

export const conversationPinResponseSchema: Schema<ConversationPinResponse> =
  s.object<ConversationPinResponse>({
    id: s.string(),
    isPinned: s.boolean(),
    meta: meta4Schema,
  });
