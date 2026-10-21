import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ForkedFrom = {
  conversationId: string;
  messageId: string;
};

export const forkedFromSchema: Schema<ForkedFrom> = s.object<ForkedFrom>({
  conversationId: s.string(),
  messageId: s.string(),
});
