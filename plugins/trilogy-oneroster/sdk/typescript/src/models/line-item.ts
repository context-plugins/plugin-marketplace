import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { academicSession1Schema, type AcademicSession1 } from "./academic-session1.js";
import { category1Schema, type Category1 } from "./category1.js";
import { class1Schema, type Class1 } from "./class1.js";
import { gradingPeriodSchema, type GradingPeriod } from "./grading-period.js";
import { learningObjectiveSet1Schema, type LearningObjectiveSet1 } from "./learning-objective-set1.js";
import { schoolSchema, type School } from "./school.js";
import { scoreScale1Schema, type ScoreScale1 } from "./score-scale1.js";
import { Status, statusSchema } from "./status.js";

/** Represents a line item. */
export type LineItem = {
  sourcedId?: string;
  /** @default Status.Active */
  status?: Status;
  dateLastModified?: Date;
  metadata?: Record<string, Record<string, unknown>> | null;
  title: string;
  description?: string | null;
  assignDate: Date;
  dueDate: Date;
  class: Class1;
  school: School;
  category: Category1;
  gradingPeriod?: GradingPeriod | null;
  academicSession?: AcademicSession1 | null;
  scoreScale?: ScoreScale1 | null;
  resultValueMin?: number | null;
  resultValueMax?: number | null;
  learningObjectiveSet?: LearningObjectiveSet1[] | null;
};

export const lineItemSchema: Schema<LineItem> = s.object<LineItem>({
  sourcedId: s.optional(s.string()),
  status: s.defaulted(statusSchema, Status.Active),
  dateLastModified: s.optional(s.dateTime()),
  metadata: s.optionalNullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  title: s.string(),
  description: s.optionalNullable(s.string()),
  assignDate: s.dateTime(),
  dueDate: s.dateTime(),
  class: class1Schema,
  school: schoolSchema,
  category: category1Schema,
  gradingPeriod: s.optionalNullable(s.lazy(() => gradingPeriodSchema)),
  academicSession: s.optionalNullable(s.lazy(() => academicSession1Schema)),
  scoreScale: s.optionalNullable(s.lazy(() => scoreScale1Schema)),
  resultValueMin: s.optionalNullable(s.float64()),
  resultValueMax: s.optionalNullable(s.float64()),
  learningObjectiveSet: s.optionalNullable(s.array(s.lazy(() => learningObjectiveSet1Schema))),
});
