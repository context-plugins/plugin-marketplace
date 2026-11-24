import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TraceIds = string[];

export const traceIdsInternalSchema: Schema<TraceIds> = s.of<TraceIds>(s.union([s.array(s.string())]));

export const traceIdsSchema: Schema<TraceIds> = s.lazySchema(() =>
  s.of<TraceIds>(s.union([s.array(s.string()).check(s.minLength(1), s.maxLength(100))])),
);
