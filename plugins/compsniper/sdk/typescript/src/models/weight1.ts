import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Weight1 = {
  value: number;
  /** @default "oz" */
  unit?: "oz";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const weight1Properties: s.Shape<Weight1> = {
  value: s.float64(),
  unit: s.defaulted(s.literal("oz"), "oz"),
};

export const weight1InternalSchema: Schema<Weight1> = s.object<Weight1>(weight1Properties, {
  additionalProperties: s.json(),
});

export const weight1Schema: Schema<Weight1> = s.lazySchema(() =>
  s.object<Weight1>(
    {
      ...weight1Properties,
      value: s.float64().check(s.gt(0), s.lte(2400)),
    },
    { additionalProperties: s.json() },
  ),
);
