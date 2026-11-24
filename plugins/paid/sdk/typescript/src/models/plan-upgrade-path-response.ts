import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { plan1Schema, type Plan1 } from "./plan1.js";

export type PlanUpgradePathResponse = {
  data: Plan1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planUpgradePathResponseSchema: Schema<PlanUpgradePathResponse> =
  s.object<PlanUpgradePathResponse>(
    {
      data: s.array(s.lazy(() => plan1Schema)),
    },
    { additionalProperties: s.json() },
  );
