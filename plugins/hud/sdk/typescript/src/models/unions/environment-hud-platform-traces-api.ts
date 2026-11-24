import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { traceEnvironmentRefSchema, type TraceEnvironmentRef } from "../trace-environment-ref.js";

export type EnvironmentHudPlatformTracesApi = TraceEnvironmentRef;

export const environmentHudPlatformTracesApiSchema: Schema<EnvironmentHudPlatformTracesApi> =
  s.of<EnvironmentHudPlatformTracesApi>(s.union([s.lazy(() => traceEnvironmentRefSchema)]));
