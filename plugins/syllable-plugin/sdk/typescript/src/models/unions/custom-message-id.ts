import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Internal ID of the custom message that should be delivered at the beginning of a conversation
 * with the agent
 */
export type CustomMessageId = number;

export const customMessageIdSchema: Schema<CustomMessageId> = s.of<CustomMessageId>(s.union([s.int()]));
