import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type JourneyTaskListRequest = {
  /** Journey Instance Id, a unique identifier for a started journey instance. */
  instanceId: string;
};

export const journeyTaskListRequestSchema: Schema<JourneyTaskListRequest> = s.object<JourneyTaskListRequest>({
  instanceId: s.string(),
});
