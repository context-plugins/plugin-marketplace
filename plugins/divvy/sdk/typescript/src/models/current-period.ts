import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { spentSchema, type Spent } from "./spent.js";

export type CurrentPeriod = {
  /** Budget period start date */
  startDate?: string;
  /** Budget period end date */
  endDate?: string;
  /** Budget period spend limit */
  limit?: number;
  /** Spend amount allowed above the budget limit before transactions are declined */
  overspendBuffer?: number;
  /** Total amount assigned to users and vendor cards */
  assigned?: number;
  spent?: Spent;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const currentPeriodSchema: Schema<CurrentPeriod> = s.object<CurrentPeriod>(
  {
    startDate: s.optional(s.dateOnly()),
    endDate: s.optional(s.dateOnly()),
    limit: s.optional(s.float64()),
    overspendBuffer: s.optional(s.float64()),
    assigned: s.optional(s.float64()),
    spent: s.optional(s.lazy(() => spentSchema)),
  },
  { additionalProperties: s.json() },
);
