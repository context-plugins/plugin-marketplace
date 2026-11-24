import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  aiModeMonitorRequest2ModelInternalSchema,
  aiModeMonitorRequest2ModelSchema,
  type AiModeMonitorRequest2Model,
} from "../ai-mode-monitor-request2-model.js";
import {
  aiModeMonitorRequest21InternalSchema,
  aiModeMonitorRequest21Schema,
  type AiModeMonitorRequest21,
} from "../ai-mode-monitor-request21.js";

export type AiModeMonitorRequest22 = AiModeMonitorRequest2Model | AiModeMonitorRequest21;

export const aiModeMonitorRequest22InternalSchema: Schema<AiModeMonitorRequest22> =
  s.of<AiModeMonitorRequest22>(
    s.union([
      s.lazy(() => aiModeMonitorRequest2ModelInternalSchema),
      s.lazy(() => aiModeMonitorRequest21InternalSchema),
    ]),
  );

export const aiModeMonitorRequest22Schema: Schema<AiModeMonitorRequest22> = s.lazySchema(() =>
  s.of<AiModeMonitorRequest22>(
    s.union([s.lazy(() => aiModeMonitorRequest2ModelSchema), s.lazy(() => aiModeMonitorRequest21Schema)]),
  ),
);
