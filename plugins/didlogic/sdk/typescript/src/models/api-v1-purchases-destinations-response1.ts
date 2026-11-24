import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { didDestinationSchema, type DidDestination } from "./did-destination.js";

export type ApiV1PurchasesDestinationsResponse1 = {
  /** Created destination details */
  didDestination: DidDestination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PurchasesDestinationsResponse1Schema: Schema<ApiV1PurchasesDestinationsResponse1> =
  s.object<ApiV1PurchasesDestinationsResponse1>(
    {
      didDestination: didDestinationSchema,
      _keysMap: {
        didDestination: "did_destination",
      },
    },
    { additionalProperties: s.json() },
  );
