import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TotalSteps = number;

export const totalStepsInternalSchema: Schema<TotalSteps> = s.of<TotalSteps>(s.union([s.int()]));

export const totalStepsSchema: Schema<TotalSteps> = s.lazySchema(() =>
  s.of<TotalSteps>(s.union([s.int().check(s.gte(0))])),
);
