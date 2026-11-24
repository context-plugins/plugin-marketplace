import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DbtCloud1 = {
  /** Model id that refers to a dbt Cloud model */
  modelId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dbtCloud1Schema: Schema<DbtCloud1> = s.object<DbtCloud1>(
  {
    modelId: s.float64(),
  },
  { additionalProperties: s.json() },
);
