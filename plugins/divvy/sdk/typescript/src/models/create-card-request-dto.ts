import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Create a virtual charge card */
export type CreateCardRequestDto = {
  /** Card name */
  name: string;
  /** BILL-generated ID or UUID of the user linked with the card */
  userId: string;
  /** BILL-generated ID or UUID of the budget linked with the card */
  budgetId: string;
  /** Card spend limit for the current budget period */
  limit?: number | null;
  /** Card spend limit for all future budget periods */
  recurringLimit?: number | null;
  /**
   * User-generated expiration date. The value is in the `yyyy-MM-dd` format. BILL automatically
   * closes the card account on this date.
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createCardRequestDtoProperties: s.Shape<CreateCardRequestDto> = {
  name: s.string(),
  userId: s.string(),
  budgetId: s.string(),
  limit: s.optionalNullable(s.float64()),
  recurringLimit: s.optionalNullable(s.float64()),
  expirationDate: s.optionalNullable(s.dateOnly()),
  shareBudgetFunds: s.optionalNullable(s.boolean()),
};

export const createCardRequestDtoInternalSchema: Schema<CreateCardRequestDto> =
  s.object<CreateCardRequestDto>(createCardRequestDtoProperties, { additionalProperties: s.json() });

export const createCardRequestDtoSchema: Schema<CreateCardRequestDto> = s.lazySchema(() =>
  s.object<CreateCardRequestDto>(
    {
      ...createCardRequestDtoProperties,
      name: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
