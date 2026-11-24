import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Validation = Record<string, unknown>[];

export const validationSchema: Schema<Validation> = s.of<Validation>(
  s.union([s.array(s.record(s.string(), s.unknown()))]),
);
