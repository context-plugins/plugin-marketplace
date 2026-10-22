import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ID of the conversation of which the session is a part */
export type ConversationId2 = string;

export const conversationId2Schema: Schema<ConversationId2> = s.of<ConversationId2>(s.union([s.string()]));
