import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { completedPaymentDtoSchema, type CompletedPaymentDto } from "./completed-payment-dto.js";
import { failedPaymentDtoSchema, type FailedPaymentDto } from "./failed-payment-dto.js";
import { scheduledPaymentDtoSchema, type ScheduledPaymentDto } from "./scheduled-payment-dto.js";

/** Mass payment details response DTO. */
export type MassPaymentDetailsResponseDto = {
  /** Total number of payments in the mass payment batch */
  count?: number;
  /**
   * Scheduled payments. For each payment in the list, BILL has not started generating a payment
   * `id` value and API response.
   */
  scheduled?: ScheduledPaymentDto[];
  /**
   * Completed payments. For each payment in the list, BILL has successfully generated a payment
   * `id` value and API response.
   *
   * In the response, if the payment `id` is the same for multiple bills, the vendor has
   * `combinePayments` set as `true`.
   *
   * **Note**: From the list of `completed` payments, BILL begins processing payments based on the
   * payment `processDate`.
   */
  completed?: CompletedPaymentDto[];
  /** Failed payments. An error response is available for each failed payment. */
  failed?: FailedPaymentDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const massPaymentDetailsResponseDtoSchema: Schema<MassPaymentDetailsResponseDto> =
  s.object<MassPaymentDetailsResponseDto>(
    {
      count: s.optional(s.int()),
      scheduled: s.optional(s.array(s.lazy(() => scheduledPaymentDtoSchema))),
      completed: s.optional(s.array(s.lazy(() => completedPaymentDtoSchema))),
      failed: s.optional(s.array(s.lazy(() => failedPaymentDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
