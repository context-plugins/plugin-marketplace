import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { activeInstanceTraceSchema, type ActiveInstanceTrace } from "../active-instance-trace.js";

export type Trace = ActiveInstanceTrace;

export const traceSchema: Schema<Trace> = s.of<Trace>(s.union([s.lazy(() => activeInstanceTraceSchema)]));
