import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { input2Schema, type Input2 } from "./input2.js";

/** Balance verification result */
export type Balance1 = {
  input: Input2;
  /** Whether the account balance matches the criteria */
  match: boolean;
  /** Confidence score for the match result */
  confidence: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const balance1Properties: s.Shape<Balance1> = {
  input: input2Schema,
  match: s.boolean(),
  confidence: s.float64(),
};

export const balance1InternalSchema: Schema<Balance1> = s.object<Balance1>(balance1Properties, {
  additionalProperties: s.json(),
});

export const balance1Schema: Schema<Balance1> = s.lazySchema(() =>
  s.object<Balance1>(
    {
      ...balance1Properties,
      confidence: s.float64().check(s.gte(0), s.lte(1)),
    },
    { additionalProperties: s.json() },
  ),
);
