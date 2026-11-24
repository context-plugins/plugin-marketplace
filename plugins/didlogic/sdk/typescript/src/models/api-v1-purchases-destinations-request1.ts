import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { destination2Schema, type Destination2 } from "./destination2.js";

export type ApiV1PurchasesDestinationsRequest1 = {
  destination?: Destination2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PurchasesDestinationsRequest1Schema: Schema<ApiV1PurchasesDestinationsRequest1> =
  s.object<ApiV1PurchasesDestinationsRequest1>(
    {
      destination: s.optional(s.lazy(() => destination2Schema)),
    },
    { additionalProperties: s.json() },
  );
