import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  adyenCardAutoRescueScenariosEnumSchema,
  type AdyenCardAutoRescueScenariosEnum,
} from "../adyen-card-auto-rescue-scenarios-enum.js";

/** The rescue scenario to simulate for a transaction, when `autoRescue` is set to `true`. */
export type AutoRescueScenario = AdyenCardAutoRescueScenariosEnum;

export const autoRescueScenarioSchema: Schema<AutoRescueScenario> = s.of<AutoRescueScenario>(
  s.union([s.lazy(() => adyenCardAutoRescueScenariosEnumSchema)]),
);
