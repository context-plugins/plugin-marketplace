import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlanUpgradePathGroup = {
  frequency: string | null;
  planIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planUpgradePathGroupSchema: Schema<PlanUpgradePathGroup> = s.object<PlanUpgradePathGroup>(
  {
    frequency: s.nullable(s.string()),
    planIds: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
