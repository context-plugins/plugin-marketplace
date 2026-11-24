import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CategoricalParameterRange = {
  /** The name of the categorical hyperparameter to tune. */
  name: string;
  /** A list of the tunable categories for the hyperparameter. */
  values: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const categoricalParameterRangeSchema: Schema<CategoricalParameterRange> =
  s.object<CategoricalParameterRange>(
    {
      name: s.string(),
      values: s.array(s.string()),
      _keysMap: {
        name: "Name",
        values: "Values",
      },
    },
    { additionalProperties: s.json() },
  );
