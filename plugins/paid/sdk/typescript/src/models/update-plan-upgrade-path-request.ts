import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { planUpgradePathGroupSchema, type PlanUpgradePathGroup } from "./plan-upgrade-path-group.js";

export type UpdatePlanUpgradePathRequest = {
  /** Paid product ID, for example `prod_abc123` */
  productId: string;
  groups: PlanUpgradePathGroup[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updatePlanUpgradePathRequestSchema: Schema<UpdatePlanUpgradePathRequest> =
  s.object<UpdatePlanUpgradePathRequest>(
    {
      productId: s.string(),
      groups: s.array(s.lazy(() => planUpgradePathGroupSchema)),
    },
    { additionalProperties: s.json() },
  );
