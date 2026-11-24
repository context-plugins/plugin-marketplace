import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlanInfo = {
  category?: string;
  renewalType?: string;
  startDate?: Date;
  /** Renewal/end date. Omitted (null) for free accounts, since they have no renewal cycle. */
  endDate?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planInfoSchema: Schema<PlanInfo> = s.object<PlanInfo>(
  {
    category: s.optional(s.string()),
    renewalType: s.optional(s.string()),
    startDate: s.optional(s.dateTime()),
    endDate: s.optionalNullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
