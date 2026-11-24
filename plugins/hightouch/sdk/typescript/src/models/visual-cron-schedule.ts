import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expressionSchema, type Expression } from "./expression.js";

export type VisualCronSchedule = {
  expressions: Expression[];
};

export const visualCronScheduleSchema: Schema<VisualCronSchedule> = s.object<VisualCronSchedule>({
  expressions: s.array(s.lazy(() => expressionSchema)),
});
