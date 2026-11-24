import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Variables = unknown;

export const variablesSchema: Schema<Variables> = s.of<Variables>(
  s.union([s.string(), s.float64(), s.boolean(), s.unknown(), s.record(s.string(), s.unknown())]),
);
