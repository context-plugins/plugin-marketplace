import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { displayValueSourceSchema, type DisplayValueSource } from "../display-value-source.js";

export type Value5 = string | number | boolean | DisplayValueSource;

export const value5Schema: Schema<Value5> = s.of<Value5>(
  s.union([s.string(), s.int(), s.float64(), s.boolean(), s.lazy(() => displayValueSourceSchema)]),
);
