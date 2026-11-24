import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { traceScenarioRefSchema, type TraceScenarioRef } from "../trace-scenario-ref.js";

export type ScenarioHudPlatformTracesApi = TraceScenarioRef;

export const scenarioHudPlatformTracesApiSchema: Schema<ScenarioHudPlatformTracesApi> =
  s.of<ScenarioHudPlatformTracesApi>(s.union([s.lazy(() => traceScenarioRefSchema)]));
