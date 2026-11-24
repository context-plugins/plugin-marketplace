import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";
import { reasonSchema, type Reason } from "./reason.js";
import { typeSchema, type Type } from "./type.js";

export type Error = {
  /** Stable machine code; branch on this, never on `message`. */
  code: Code;
  /** Human text; may change. */
  message: string;
  /** `or_req_` + 32 hex, as `X-OddsRelay-Request-Id`. */
  requestId: string;
  /**
   * Scope 403s only: which axis refused (`not_in_key_scope` and `product_not_in_region` product;
   * `region_not_in_scope` and `bookmaker_not_in_region` region; `schema_not_in_scope` schema).
   */
  type?: Type;
  /**
   * `unknown_sport` (sport key bases), `unknown_bookmaker`, `unknown_exchange`,
   * `bookmaker_not_in_plan` (your plan's bookmakers, or your account scope's, in the call's
   * region), `sport_not_in_plan`, `market_not_in_plan` and `exchange_not_in_plan` (the scope's list
   * for that product): the values accepted, sorted. `unknown_market`: the market keys this product
   * carries, sorted (keyless `/v2/coverage`'s `markets`); a key another product carries may also be
   * accepted on this route, and matches nothing here.
   */
  valid?: string[];
  /**
   * `unknown_market` only, when another product carries the market: those products, sorted, as the
   * `{type}` of `/v2/odds/{type}` (or `raw`). Left out when no product carries it.
   */
  products?: string[];
  /** `account_suspended` only. */
  reason?: Reason;
  /** `account_suspended` only. */
  dashboardUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    code: codeSchema,
    message: s.string(),
    requestId: s.string(),
    type: s.optional(s.lazy(() => typeSchema)),
    valid: s.optional(s.array(s.string())),
    products: s.optional(s.array(s.string())),
    reason: s.optional(s.lazy(() => reasonSchema)),
    dashboardUrl: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
      dashboardUrl: "dashboard_url",
    },
  },
  { additionalProperties: s.json() },
);
