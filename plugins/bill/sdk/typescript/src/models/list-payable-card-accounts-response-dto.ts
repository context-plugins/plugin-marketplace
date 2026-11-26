import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cardAccountResponseDtoSchema, type CardAccountResponseDto } from "./card-account-response-dto.js";
import { ratesSchema, type Rates } from "./rates.js";

/** List Card Accounts response DTO. */
export type ListPayableCardAccountsResponseDto = {
  rates?: Rates;
  /** List of card accounts */
  cards?: CardAccountResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listPayableCardAccountsResponseDtoSchema: Schema<ListPayableCardAccountsResponseDto> =
  s.object<ListPayableCardAccountsResponseDto>(
    {
      rates: s.optional(s.lazy(() => ratesSchema)),
      cards: s.optional(s.array(s.lazy(() => cardAccountResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
