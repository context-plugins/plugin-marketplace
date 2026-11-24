import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { didDestination1Schema, type DidDestination1 } from "./did-destination1.js";

export type ApiV1PurchasesDestinationsResponse2 = {
  /** Updated destination details */
  didDestination: DidDestination1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PurchasesDestinationsResponse2Schema: Schema<ApiV1PurchasesDestinationsResponse2> =
  s.object<ApiV1PurchasesDestinationsResponse2>(
    {
      didDestination: didDestination1Schema,
      _keysMap: {
        didDestination: "did_destination",
      },
    },
    { additionalProperties: s.json() },
  );
