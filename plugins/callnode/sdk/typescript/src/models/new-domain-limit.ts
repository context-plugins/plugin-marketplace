import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * On the create, verify and refresh=1 answers only (absent on plain reads): the per-day cap on a
 * domain registered less than 30 days ago, rising over its first month and reset at 00:00 UTC; null
 * once the domain is not capped.
 */
export type NewDomainLimit = {
  ageDays?: number | null;
  dailyCap?: number;
  sentToday?: number | null;
  remaining?: number | null;
  resetsAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const newDomainLimitSchema: Schema<NewDomainLimit> = s.object<NewDomainLimit>(
  {
    ageDays: s.optionalNullable(s.int()),
    dailyCap: s.optional(s.int()),
    sentToday: s.optionalNullable(s.int()),
    remaining: s.optionalNullable(s.int()),
    resetsAt: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
