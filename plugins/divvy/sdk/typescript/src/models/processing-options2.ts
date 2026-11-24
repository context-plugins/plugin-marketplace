import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  checkDeliveryTypeRequestSchema,
  type CheckDeliveryTypeRequest,
} from "./check-delivery-type-request.js";

export type ProcessingOptions2 = {
  /**
   * Set as `true` to use BILL Pay Faster. This field is required if `requestCheckDeliveryType` is
   * set.
   *
   * See [Payments](https://developer.bill.com/docs/ap-payments) in the Guides section for
   * information about BILL Pay Faster payments.
   */
  requestPayFaster?: boolean;
  requestCheckDeliveryType?: CheckDeliveryTypeRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const processingOptions2Schema: Schema<ProcessingOptions2> = s.object<ProcessingOptions2>(
  {
    requestPayFaster: s.optional(s.boolean()),
    requestCheckDeliveryType: s.optional(s.lazy(() => checkDeliveryTypeRequestSchema)),
  },
  { additionalProperties: s.json() },
);
