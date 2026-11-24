import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Identifier for this interaction. Pass as previous_interaction_id for follow-ups. */
export type InteractionId = string;

export const interactionIdSchema: Schema<InteractionId> = s.of<InteractionId>(s.union([s.string()]));
