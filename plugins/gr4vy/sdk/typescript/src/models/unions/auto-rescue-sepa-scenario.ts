import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  adyenAutoRescueSepaScenariosEnumSchema,
  type AdyenAutoRescueSepaScenariosEnum,
} from "../adyen-auto-rescue-sepa-scenarios-enum.js";

/** The rescue scenario to simulate for a transaction, when `autoRescue` is set to `true`. */
export type AutoRescueSepaScenario = AdyenAutoRescueSepaScenariosEnum;

export const autoRescueSepaScenarioSchema: Schema<AutoRescueSepaScenario> = s.of<AutoRescueSepaScenario>(
  s.union([s.lazy(() => adyenAutoRescueSepaScenariosEnumSchema)]),
);
