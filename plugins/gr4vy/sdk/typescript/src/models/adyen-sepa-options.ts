import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionaldataModelSchema, type AdditionaldataModel } from "./unions/additionaldata-model.js";
import {
  autoRescueSepaScenarioSchema,
  type AutoRescueSepaScenario,
} from "./unions/auto-rescue-sepa-scenario.js";
import { autorescueSchema, type Autorescue } from "./unions/autorescue.js";
import { maxdaystorescueSchema, type Maxdaystorescue } from "./unions/maxdaystorescue.js";
import { ownernameSchema, type Ownername } from "./unions/ownername.js";

export type AdyenSepaOptions = {
  /**
   * Set to `true` to enable Auto Rescue for a transaction. Use the `maxDaysToRescue` to specify a
   * rescue window.
   */
  autoRescue?: Autorescue;
  /**
   * The rescue window for a transaction, in days, when `autoRescue` is set to `true`. You can
   * specify a value between 1 and 48. For cards, the default is one calendar month. For SEPA, the
   * default is 42 days.
   */
  maxDaysToRescue?: Maxdaystorescue;
  /** Passes additional data to the Adyen API when creating a transaction. */
  additionalData?: AdditionaldataModel;
  /** The rescue scenario to simulate for a transaction, when `autoRescue` is set to `true`. */
  autoRescueSepaScenario?: AutoRescueSepaScenario;
  /** The name on the SEPA bank account. */
  ownerName?: Ownername;
};

export const adyenSepaOptionsSchema: Schema<AdyenSepaOptions> = s.object<AdyenSepaOptions>({
  autoRescue: s.optional(s.lazy(() => autorescueSchema)),
  maxDaysToRescue: s.optional(s.lazy(() => maxdaystorescueSchema)),
  additionalData: s.optional(s.lazy(() => additionaldataModelSchema)),
  autoRescueSepaScenario: s.optional(s.lazy(() => autoRescueSepaScenarioSchema)),
  ownerName: s.optional(s.lazy(() => ownernameSchema)),
});
