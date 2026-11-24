import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessageSent = {
  messageId?: string | null;
  externalDocumentId?: string | null;
};

export const messageSentSchema: Schema<MessageSent> = s.object<MessageSent>({
  messageId: s.optionalNullable(s.string()),
  externalDocumentId: s.optionalNullable(s.string()),
});
