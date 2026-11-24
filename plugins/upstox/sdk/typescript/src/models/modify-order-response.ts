import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modifyOrderData2Schema, type ModifyOrderData2 } from "./modify-order-data2.js";
import { statusSchema, type Status } from "./status.js";

export type ModifyOrderResponse = {
  status?: Status;
  /** Response data for modify order request */
  data?: ModifyOrderData2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modifyOrderResponseSchema: Schema<ModifyOrderResponse> = s.object<ModifyOrderResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => modifyOrderData2Schema)),
  },
  { additionalProperties: s.json() },
);
