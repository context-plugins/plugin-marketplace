import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { traceStatusSchema, type TraceStatus } from "../trace-status.js";

/** Only traces in these statuses; the category counts cover the same traces. */
export type Status11 = TraceStatus[];

export const status11Schema: Schema<Status11> = s.of<Status11>(
  s.union([s.array(s.lazy(() => traceStatusSchema))]),
);
