import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { conversationPropertiesSchema, type ConversationProperties } from "../conversation-properties.js";

/** The fields to include in the response */
export type Fields3 = ConversationProperties[];

export const fields3Schema: Schema<Fields3> = s.of<Fields3>(
  s.union([s.array(s.lazy(() => conversationPropertiesSchema))]),
);
