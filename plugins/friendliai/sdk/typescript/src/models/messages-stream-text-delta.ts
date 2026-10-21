import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagesStreamTextDelta = {
  /** Delta type. @default "text_delta" */
  type?: "text_delta";
  /** Text fragment when `type=text_delta`. */
  text: string;
};

export const messagesStreamTextDeltaSchema: Schema<MessagesStreamTextDelta> =
  s.object<MessagesStreamTextDelta>({
    type: s.defaulted(s.literal("text_delta"), "text_delta"),
    text: s.string(),
  });
