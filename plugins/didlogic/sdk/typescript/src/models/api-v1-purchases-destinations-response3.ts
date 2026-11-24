import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1PurchasesDestinationsResponse3 = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PurchasesDestinationsResponse3Schema: Schema<ApiV1PurchasesDestinationsResponse3> =
  s.object<ApiV1PurchasesDestinationsResponse3>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );
