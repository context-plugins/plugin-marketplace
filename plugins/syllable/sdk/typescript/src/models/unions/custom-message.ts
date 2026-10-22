import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { customMessageResponseSchema, type CustomMessageResponse } from "../custom-message-response.js";

/**
 * The message associated with the agent. Will be delivered as a greeting at the beginning of a
 * conversation.
 */
export type CustomMessage = CustomMessageResponse;

export const customMessageSchema: Schema<CustomMessage> = s.of<CustomMessage>(
  s.union([s.lazy(() => customMessageResponseSchema)]),
);
