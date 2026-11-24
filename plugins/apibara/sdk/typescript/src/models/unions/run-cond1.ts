import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { runCondSchema, type RunCond } from "../run-cond.js";

export type RunCond1 = RunCond | RunCond[];

export const runCond1Schema: Schema<RunCond1> = s.of<RunCond1>(
  s.union([s.lazy(() => runCondSchema), s.array(s.lazy(() => runCondSchema))]),
);
