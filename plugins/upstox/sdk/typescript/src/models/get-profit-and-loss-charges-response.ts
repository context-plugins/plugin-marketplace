import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  profitAndLossChargesWrapperData2Schema,
  type ProfitAndLossChargesWrapperData2,
} from "./profit-and-loss-charges-wrapper-data2.js";
import { statusSchema, type Status } from "./status.js";

export type GetProfitAndLossChargesResponse = {
  status?: Status;
  /** Response data for brokerage */
  data?: ProfitAndLossChargesWrapperData2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getProfitAndLossChargesResponseSchema: Schema<GetProfitAndLossChargesResponse> =
  s.object<GetProfitAndLossChargesResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.lazy(() => profitAndLossChargesWrapperData2Schema)),
    },
    { additionalProperties: s.json() },
  );
