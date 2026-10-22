import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ID of the conversation associated with the session in which the event occurred */
export type ConversationId1 = string;

export const conversationId1Schema: Schema<ConversationId1> = s.of<ConversationId1>(s.union([s.string()]));
