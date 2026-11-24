import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creditsSchema, type Credits } from "./credits.js";
import { planIdSchema, type PlanId } from "./plan-id.js";
import { planSchema, type Plan } from "./plan.js";
import { statusSchema, type Status } from "./status.js";

export type Me = {
  id?: string;
  email?: string;
  planId?: PlanId;
  currentPeriodStart?: Date;
  status?: Status;
  plan?: Plan;
  credits?: Credits;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const meProperties: s.Shape<Me> = {
  id: s.optional(s.string()),
  email: s.optional(s.string()),
  planId: s.optional(s.lazy(() => planIdSchema)),
  currentPeriodStart: s.optional(s.dateTime()),
  status: s.optional(s.lazy(() => statusSchema)),
  plan: s.optional(s.lazy(() => planSchema)),
  credits: s.optional(s.lazy(() => creditsSchema)),
  _keysMap: {
    planId: "plan_id",
    currentPeriodStart: "current_period_start",
  },
};

export const meInternalSchema: Schema<Me> = s.object<Me>(meProperties, { additionalProperties: s.json() });

export const meSchema: Schema<Me> = s.lazySchema(() =>
  s.object<Me>(
    {
      ...meProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
