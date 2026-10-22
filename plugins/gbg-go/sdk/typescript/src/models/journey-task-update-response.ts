import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type JourneyTaskUpdateResponse = {
  /** Journey Instance Id, a unique identifier for a started journey instance. */
  instanceId: string;
  /** Task Id, a unique identifier for a task assigned to an End User during a Journey. */
  taskId: string;
};

export const journeyTaskUpdateResponseSchema: Schema<JourneyTaskUpdateResponse> =
  s.object<JourneyTaskUpdateResponse>({
    instanceId: s.string(),
    taskId: s.string(),
  });
