import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Delete instance response contains the Journey Instance Id */
export type JourneyStateDeleteResponse = {
  /** Journey Instance Id, a unique identifier for a started journey instance. */
  instanceId: string;
};

export const journeyStateDeleteResponseSchema: Schema<JourneyStateDeleteResponse> =
  s.object<JourneyStateDeleteResponse>({
    instanceId: s.string(),
  });
