import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsTitleRequest = {
  /** New conversation title */
  title: string;
};

export const conversationsTitleRequestSchema: Schema<ConversationsTitleRequest> =
  s.object<ConversationsTitleRequest>({
    title: s.string(),
  });
