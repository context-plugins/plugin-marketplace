import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ReviewCount = number;

export const reviewCountInternalSchema: Schema<ReviewCount> = s.of<ReviewCount>(s.union([s.int()]));

export const reviewCountSchema: Schema<ReviewCount> = s.lazySchema(() =>
  s.of<ReviewCount>(s.union([s.int().check(s.gte(0), s.lte(9007199254740991))])),
);
