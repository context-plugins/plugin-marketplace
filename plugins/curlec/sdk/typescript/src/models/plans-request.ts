import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { item1Schema, type Item1 } from "./item1.js";
import { period1Schema, type Period1 } from "./period1.js";

export type PlansRequest = {
  /** Billing frequency unit. For daily, minimum interval is 7. */
  period: Period1;
  /**
   * Number of periods between charges (e.g. interval=3, period=monthly → charge every 3 months).
   */
  interval: number;
  item: Item1;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const plansRequestProperties: s.Shape<PlansRequest> = {
  period: period1Schema,
  interval: s.int(),
  item: item1Schema,
  notes: s.optional(s.record(s.string(), s.string())),
};

export const plansRequestInternalSchema: Schema<PlansRequest> = s.object<PlansRequest>(
  plansRequestProperties,
  { additionalProperties: s.json() },
);

export const plansRequestSchema: Schema<PlansRequest> = s.lazySchema(() =>
  s.object<PlansRequest>(
    {
      ...plansRequestProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
