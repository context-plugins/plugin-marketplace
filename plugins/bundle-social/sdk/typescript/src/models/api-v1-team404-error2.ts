import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1Team404Error2 = {
  statusCode?: number | null;
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1Team404Error2Schema: Schema<ApiV1Team404Error2> = s.object<ApiV1Team404Error2>(
  {
    statusCode: s.optionalNullable(s.float64()),
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
