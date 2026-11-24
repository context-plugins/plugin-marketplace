import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { planAttributeInputSchema, type PlanAttributeInput } from "./plan-attribute-input.js";

export type CreatePlanRequest = {
  /** Paid product ID, for example `prod_abc123` */
  productId: string;
  name?: string | null;
  /** Your stable identifier for this plan */
  externalId?: string | null;
  supportedCurrencies?: string[];
  isDefault?: boolean;
  attributes: PlanAttributeInput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createPlanRequestSchema: Schema<CreatePlanRequest> = s.object<CreatePlanRequest>(
  {
    productId: s.string(),
    name: s.optionalNullable(s.string()),
    externalId: s.optionalNullable(s.string()),
    supportedCurrencies: s.optional(s.array(s.string())),
    isDefault: s.optional(s.boolean()),
    attributes: s.array(s.lazy(() => planAttributeInputSchema)),
  },
  { additionalProperties: s.json() },
);
