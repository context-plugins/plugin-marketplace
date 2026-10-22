import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { journeySchema, type Journey } from "./journey.js";

export type JourneyInteractionFetchResponse2 = {
  /** Journey instance identifier */
  instanceId: string;
  journey: Journey;
  /**
   * True when the journey is still working and no interaction is available yet. Clients should poll
   * /journey/interaction/fetch until this is absent/false and an `interaction` is returned.
   */
  processing?: boolean;
};

export const journeyInteractionFetchResponse2Schema: Schema<JourneyInteractionFetchResponse2> =
  s.object<JourneyInteractionFetchResponse2>({
    instanceId: s.string(),
    journey: journeySchema,
    processing: s.optional(s.boolean()),
  });
