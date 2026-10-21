import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { executionOutputSchema, type ExecutionOutput } from "./execution-output.js";
import { reviewOutputSchema, type ReviewOutput } from "./review-output.js";

export type ConditionOutput = {
  id: string;
  kind?: string;
  execution: ExecutionOutput;
  scheduleKind?: string;
  executionDate?: number;
  waitDuration?: number;
  waitDurationUnit?: string;
  description: string;
  notifyMemberIds: string[];
  allReviews: ReviewOutput[];
  reviewStatus: string;
  appliedDate?: number;
  creationConfig?: Record<string, Record<string, unknown>>;
};

export const conditionOutputSchema: Schema<ConditionOutput> = s.object<ConditionOutput>({
  id: s.string(),
  kind: s.optional(s.string()),
  execution: executionOutputSchema,
  scheduleKind: s.optional(s.string()),
  executionDate: s.optional(s.int()),
  waitDuration: s.optional(s.int()),
  waitDurationUnit: s.optional(s.string()),
  description: s.string(),
  notifyMemberIds: s.array(s.string()),
  allReviews: s.array(s.lazy(() => reviewOutputSchema)),
  reviewStatus: s.string(),
  appliedDate: s.optional(s.int()),
  creationConfig: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  _keysMap: {
    id: "_id",
    execution: "_execution",
  },
});
