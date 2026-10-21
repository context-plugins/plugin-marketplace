import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { class1Schema, type Class1 } from "./class1.js";
import { courseSchema, type Course } from "./course.js";
import { scoreScaleValueSchema, type ScoreScaleValue } from "./score-scale-value.js";
import { statusSchema, type Status } from "./status.js";

/** Represents a score scale. */
export type ScoreScale = {
  sourcedId?: string;
  status: Status;
  dateLastModified?: Date;
  metadata?: Record<string, Record<string, unknown>> | null;
  title: string;
  type: string;
  class: Class1;
  course?: Course | null;
  scoreScaleValue: ScoreScaleValue[];
};

export const scoreScaleSchema: Schema<ScoreScale> = s.object<ScoreScale>({
  sourcedId: s.optional(s.string()),
  status: statusSchema,
  dateLastModified: s.optional(s.dateTime()),
  metadata: s.optionalNullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  title: s.string(),
  type: s.string(),
  class: class1Schema,
  course: s.optionalNullable(s.lazy(() => courseSchema)),
  scoreScaleValue: s.array(s.lazy(() => scoreScaleValueSchema)),
});
