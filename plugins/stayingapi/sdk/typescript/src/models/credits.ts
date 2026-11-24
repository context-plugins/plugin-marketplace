import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Credits = {
  /**
   * Raw credit balance (latest ledger balance_after; may include not-yet-materialized expired
   * credits).
   */
  balance: number;
  /**
   * Spendable credits now = raw balance minus expired-unconsumed credits and active reservations.
   * This is the number the admission gate uses.
   */
  available: number;
  /** Credits currently reserved by accepted work that has not settled or released yet. */
  held: number;
  /** Credits expiring within the next 7 days. */
  expiringSoon: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const creditsProperties: s.Shape<Credits> = {
  balance: s.int(),
  available: s.int(),
  held: s.int(),
  expiringSoon: s.int(),
};

export const creditsInternalSchema: Schema<Credits> = s.object<Credits>(creditsProperties, {
  additionalProperties: s.json(),
});

export const creditsSchema: Schema<Credits> = s.lazySchema(() =>
  s.object<Credits>(
    {
      ...creditsProperties,
      held: s.int().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
