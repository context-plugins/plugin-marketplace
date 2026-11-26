import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Update a virtual charge card (limit updated) */
export type UpdateCardRequestDto = {
  /** Card name */
  name?: string | null;
  /** BILL-generated ID or UUID of the budget linked with the card */
  budgetId?: string | null;
  /** Card spend limit for the current budget period */
  availableFunds?: number | null;
  /** Card spend limit for all future budget periods */
  recurringLimit?: number | null;
  /**
   * User-generated expiration date. The value is in the `yyyy-MM-dd` format. BILL automatically
   * closes the card account on this date. To remove the card expiration date, set this field as
   * `null`.
   *
   * **Note**: Use the `validThru` value in the response as the expiration date in a card payment.
   * Do not use the `expirationDate` value for this operation.
   */
  expirationDate?: string | null;
  /**
   * Set as `true` to share all the budget funds with the card. This option enables the card user to
   * spend from unallocated budget funds when the allocation is empty.
   */
  shareBudgetFunds?: boolean | null;
  /**
   * Card policy for recurring budget periods.
   * * `true`: Renew the card funds in the next budget period
   * * `false`: Card is available only for the current budget period
   *
   * If you do not set this field, the card will retain its current policy.
   */
  recurring?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateCardRequestDtoSchema: Schema<UpdateCardRequestDto> = s.object<UpdateCardRequestDto>(
  {
    name: s.optionalNullable(s.string()),
    budgetId: s.optionalNullable(s.string()),
    availableFunds: s.optionalNullable(s.float64()),
    recurringLimit: s.optionalNullable(s.float64()),
    expirationDate: s.optionalNullable(s.dateOnly()),
    shareBudgetFunds: s.optionalNullable(s.boolean()),
    recurring: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
