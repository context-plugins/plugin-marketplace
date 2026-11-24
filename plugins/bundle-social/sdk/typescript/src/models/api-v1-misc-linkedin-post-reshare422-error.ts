import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscLinkedinPostReshare422Error = {
  statusCode?: number | null;
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscLinkedinPostReshare422ErrorSchema: Schema<ApiV1MiscLinkedinPostReshare422Error> =
  s.object<ApiV1MiscLinkedinPostReshare422Error>(
    {
      statusCode: s.optionalNullable(s.float64()),
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
