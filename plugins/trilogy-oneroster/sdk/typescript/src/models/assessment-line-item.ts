import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { class1Schema, type Class1 } from "./class1.js";
import { componentResourceSchema, type ComponentResource } from "./component-resource.js";
import { componentSchema, type Component } from "./component.js";
import { learningObjectiveSet1Schema, type LearningObjectiveSet1 } from "./learning-objective-set1.js";
import {
  parentAssessmentLineItemSchema,
  type ParentAssessmentLineItem,
} from "./parent-assessment-line-item.js";
import { scoreScale4Schema, type ScoreScale4 } from "./score-scale4.js";
import { statusSchema, type Status } from "./status.js";

/** Represents an assessment line item. */
export type AssessmentLineItem = {
  sourcedId?: string;
  status: Status;
  dateLastModified?: Date;
  metadata?: Record<string, Record<string, unknown>> | null;
  title: string;
  description?: string | null;
  class?: Class1 | null;
  /** Represents a parent assessment line item. */
  parentAssessmentLineItem?: ParentAssessmentLineItem | null;
  /** Represents a score scale. */
  scoreScale?: ScoreScale4 | null;
  resultValueMin?: number | null;
  resultValueMax?: number | null;
  /** Reference to the Component that this assessment line item is associated with. */
  component?: Component | null;
  /** Reference to the Component Resource that this assessment line item is associated with. */
  componentResource?: ComponentResource | null;
  /** Represents a learning objective set. */
  learningObjectiveSet?: LearningObjectiveSet1[] | null;
};

export const assessmentLineItemSchema: Schema<AssessmentLineItem> = s.object<AssessmentLineItem>({
  sourcedId: s.optional(s.string()),
  status: statusSchema,
  dateLastModified: s.optional(s.dateTime()),
  metadata: s.optionalNullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  title: s.string(),
  description: s.optionalNullable(s.string()),
  class: s.optionalNullable(s.lazy(() => class1Schema)),
  parentAssessmentLineItem: s.optionalNullable(s.lazy(() => parentAssessmentLineItemSchema)),
  scoreScale: s.optionalNullable(s.lazy(() => scoreScale4Schema)),
  resultValueMin: s.optionalNullable(s.float64()),
  resultValueMax: s.optionalNullable(s.float64()),
  component: s.optionalNullable(s.lazy(() => componentSchema)),
  componentResource: s.optionalNullable(s.lazy(() => componentResourceSchema)),
  learningObjectiveSet: s.optionalNullable(s.array(s.lazy(() => learningObjectiveSet1Schema))),
});
