import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TraceId = string;

export const traceIdSchema: Schema<TraceId> = s.of<TraceId>(s.union([s.string()]));
