import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { planLimitsResponseSchema, type PlanLimitsResponse } from "./plan-limits-response.js";

export type MePlan = {
  limits: PlanLimitsResponse;
  /** Plan slug: `free`, `starter`, `basic`, `pro`, `enterprise`. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mePlanSchema: Schema<MePlan> = s.object<MePlan>(
  {
    limits: planLimitsResponseSchema,
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
