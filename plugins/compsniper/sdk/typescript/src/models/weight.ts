import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Weight = {
  value: number;
  /** @default "lb" */
  unit?: "lb";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const weightProperties: s.Shape<Weight> = {
  value: s.float64(),
  unit: s.defaulted(s.literal("lb"), "lb"),
};

export const weightInternalSchema: Schema<Weight> = s.object<Weight>(weightProperties, {
  additionalProperties: s.json(),
});

export const weightSchema: Schema<Weight> = s.lazySchema(() =>
  s.object<Weight>(
    {
      ...weightProperties,
      value: s.float64().check(s.gt(0), s.lte(150)),
    },
    { additionalProperties: s.json() },
  ),
);
