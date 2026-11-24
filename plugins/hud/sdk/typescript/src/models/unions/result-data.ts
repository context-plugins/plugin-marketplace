import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ResultData = Record<string, unknown>;

export const resultDataSchema: Schema<ResultData> = s.of<ResultData>(
  s.union([s.record(s.string(), s.unknown())]),
);
