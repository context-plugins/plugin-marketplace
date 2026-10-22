import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { periodSchema, type Period } from "../period.js";
import { period1Schema, type Period1 } from "../period1.js";
import { period2Schema, type Period2 } from "../period2.js";

export type Period3 = Period | Period1 | Period2;

export const period3Schema: Schema<Period3> = s.of<Period3>(
  s.union([s.lazy(() => periodSchema), s.lazy(() => period1Schema), s.lazy(() => period2Schema)]),
);
