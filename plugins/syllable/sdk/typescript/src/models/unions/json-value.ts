import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type JsonValue = string | number;

export const jsonValueSchema: Schema<JsonValue> = s.of<JsonValue>(
  s.union([s.string(), s.int(), s.float64()]),
);
