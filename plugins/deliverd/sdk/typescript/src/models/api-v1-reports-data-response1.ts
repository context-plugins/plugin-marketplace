import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ReportsDataResponse1 = {
  name: string;
  sizeBytes: number;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportsDataResponse1Schema: Schema<ApiV1ReportsDataResponse1> =
  s.object<ApiV1ReportsDataResponse1>(
    {
      name: s.string(),
      sizeBytes: s.float64(),
      updatedAt: s.string(),
    },
    { additionalProperties: s.json() },
  );
