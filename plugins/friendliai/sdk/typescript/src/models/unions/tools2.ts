import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { messagesToolDefinitionSchema, type MessagesToolDefinition } from "../messages-tool-definition.js";

/**
 * Tool definitions available to the model. Use this to allow tool calls with structured arguments.
 */
export type Tools2 = MessagesToolDefinition[];

export const tools2Schema: Schema<Tools2> = s.of<Tools2>(
  s.union([s.array(s.lazy(() => messagesToolDefinitionSchema))]),
);
