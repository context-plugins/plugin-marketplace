import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Upgrade = {
  recommendedPlan?: string;
  recommendedPlanCredits?: number | null;
  upgradeUrl?: string;
  manageBillingUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const upgradeProperties: s.Shape<Upgrade> = {
  recommendedPlan: s.optional(s.string()),
  recommendedPlanCredits: s.optionalNullable(s.int()),
  upgradeUrl: s.optional(s.string()),
  manageBillingUrl: s.optional(s.string()),
};

export const upgradeInternalSchema: Schema<Upgrade> = s.object<Upgrade>(upgradeProperties, {
  additionalProperties: s.json(),
});

export const upgradeSchema: Schema<Upgrade> = s.lazySchema(() =>
  s.object<Upgrade>(
    {
      ...upgradeProperties,
      upgradeUrl: s.optional(s.string().check(s.url())),
      manageBillingUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
