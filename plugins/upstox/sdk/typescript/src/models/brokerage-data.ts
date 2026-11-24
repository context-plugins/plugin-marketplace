import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { brokerageTaxes1Schema, type BrokerageTaxes1 } from "./brokerage-taxes1.js";
import { dpPlanSchema, type DpPlan } from "./dp-plan.js";
import { dpPlan1Schema, type DpPlan1 } from "./dp-plan1.js";
import { otherTaxesSchema, type OtherTaxes } from "./other-taxes.js";
import { otherTaxes1Schema, type OtherTaxes1 } from "./other-taxes1.js";

export type BrokerageData = {
  /** Total charges for the order */
  total?: number;
  /** Brokerage charges for the order */
  brokerage?: number;
  /** Taxes levied on order */
  taxes?: BrokerageTaxes1;
  /** Other charges levied */
  otherTaxes?: OtherTaxes1;
  /** DP charges related information */
  dpPlan?: DpPlan1;
  otherCharges?: OtherTaxes;
  dpPlan2?: DpPlan;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const brokerageDataSchema: Schema<BrokerageData> = s.object<BrokerageData>(
  {
    total: s.optional(s.float64()),
    brokerage: s.optional(s.float64()),
    taxes: s.optional(s.lazy(() => brokerageTaxes1Schema)),
    otherTaxes: s.optional(s.lazy(() => otherTaxes1Schema)),
    dpPlan: s.optional(s.lazy(() => dpPlan1Schema)),
    otherCharges: s.optional(s.lazy(() => otherTaxesSchema)),
    dpPlan2: s.optional(s.lazy(() => dpPlanSchema)),
    _keysMap: {
      otherCharges: "other_charges",
      dpPlan2: "dp_plan",
    },
  },
  { additionalProperties: s.json() },
);
