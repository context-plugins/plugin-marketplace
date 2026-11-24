import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  availableNumberInternalSchema,
  availableNumberSchema,
  type AvailableNumber,
} from "./available-number.js";
import { numberPricingSchema, type NumberPricing } from "./number-pricing.js";

export type ApiV1NumbersAvailableResponse = {
  numbers?: AvailableNumber[];
  count?: number;
  /** What your account pays for this number type, plan-aware. */
  pricing?: NumberPricing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1NumbersAvailableResponseProperties: s.Shape<ApiV1NumbersAvailableResponse> = {
  numbers: s.optional(s.array(s.lazy(() => availableNumberInternalSchema))),
  count: s.optional(s.int()),
  pricing: s.optional(s.lazy(() => numberPricingSchema)),
};

export const apiV1NumbersAvailableResponseInternalSchema: Schema<ApiV1NumbersAvailableResponse> =
  s.object<ApiV1NumbersAvailableResponse>(apiV1NumbersAvailableResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1NumbersAvailableResponseSchema: Schema<ApiV1NumbersAvailableResponse> = s.lazySchema(() =>
  s.object<ApiV1NumbersAvailableResponse>(
    {
      ...apiV1NumbersAvailableResponseProperties,
      numbers: s.optional(s.array(s.lazy(() => availableNumberSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
