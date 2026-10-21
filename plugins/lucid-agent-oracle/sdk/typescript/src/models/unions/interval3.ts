import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { intervalSchema, type Interval } from "../interval.js";
import { interval1Schema, type Interval1 } from "../interval1.js";
import { interval2Schema, type Interval2 } from "../interval2.js";

export type Interval3 = Interval | Interval1 | Interval2;

export const interval3Schema: Schema<Interval3> = s.of<Interval3>(
  s.union([s.lazy(() => intervalSchema), s.lazy(() => interval1Schema), s.lazy(() => interval2Schema)]),
);
