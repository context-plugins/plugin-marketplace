import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ResultHudPlatformTracesApi = Record<string, unknown>;

export const resultHudPlatformTracesApiSchema: Schema<ResultHudPlatformTracesApi> =
  s.of<ResultHudPlatformTracesApi>(s.union([s.record(s.string(), s.unknown())]));
