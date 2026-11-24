import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1Organization404Error1 = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1Organization404Error1Schema: Schema<ApiV1Organization404Error1> =
  s.object<ApiV1Organization404Error1>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
