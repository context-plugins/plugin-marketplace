import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GradingPeriod = {
  sourcedId: string;
};

export const gradingPeriodSchema: Schema<GradingPeriod> = s.object<GradingPeriod>({
  sourcedId: s.string(),
});
