import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { context4Schema, type Context4 } from "./context4.js";
import { interactionSchema, type Interaction } from "./interaction.js";
import { journeySchema, type Journey } from "./journey.js";

export type JourneyInteractionFetchResponse = {
  /** Journey instance identifier */
  instanceId: string;
  /** Interaction identifier */
  interactionId: string;
  journey: Journey;
  interaction: Interaction;
  context?: Context4;
  instructions?: string[];
  outstanding?: string[];
};

export const journeyInteractionFetchResponseSchema: Schema<JourneyInteractionFetchResponse> =
  s.object<JourneyInteractionFetchResponse>({
    instanceId: s.string(),
    interactionId: s.string(),
    journey: journeySchema,
    interaction: interactionSchema,
    context: s.optional(s.lazy(() => context4Schema)),
    instructions: s.optional(s.array(s.string())),
    outstanding: s.optional(s.array(s.string())),
  });
