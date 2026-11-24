import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Interaction ID from a previous chat completion to use as context., Interaction ID to use as
 * context for this request.
 */
export type PreviousInteractionId = string;

export const previousInteractionIdSchema: Schema<PreviousInteractionId> = s.of<PreviousInteractionId>(
  s.union([s.string()]),
);
