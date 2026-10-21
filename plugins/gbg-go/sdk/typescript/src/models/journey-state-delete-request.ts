import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type JourneyStateDeleteRequest = {
  /** Journey Instance Id, a unique identifier for a started journey instance. */
  instanceId: string;
};

export const journeyStateDeleteRequestSchema: Schema<JourneyStateDeleteRequest> =
  s.object<JourneyStateDeleteRequest>({
    instanceId: s.string(),
  });
