import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Confidence = number;

export const confidenceInternalSchema: Schema<Confidence> = s.of<Confidence>(s.union([s.float64()]));

export const confidenceSchema: Schema<Confidence> = s.lazySchema(() =>
  s.of<Confidence>(s.union([s.float64().check(s.gte(0), s.lte(1))])),
);
