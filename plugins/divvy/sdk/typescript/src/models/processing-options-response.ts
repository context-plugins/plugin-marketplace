import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  checkDeliveryTypeResponseSchema,
  type CheckDeliveryTypeResponse,
} from "./check-delivery-type-response.js";

/** User provided options for processing the payments request. */
export type ProcessingOptionsResponse = {
  /**
   * Set as `true` to use BILL Pay Faster. This field is required if `requestCheckDeliveryType` is
   * set.
   *
   * See [Payments](https://developer.bill.com/docs/ap-payments) in the Guides section for
   * information about BILL Pay Faster payments.
   */
  requestPayFaster?: boolean;
  /**
   * * Set as `false` to create a vendor payment for an existing bill.
   * * Set as `true` to create a bill for a vendor payment. If `createBill` is `true`, do not set
   *   `billId` in your payment request.
   */
  createBill?: boolean;
  requestCheckDeliveryType?: CheckDeliveryTypeResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const processingOptionsResponseSchema: Schema<ProcessingOptionsResponse> =
  s.object<ProcessingOptionsResponse>(
    {
      requestPayFaster: s.optional(s.boolean()),
      createBill: s.optional(s.boolean()),
      requestCheckDeliveryType: s.optional(s.lazy(() => checkDeliveryTypeResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
