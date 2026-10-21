import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type JourneyTaskSchemaRequest = {
  /** Task Id, a unique identifier for a task assigned to an End User during a Journey. */
  taskId: string;
};

export const journeyTaskSchemaRequestSchema: Schema<JourneyTaskSchemaRequest> =
  s.object<JourneyTaskSchemaRequest>({
    taskId: s.string(),
  });
