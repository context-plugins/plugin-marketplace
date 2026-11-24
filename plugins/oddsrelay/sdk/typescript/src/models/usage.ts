import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { floodCapSchema, type FloodCap } from "./flood-cap.js";
import { keySchema, type Key } from "./key.js";
import { tokensSchema, type Tokens } from "./tokens.js";

export type Usage = {
  plan: string | null;
  rateCard: string;
  account: Account;
  /**
   * `remaining` and `limit` read `unlimited` on an unlimited account; null while the balance is
   * unknown.
   */
  tokens: Tokens;
  regions: string[];
  key: Key;
  floodCap: FloodCap;
  /**
   * Your account's scope, or null when it has none: `{"products": {<product>: {<axis>: [values] |
   * null}}}`. A product not listed is not readable; within one, a null axis means every value. The
   * axes are each product's filters: `sports`, `markets`, `bookmakers`, `exchanges` on the six
   * matched boards; `sports`, `markets`, `bookmakers` (venues of both kinds) on `raw`, which also
   * answers `/v2/odds/event/{id}`. Products and axes are always listed in that order and each list
   * sorted. A value a call names outside it is a 403 `*_not_in_plan` with `valid`; a filter left
   * out is trimmed to it.
   */
  scope: Record<string, unknown> | null;
  /** The version of `scope`, raised by each change; null when the account has no scope. */
  scopeVersion: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageSchema: Schema<Usage> = s.object<Usage>(
  {
    plan: s.nullable(s.string()),
    rateCard: s.string(),
    account: accountSchema,
    tokens: tokensSchema,
    regions: s.array(s.string()),
    key: keySchema,
    floodCap: floodCapSchema,
    scope: s.nullable(s.record(s.string(), s.unknown())),
    scopeVersion: s.nullable(s.int()),
    _keysMap: {
      rateCard: "rate_card",
      floodCap: "flood_cap",
      scopeVersion: "scope_version",
    },
  },
  { additionalProperties: s.json() },
);
