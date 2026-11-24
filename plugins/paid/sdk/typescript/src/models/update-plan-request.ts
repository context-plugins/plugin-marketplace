import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { planAttributeInputSchema, type PlanAttributeInput } from "./plan-attribute-input.js";
import { updatePlanRequestStatusSchema, type UpdatePlanRequestStatus } from "./update-plan-request-status.js";

export type UpdatePlanRequest = {
  name?: string | null;
  externalId?: string | null;
  supportedCurrencies?: string[];
  isDefault?: boolean;
  /** Set to `archived` to archive this plan, or `active` to restore it. */
  status?: UpdatePlanRequestStatus;
  attributes?: PlanAttributeInput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updatePlanRequestSchema: Schema<UpdatePlanRequest> = s.object<UpdatePlanRequest>(
  {
    name: s.optionalNullable(s.string()),
    externalId: s.optionalNullable(s.string()),
    supportedCurrencies: s.optional(s.array(s.string())),
    isDefault: s.optional(s.boolean()),
    status: s.optional(s.lazy(() => updatePlanRequestStatusSchema)),
    attributes: s.optional(s.array(s.lazy(() => planAttributeInputSchema))),
  },
  { additionalProperties: s.json() },
);
