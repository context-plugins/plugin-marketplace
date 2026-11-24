import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { locationsSchema, type Locations } from "./locations.js";
import { paidReadsSchema, type PaidReads } from "./paid-reads.js";
import { planSchema, type Plan } from "./plan.js";

export type Usage = {
  plan: Plan;
  /** The current month, `YYYY-MM` in UTC. */
  period: string;
  locations: Locations;
  /**
   * API requests this month from all of the workspace's keys, test keys included. Requests over the
   * rate limit are not counted.
   */
  requests: number;
  /** Your per-key rate limit. */
  requestsPerMinuteLimit: number;
  /** Replies published through Prisma this month. */
  repliesPublished: number;
  paidReads: PaidReads;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const usageProperties: s.Shape<Usage> = {
  plan: planSchema,
  period: s.string(),
  locations: locationsSchema,
  requests: s.int(),
  requestsPerMinuteLimit: s.int(),
  repliesPublished: s.int(),
  paidReads: paidReadsSchema,
  _keysMap: {
    requestsPerMinuteLimit: "requests_per_minute_limit",
    repliesPublished: "replies_published",
    paidReads: "paid_reads",
  },
};

export const usageInternalSchema: Schema<Usage> = s.object<Usage>(usageProperties, {
  additionalProperties: s.json(),
});

export const usageSchema: Schema<Usage> = s.lazySchema(() =>
  s.object<Usage>(
    {
      ...usageProperties,
      period: s.string().check(s.pattern("^\\d{4}-\\d{2}$")),
    },
    { additionalProperties: s.json() },
  ),
);
