import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2NumbersPurchase401Error1 = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersPurchase401Error1Schema: Schema<ApiV2NumbersPurchase401Error1> =
  s.object<ApiV2NumbersPurchase401Error1>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );
