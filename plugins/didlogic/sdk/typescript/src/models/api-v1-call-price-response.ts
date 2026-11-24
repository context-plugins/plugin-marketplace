import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { incrementSchema, type Increment } from "./increment.js";

export type ApiV1CallPriceResponse = {
  /** Destination as listed in your price list; null for an exact price only */
  destinationName: string | null;
  /** Price per minute in USD */
  price: number;
  increment: Increment;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CallPriceResponseSchema: Schema<ApiV1CallPriceResponse> = s.object<ApiV1CallPriceResponse>(
  {
    destinationName: s.nullable(s.string()),
    price: s.float64(),
    increment: incrementSchema,
    _keysMap: {
      destinationName: "destination_name",
    },
  },
  { additionalProperties: s.json() },
);
