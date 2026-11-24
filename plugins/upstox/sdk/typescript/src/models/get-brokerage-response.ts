import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { brokerageWrapperData1Schema, type BrokerageWrapperData1 } from "./brokerage-wrapper-data1.js";
import { statusSchema, type Status } from "./status.js";

export type GetBrokerageResponse = {
  status?: Status;
  /** Response data for brokerage */
  data?: BrokerageWrapperData1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getBrokerageResponseSchema: Schema<GetBrokerageResponse> = s.object<GetBrokerageResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => brokerageWrapperData1Schema)),
  },
  { additionalProperties: s.json() },
);
