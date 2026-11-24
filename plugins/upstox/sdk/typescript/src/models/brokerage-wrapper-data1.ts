import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { brokerageData2Schema, type BrokerageData2 } from "./brokerage-data2.js";

/** Response data for brokerage */
export type BrokerageWrapperData1 = {
  /** Response data for charges details */
  charges?: BrokerageData2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const brokerageWrapperData1Schema: Schema<BrokerageWrapperData1> = s.object<BrokerageWrapperData1>(
  {
    charges: s.optional(s.lazy(() => brokerageData2Schema)),
  },
  { additionalProperties: s.json() },
);
