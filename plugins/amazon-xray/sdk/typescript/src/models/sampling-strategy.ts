import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { nameSchema, type Name } from "./name.js";

export type SamplingStrategy = {
  /** The name of a sampling rule. */
  name?: Name;
  /** The value of a sampling rule. */
  value?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const samplingStrategySchema: Schema<SamplingStrategy> = s.object<SamplingStrategy>(
  {
    name: s.optional(s.lazy(() => nameSchema)),
    value: s.optional(s.float64()),
    _keysMap: {
      name: "Name",
      value: "Value",
    },
  },
  { additionalProperties: s.json() },
);
