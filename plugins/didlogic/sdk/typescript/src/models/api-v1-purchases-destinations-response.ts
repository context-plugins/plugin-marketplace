import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { destinationSchema, type Destination } from "./destination.js";

export type ApiV1PurchasesDestinationsResponse = {
  /** List of destinations */
  destination: Destination[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PurchasesDestinationsResponseSchema: Schema<ApiV1PurchasesDestinationsResponse> =
  s.object<ApiV1PurchasesDestinationsResponse>(
    {
      destination: s.array(s.lazy(() => destinationSchema)),
    },
    { additionalProperties: s.json() },
  );
