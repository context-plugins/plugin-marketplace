import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TraceExecutionMode = {
  External: "external",
  Cloud: "cloud",
  Hosted: "hosted",
} as const;
export type TraceExecutionMode = (typeof TraceExecutionMode)[keyof typeof TraceExecutionMode] | (string & {});

export const traceExecutionModeSchema: EnumSchema<TraceExecutionMode> =
  s.enumOf<TraceExecutionMode>(TraceExecutionMode);
