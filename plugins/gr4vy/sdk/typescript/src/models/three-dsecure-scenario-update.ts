import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditions1Schema, type Conditions1 } from "./unions/conditions1.js";
import { outcomeSchema, type Outcome } from "./unions/outcome.js";

export type ThreeDSecureScenarioUpdate = {
  /** Conditions for the scenario. */
  conditions?: Conditions1;
  /** Outcome for the scenario. */
  outcome?: Outcome;
};

export const threeDSecureScenarioUpdateSchema: Schema<ThreeDSecureScenarioUpdate> =
  s.object<ThreeDSecureScenarioUpdate>({
    conditions: s.optional(s.lazy(() => conditions1Schema)),
    outcome: s.optional(s.lazy(() => outcomeSchema)),
  });
