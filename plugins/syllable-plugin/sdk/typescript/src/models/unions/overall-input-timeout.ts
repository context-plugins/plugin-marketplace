import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Total input timeout */
export type OverallInputTimeout = number;

export const overallInputTimeoutSchema: Schema<OverallInputTimeout> = s.of<OverallInputTimeout>(
  s.union([s.float64()]),
);
