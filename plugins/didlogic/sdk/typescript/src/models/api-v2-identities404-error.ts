import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2Identities404Error = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2Identities404ErrorSchema: Schema<ApiV2Identities404Error> =
  s.object<ApiV2Identities404Error>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );
