import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PriorityBreakdown = {
  /** The priority level (1-10). */
  priority: number;
  /** Number of queued tasks at this priority level. */
  count: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const priorityBreakdownProperties: s.Shape<PriorityBreakdown> = {
  priority: s.int(),
  count: s.int(),
};

export const priorityBreakdownInternalSchema: Schema<PriorityBreakdown> = s.object<PriorityBreakdown>(
  priorityBreakdownProperties,
  { additionalProperties: s.json() },
);

export const priorityBreakdownSchema: Schema<PriorityBreakdown> = s.lazySchema(() =>
  s.object<PriorityBreakdown>(
    {
      ...priorityBreakdownProperties,
      priority: s.int().check(s.gte(1), s.lte(10)),
    },
    { additionalProperties: s.json() },
  ),
);
