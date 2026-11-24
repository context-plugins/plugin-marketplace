import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2NumbersPurchase400Error = {
  error: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersPurchase400ErrorSchema: Schema<ApiV2NumbersPurchase400Error> =
  s.object<ApiV2NumbersPurchase400Error>(
    {
      error: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
