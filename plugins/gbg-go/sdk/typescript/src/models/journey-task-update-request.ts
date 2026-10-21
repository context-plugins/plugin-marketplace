import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contextSchema, type Context } from "./context.js";
import { intentSchema, type Intent } from "./intent.js";

export type JourneyTaskUpdateRequest = {
  /** Journey Instance Id, a unique identifier for a started journey instance. */
  instanceId: string;
  /** Task Id, a unique identifier for a task assigned to an End User during a Journey. */
  taskId: string;
  intent: Intent;
  context?: Context;
  data?: Record<string, unknown>;
};

export const journeyTaskUpdateRequestSchema: Schema<JourneyTaskUpdateRequest> =
  s.object<JourneyTaskUpdateRequest>({
    instanceId: s.string(),
    taskId: s.string(),
    intent: intentSchema,
    context: s.optional(s.lazy(() => contextSchema)),
    data: s.optional(s.record(s.string(), s.unknown())),
  });
