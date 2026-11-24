import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { purchaseSchema, type Purchase } from "./purchase.js";

export type ApiV2NumbersPurchaseResponse = {
  /** Purchase response object */
  purchase: Purchase;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersPurchaseResponseSchema: Schema<ApiV2NumbersPurchaseResponse> =
  s.object<ApiV2NumbersPurchaseResponse>(
    {
      purchase: purchaseSchema,
    },
    { additionalProperties: s.json() },
  );
