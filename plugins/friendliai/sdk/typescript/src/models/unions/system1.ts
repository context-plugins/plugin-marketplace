import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  messagesSystemTextBlockSchema,
  type MessagesSystemTextBlock,
} from "../messages-system-text-block.js";

/** Payload format for the top-level `system` instruction. */
export type System1 = string | MessagesSystemTextBlock[];

export const system1Schema: Schema<System1> = s.of<System1>(
  s.union([s.string(), s.array(s.lazy(() => messagesSystemTextBlockSchema))]),
);
