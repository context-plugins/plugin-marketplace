import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { planSchema, type Plan } from "./plan.js";

/** A plan group containing multiple plans */
export type PlanGroup = {
  /** The unique identifier of the plan group */
  id: string;
  /** The organization ID that owns this plan group */
  organizationId: string;
  /** The name of the plan group */
  name: string;
  /** The description of the plan group */
  description?: string | null;
  /** When the plan group was created */
  createdAt: Date;
  /** When the plan group was last updated */
  updatedAt: Date;
  /** The plans included in this plan group */
  plans?: Plan[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planGroupSchema: Schema<PlanGroup> = s.object<PlanGroup>(
  {
    id: s.string(),
    organizationId: s.string(),
    name: s.string(),
    description: s.optionalNullable(s.string()),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    plans: s.optional(s.array(s.lazy(() => planSchema))),
  },
  { additionalProperties: s.json() },
);
