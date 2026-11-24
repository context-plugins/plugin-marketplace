import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { intervalUnitSchema, type IntervalUnit } from "./interval-unit.js";

export type Interval = {
  unit: IntervalUnit;
  quantity: number;
};

export const intervalSchema: Schema<Interval> = s.object<Interval>({
  unit: intervalUnitSchema,
  quantity: s.float64(),
});
