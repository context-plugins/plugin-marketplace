import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { batchExecutionSummary1Schema, type BatchExecutionSummary1 } from "./batch-execution-summary1.js";
import {
  cancelOrExitMultiOrderData2Schema,
  type CancelOrExitMultiOrderData2,
} from "./cancel-or-exit-multi-order-data2.js";
import {
  cancelOrExitOrderErrorDataSchema,
  type CancelOrExitOrderErrorData,
} from "./cancel-or-exit-order-error-data.js";
import { statusSchema, type Status } from "./status.js";

export type CancelOrExitMultiOrderResponse = {
  status?: Status;
  /** Response data for cancel or exit order request */
  data?: CancelOrExitMultiOrderData2;
  /** Error data for cancel or exit order request */
  errors?: CancelOrExitOrderErrorData[];
  /** Execution summary for cancel or exit order request */
  summary?: BatchExecutionSummary1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelOrExitMultiOrderResponseSchema: Schema<CancelOrExitMultiOrderResponse> =
  s.object<CancelOrExitMultiOrderResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.lazy(() => cancelOrExitMultiOrderData2Schema)),
      errors: s.optional(s.array(s.lazy(() => cancelOrExitOrderErrorDataSchema))),
      summary: s.optional(s.lazy(() => batchExecutionSummary1Schema)),
    },
    { additionalProperties: s.json() },
  );
