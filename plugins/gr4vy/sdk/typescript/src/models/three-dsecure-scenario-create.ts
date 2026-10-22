import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  threeDSecureScenarioConditions2Schema,
  type ThreeDSecureScenarioConditions2,
} from "./three-dsecure-scenario-conditions2.js";
import {
  threeDSecureScenarioOutcome1Schema,
  type ThreeDSecureScenarioOutcome1,
} from "./three-dsecure-scenario-outcome1.js";

export type ThreeDSecureScenarioCreate = {
  /** Conditions for the scenario. */
  conditions: ThreeDSecureScenarioConditions2;
  /** Outcome for the scenario. */
  outcome: ThreeDSecureScenarioOutcome1;
};

export const threeDSecureScenarioCreateSchema: Schema<ThreeDSecureScenarioCreate> =
  s.object<ThreeDSecureScenarioCreate>({
    conditions: threeDSecureScenarioConditions2Schema,
    outcome: threeDSecureScenarioOutcome1Schema,
  });
