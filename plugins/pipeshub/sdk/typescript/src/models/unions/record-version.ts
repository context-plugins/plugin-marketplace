import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RecordVersion = string | number;

export const recordVersionSchema: Schema<RecordVersion> = s.of<RecordVersion>(
  s.union([s.string(), s.float64()]),
);
