import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  threeDSecureScenarioConditionsSchema,
  type ThreeDSecureScenarioConditions,
} from "../three-dsecure-scenario-conditions.js";

/** Conditions for the scenario. */
export type Conditions1 = ThreeDSecureScenarioConditions;

export const conditions1Schema: Schema<Conditions1> = s.of<Conditions1>(
  s.union([s.lazy(() => threeDSecureScenarioConditionsSchema)]),
);
