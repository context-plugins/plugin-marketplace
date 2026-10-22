import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Unique ID for conversation */
export type ConversationId = number;

export const conversationIdSchema: Schema<ConversationId> = s.of<ConversationId>(s.union([s.int()]));
