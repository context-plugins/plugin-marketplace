import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contextSchema, type Context } from "./context.js";
import { participantSchema, type Participant } from "./participant.js";

export type JourneyInteractionSubmitRequest = {
  /** Journey instance identifier */
  instanceId: string;
  /** Interaction identifier */
  interactionId: string;
  /** List of participant identifiers involved in the interaction */
  participants?: Participant[];
  context?: Context;
};

export const journeyInteractionSubmitRequestSchema: Schema<JourneyInteractionSubmitRequest> =
  s.object<JourneyInteractionSubmitRequest>({
    instanceId: s.string(),
    interactionId: s.string(),
    participants: s.optional(s.array(s.lazy(() => participantSchema))),
    context: s.optional(s.lazy(() => contextSchema)),
  });
