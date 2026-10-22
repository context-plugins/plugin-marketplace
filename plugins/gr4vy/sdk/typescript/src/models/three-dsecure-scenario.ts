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
import { Type69, type69Schema } from "./type69.js";

export type ThreeDSecureScenario = {
  /** Always `three-d-secure-scenario`. @default Type69.ThreeDSecureScenario */
  type?: Type69;
  /** Unique identifier for the 3DS scenario */
  id: string;
  /** ID of the associated merchant account */
  merchantAccountId: string;
  /** The date and time when this 3DS scenario was first created in our system. */
  createdAt: Date;
  /** The date and time when this 3DS scenario was last updated in our system. */
  updatedAt: Date;
  /** Conditions for the scenario. */
  conditions: ThreeDSecureScenarioConditions2;
  /** Outcome for the scenario. */
  outcome: ThreeDSecureScenarioOutcome1;
};

export const threeDSecureScenarioSchema: Schema<ThreeDSecureScenario> = s.object<ThreeDSecureScenario>({
  type: s.defaulted(type69Schema, Type69.ThreeDSecureScenario),
  id: s.string(),
  merchantAccountId: s.string(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  conditions: threeDSecureScenarioConditions2Schema,
  outcome: threeDSecureScenarioOutcome1Schema,
  _keysMap: {
    merchantAccountId: "merchant_account_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
