import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assessmentLineItem1Schema, type AssessmentLineItem1 } from "./assessment-line-item1.js";
import { learningObjectiveSetSchema, type LearningObjectiveSet } from "./learning-objective-set.js";
import { scoreScale1Schema, type ScoreScale1 } from "./score-scale1.js";
import { scoreStatusSchema, type ScoreStatus } from "./score-status.js";
import { statusSchema, type Status } from "./status.js";
import { studentSchema, type Student } from "./student.js";

/** Represents an assessment result. */
export type AssessmentResult = {
  sourcedId?: string;
  status: Status;
  dateLastModified?: Date;
  metadata?: Record<string, Record<string, unknown>> | null;
  assessmentLineItem: AssessmentLineItem1;
  student: Student;
  score?: number | null;
  textScore?: string | null;
  scoreDate: Date;
  scoreScale?: ScoreScale1 | null;
  scorePercentile?: number | null;
  scoreStatus: ScoreStatus;
  comment?: string | null;
  learningObjectiveSet?: LearningObjectiveSet[] | null;
  inProgress?: string | null;
  incomplete?: string | null;
  late?: string | null;
  missing?: string | null;
};

export const assessmentResultSchema: Schema<AssessmentResult> = s.object<AssessmentResult>({
  sourcedId: s.optional(s.string()),
  status: statusSchema,
  dateLastModified: s.optional(s.dateTime()),
  metadata: s.optionalNullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  assessmentLineItem: assessmentLineItem1Schema,
  student: studentSchema,
  score: s.optionalNullable(s.float64()),
  textScore: s.optionalNullable(s.string()),
  scoreDate: s.dateTime(),
  scoreScale: s.optionalNullable(s.lazy(() => scoreScale1Schema)),
  scorePercentile: s.optionalNullable(s.float64()),
  scoreStatus: scoreStatusSchema,
  comment: s.optionalNullable(s.string()),
  learningObjectiveSet: s.optionalNullable(s.array(s.lazy(() => learningObjectiveSetSchema))),
  inProgress: s.optionalNullable(s.string()),
  incomplete: s.optionalNullable(s.string()),
  late: s.optionalNullable(s.string()),
  missing: s.optionalNullable(s.string()),
});
