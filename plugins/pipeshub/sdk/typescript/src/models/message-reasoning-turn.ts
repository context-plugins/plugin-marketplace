import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * One model turn's chain-of-thought. Persisted only when reasoning persistence is enabled; the
 * array is empty otherwise.
 */
export type MessageReasoningTurn = {
  messageId?: string;
  turnIndex?: number;
  content: string;
};

export const messageReasoningTurnSchema: Schema<MessageReasoningTurn> = s.object<MessageReasoningTurn>({
  messageId: s.optional(s.string()),
  turnIndex: s.optional(s.float64()),
  content: s.string(),
});
