import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { putCallOptionChainDataSchema, type PutCallOptionChainData } from "./put-call-option-chain-data.js";

export type OptionStrikeData = {
  expiry?: Date;
  pcr?: number;
  strikePrice?: number;
  underlyingKey?: string;
  underlyingSpotPrice?: number;
  callOptions?: PutCallOptionChainData;
  putOptions?: PutCallOptionChainData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const optionStrikeDataSchema: Schema<OptionStrikeData> = s.object<OptionStrikeData>(
  {
    expiry: s.optional(s.dateTime()),
    pcr: s.optional(s.float64()),
    strikePrice: s.optional(s.float64()),
    underlyingKey: s.optional(s.string()),
    underlyingSpotPrice: s.optional(s.float64()),
    callOptions: s.optional(s.lazy(() => putCallOptionChainDataSchema)),
    putOptions: s.optional(s.lazy(() => putCallOptionChainDataSchema)),
    _keysMap: {
      strikePrice: "strike_price",
      underlyingKey: "underlying_key",
      underlyingSpotPrice: "underlying_spot_price",
      callOptions: "call_options",
      putOptions: "put_options",
    },
  },
  { additionalProperties: s.json() },
);
