import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  cardMissingRequiredFieldsErrorSchema,
  type CardMissingRequiredFieldsError,
} from "../card-missing-required-fields-error.js";
import {
  duplicateFundingSourceErrorSchema,
  type DuplicateFundingSourceError,
} from "../duplicate-funding-source-error.js";
import { inactiveExchangeErrorSchema, type InactiveExchangeError } from "../inactive-exchange-error.js";
import {
  invalidExchangeTokenErrorSchema,
  type InvalidExchangeTokenError,
} from "../invalid-exchange-token-error.js";
import { invalidTokenErrorSchema, type InvalidTokenError } from "../invalid-token-error.js";
import {
  maximumCardsExceededErrorSchema,
  type MaximumCardsExceededError,
} from "../maximum-cards-exceeded-error.js";
import {
  unsupportedCardCountryErrorSchema,
  type UnsupportedCardCountryError,
} from "../unsupported-card-country-error.js";

export type CustomersFundingSourcesResponse =
  | InactiveExchangeError
  | InvalidExchangeTokenError
  | DuplicateFundingSourceError
  | UnsupportedCardCountryError
  | InvalidTokenError
  | MaximumCardsExceededError
  | CardMissingRequiredFieldsError;

export const customersFundingSourcesResponseSchema: Schema<CustomersFundingSourcesResponse> =
  s.of<CustomersFundingSourcesResponse>(
    s.union([
      s.lazy(() => inactiveExchangeErrorSchema),
      s.lazy(() => invalidExchangeTokenErrorSchema),
      s.lazy(() => duplicateFundingSourceErrorSchema),
      s.lazy(() => unsupportedCardCountryErrorSchema),
      s.lazy(() => invalidTokenErrorSchema),
      s.lazy(() => maximumCardsExceededErrorSchema),
      s.lazy(() => cardMissingRequiredFieldsErrorSchema),
    ]),
  );
