import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Start Response contains the Journey Instance Id */
export type JourneyStartResponse = {
  /** Journey Instance Id, a unique identifier for a started journey instance. */
  instanceId: string;
};

export const journeyStartResponseSchema: Schema<JourneyStartResponse> = s.object<JourneyStartResponse>({
  instanceId: s.string(),
});
