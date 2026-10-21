import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { periodSchema, type Period } from "../period.js";
import { period1Schema, type Period1 } from "../period1.js";
import { period2Schema, type Period2 } from "../period2.js";
import { period33Schema, type Period33 } from "../period33.js";

export type Period31 = Period | Period1 | Period2 | Period33;

export const period31Schema: Schema<Period31> = s.of<Period31>(
  s.union([
    s.lazy(() => periodSchema),
    s.lazy(() => period1Schema),
    s.lazy(() => period2Schema),
    s.lazy(() => period33Schema),
  ]),
);
