import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  bookmakerOddsRelayServiceApiSchema,
  type BookmakerOddsRelayServiceApi,
} from "./bookmaker-odds-relay-service-api.js";
import { exchangeSchema, type Exchange } from "./exchange.js";

export type Products2 = {
  bookmakers: BookmakerOddsRelayServiceApi[];
  exchanges: Exchange[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const products2Schema: Schema<Products2> = s.object<Products2>(
  {
    bookmakers: s.array(s.lazy(() => bookmakerOddsRelayServiceApiSchema)),
    exchanges: s.array(s.lazy(() => exchangeSchema)),
  },
  { additionalProperties: s.json() },
);
