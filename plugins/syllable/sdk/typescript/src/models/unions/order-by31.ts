import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { conversationPropertiesSchema, type ConversationProperties } from "../conversation-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy31 = ConversationProperties;

export const orderBy31Schema: Schema<OrderBy31> = s.of<OrderBy31>(
  s.union([s.lazy(() => conversationPropertiesSchema)]),
);
