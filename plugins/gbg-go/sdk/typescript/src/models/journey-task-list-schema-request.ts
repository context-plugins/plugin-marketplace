import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type JourneyTaskListSchemaRequest = {
  /** Journey Instance Id, a unique identifier for a started journey instance. */
  instanceId: string;
};

export const journeyTaskListSchemaRequestSchema: Schema<JourneyTaskListSchemaRequest> =
  s.object<JourneyTaskListSchemaRequest>({
    instanceId: s.string(),
  });
