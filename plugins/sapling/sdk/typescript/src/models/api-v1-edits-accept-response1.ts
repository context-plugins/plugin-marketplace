import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1EditsAcceptResponse1 = {
  message?: string;
  result?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1EditsAcceptResponse1Schema: Schema<ApiV1EditsAcceptResponse1> =
  s.object<ApiV1EditsAcceptResponse1>(
    {
      message: s.optional(s.string()),
      result: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
