import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cardStatusSchema, type CardStatus } from "./card-status.js";
import { cardTypeSchema, type CardType } from "./card-type.js";
import {
  currentPeriodBillV3CardsApiSchema,
  type CurrentPeriodBillV3CardsApi,
} from "./current-period-bill-v3-cards-api.js";
import { deletedReasonTypeSchema, type DeletedReasonType } from "./deleted-reason-type.js";

/** Cards response. */
export type CardResponseDto = {
  /**
   * BILL-generated ID of the card
   *
   * @deprecated
   */
  id?: string;
  /** BILL-generated UUID of the card */
  uuid?: string;
  /** Card name */
  name?: string;
  /**
   * BILL-generated ID of the user linked with the card
   *
   * @deprecated
   */
  userId?: string;
  /** BILL-generated UUID of the user linked with the card */
  userUuid?: string;
  /**
   * BILL-generated ID of the budget linked with the card
   *
   * @deprecated
   */
  budgetId?: string;
  /** BILL-generated UUID of the budget linked with the card */
  budgetUuid?: string;
  /** Last four digits of the card number */
  lastFour?: string;
  /**
   * BILL-generated card expiration date. The value is in the `MM/YY` format.
   *
   * **Note**: Use the `validThru` value as the expiration date in a card payment. Do not use the
   * `expirationDate` value for this operation.
   */
  validThru?: string;
  /**
   * User-generated card expiration date. This value is in the `yyyy-MM-dd` format. BILL
   * automatically closes the card account on this date.
   *
   * **Note**: Use the `validThru` value as the expiration date in a card payment. Do not use the
   * `expirationDate` value for this operation.
   */
  expirationDate?: string;
  status?: CardStatus;
  deletedReason?: DeletedReasonType;
  type?: CardType;
  /**
   * Set as `true` to share all the budget funds with the card. This option enables the card user to
   * spend from unallocated budget funds when the allocation is empty.
   */
  shareBudgetFunds?: boolean;
  /** Set as `true` to renew the card funds in the next budget period */
  recurring?: boolean;
  /** Card spend limit for the all future budget periods */
  recurringLimit?: number;
  currentPeriod?: CurrentPeriodBillV3CardsApi;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cardResponseDtoSchema: Schema<CardResponseDto> = s.object<CardResponseDto>(
  {
    id: s.optional(s.string()),
    uuid: s.optional(s.string()),
    name: s.optional(s.string()),
    userId: s.optional(s.string()),
    userUuid: s.optional(s.string()),
    budgetId: s.optional(s.string()),
    budgetUuid: s.optional(s.string()),
    lastFour: s.optional(s.string()),
    validThru: s.optional(s.string()),
    expirationDate: s.optional(s.dateOnly()),
    status: s.optional(s.lazy(() => cardStatusSchema)),
    deletedReason: s.optional(s.lazy(() => deletedReasonTypeSchema)),
    type: s.optional(s.lazy(() => cardTypeSchema)),
    shareBudgetFunds: s.optional(s.boolean()),
    recurring: s.optional(s.boolean()),
    recurringLimit: s.optional(s.float64()),
    currentPeriod: s.optional(s.lazy(() => currentPeriodBillV3CardsApiSchema)),
    createdTime: s.optional(s.dateTime()),
    updatedTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
