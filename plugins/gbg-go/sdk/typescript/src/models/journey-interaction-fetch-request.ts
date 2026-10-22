import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type JourneyInteractionFetchRequest = {
  /** Journey instance identifier */
  instanceId: string;
};

export const journeyInteractionFetchRequestSchema: Schema<JourneyInteractionFetchRequest> =
  s.object<JourneyInteractionFetchRequest>({
    instanceId: s.string(),
  });
