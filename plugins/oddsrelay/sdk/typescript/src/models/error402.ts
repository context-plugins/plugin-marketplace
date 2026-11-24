import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error7Schema, type Error7 } from "./error7.js";

export type Error402 = {
  /**
   * `insufficient_tokens`: the request's price is above the account's balance. Nothing was served
   * or spent. The message names the price, the balance and the reset, and two fixes: add filters,
   * or (plan `business`) talk to us about Enterprise at https://oddsrelay.io/contact, or (a custom
   * plan) talk to us about raising your allowance at https://oddsrelay.io/contact, or (every other
   * plan) upgrade. No `Retry-After`.
   */
  error: Error7;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error402Schema: Schema<Error402> = s.object<Error402>(
  {
    error: error7Schema,
  },
  { additionalProperties: s.json() },
);
