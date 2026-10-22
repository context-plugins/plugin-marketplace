import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { class1Schema, type Class1 } from "./class1.js";
import { learningObjectiveSetSchema, type LearningObjectiveSet } from "./learning-objective-set.js";
import { lineItem1Schema, type LineItem1 } from "./line-item1.js";
import { scoreScale1Schema, type ScoreScale1 } from "./score-scale1.js";
import { scoreStatusSchema, type ScoreStatus } from "./score-status.js";
import { statusSchema, type Status } from "./status.js";
import { studentSchema, type Student } from "./student.js";

/** Represents a result. */
export type Result = {
  sourcedId?: string;
  status: Status;
  dateLastModified?: Date;
  metadata?: Record<string, Record<string, unknown>> | null;
  lineItem: LineItem1;
  student: Student;
  class?: Class1 | null;
  scoreScale?: ScoreScale1 | null;
  scoreStatus: ScoreStatus;
  score?: number | null;
  textScore?: string | null;
  scoreDate: Date;
  comment?: string | null;
  learningObjectiveSet?: LearningObjectiveSet[] | null;
  inProgress?: string;
  incomplete?: string;
  late?: string;
  missing?: string;
};

export const resultSchema: Schema<Result> = s.object<Result>({
  sourcedId: s.optional(s.string()),
  status: statusSchema,
  dateLastModified: s.optional(s.dateTime()),
  metadata: s.optionalNullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  lineItem: lineItem1Schema,
  student: studentSchema,
  class: s.optionalNullable(s.lazy(() => class1Schema)),
  scoreScale: s.optionalNullable(s.lazy(() => scoreScale1Schema)),
  scoreStatus: scoreStatusSchema,
  score: s.optionalNullable(s.float64()),
  textScore: s.optionalNullable(s.string()),
  scoreDate: s.dateTime(),
  comment: s.optionalNullable(s.string()),
  learningObjectiveSet: s.optionalNullable(s.array(s.lazy(() => learningObjectiveSetSchema))),
  inProgress: s.optional(s.string()),
  incomplete: s.optional(s.string()),
  late: s.optional(s.string()),
  missing: s.optional(s.string()),
});
