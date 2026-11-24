import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { input1Schema, type Input1 } from "./input1.js";

/** Balance verification result */
export type Balance = {
  input: Input1;
  /** Whether the balance falls within the specified range */
  match: boolean | null;
  /** Confidence score of the match (0.0 to 1.0) */
  confidence: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const balanceProperties: s.Shape<Balance> = {
  input: input1Schema,
  match: s.nullable(s.boolean()),
  confidence: s.float64(),
};

export const balanceInternalSchema: Schema<Balance> = s.object<Balance>(balanceProperties, {
  additionalProperties: s.json(),
});

export const balanceSchema: Schema<Balance> = s.lazySchema(() =>
  s.object<Balance>(
    {
      ...balanceProperties,
      confidence: s.float64().check(s.gte(0), s.lte(1)),
    },
    { additionalProperties: s.json() },
  ),
);
