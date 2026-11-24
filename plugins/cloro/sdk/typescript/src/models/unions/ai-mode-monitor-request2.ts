import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  aiModeMonitorRequestInternalSchema,
  aiModeMonitorRequestSchema,
  type AiModeMonitorRequest,
} from "../ai-mode-monitor-request.js";
import {
  aiModeMonitorRequest1InternalSchema,
  aiModeMonitorRequest1Schema,
  type AiModeMonitorRequest1,
} from "../ai-mode-monitor-request1.js";

export type AiModeMonitorRequest2 = AiModeMonitorRequest | AiModeMonitorRequest1;

export const aiModeMonitorRequest2InternalSchema: Schema<AiModeMonitorRequest2> = s.of<AiModeMonitorRequest2>(
  s.union([
    s.lazy(() => aiModeMonitorRequestInternalSchema),
    s.lazy(() => aiModeMonitorRequest1InternalSchema),
  ]),
);

export const aiModeMonitorRequest2Schema: Schema<AiModeMonitorRequest2> = s.lazySchema(() =>
  s.of<AiModeMonitorRequest2>(
    s.union([s.lazy(() => aiModeMonitorRequestSchema), s.lazy(() => aiModeMonitorRequest1Schema)]),
  ),
);
