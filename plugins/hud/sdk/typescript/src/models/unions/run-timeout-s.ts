import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RunTimeoutS = number;

export const runTimeoutSInternalSchema: Schema<RunTimeoutS> = s.of<RunTimeoutS>(s.union([s.int()]));

export const runTimeoutSSchema: Schema<RunTimeoutS> = s.lazySchema(() =>
  s.of<RunTimeoutS>(s.union([s.int().check(s.gt(0))])),
);
