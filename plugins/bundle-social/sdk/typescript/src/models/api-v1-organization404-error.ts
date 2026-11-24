import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1Organization404Error = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1Organization404ErrorSchema: Schema<ApiV1Organization404Error> =
  s.object<ApiV1Organization404Error>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
