import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { valueModelSummaryStatusSchema, type ValueModelSummaryStatus } from "./value-model-summary-status.js";

export type ValueModelSummary = {
  id: string;
  version: number;
  status: ValueModelSummaryStatus;
  createdAt: Date;
  activatedAt: Date | null;
  archivedAt: Date | null;
  effectiveFrom: Date | null;
  effectiveTo: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelSummarySchema: Schema<ValueModelSummary> = s.object<ValueModelSummary>(
  {
    id: s.string(),
    version: s.int(),
    status: valueModelSummaryStatusSchema,
    createdAt: s.dateTime(),
    activatedAt: s.nullable(s.dateTime()),
    archivedAt: s.nullable(s.dateTime()),
    effectiveFrom: s.nullable(s.dateTime()),
    effectiveTo: s.nullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
