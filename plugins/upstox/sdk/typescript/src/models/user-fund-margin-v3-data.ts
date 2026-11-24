import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { availableToTradeSchema, type AvailableToTrade } from "./available-to-trade.js";
import { unavailableToTradeSchema, type UnavailableToTrade } from "./unavailable-to-trade.js";

export type UserFundMarginV3Data = {
  availableToTrade?: AvailableToTrade;
  unavailableToTrade?: UnavailableToTrade;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userFundMarginV3DataSchema: Schema<UserFundMarginV3Data> = s.object<UserFundMarginV3Data>(
  {
    availableToTrade: s.optional(s.lazy(() => availableToTradeSchema)),
    unavailableToTrade: s.optional(s.lazy(() => unavailableToTradeSchema)),
    _keysMap: {
      availableToTrade: "available_to_trade",
      unavailableToTrade: "unavailable_to_trade",
    },
  },
  { additionalProperties: s.json() },
);
