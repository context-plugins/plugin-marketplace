import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Dbt1 = {
  /** Model id that refers to a dbt model */
  modelId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dbt1Schema: Schema<Dbt1> = s.object<Dbt1>(
  {
    modelId: s.float64(),
  },
  { additionalProperties: s.json() },
);
