import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1Post409Error = {
  statusCode?: number | null;
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1Post409ErrorSchema: Schema<ApiV1Post409Error> = s.object<ApiV1Post409Error>(
  {
    statusCode: s.optionalNullable(s.float64()),
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
