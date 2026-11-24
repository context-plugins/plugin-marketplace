import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { destinationSchema, type Destination } from "./destination.js";

export type DestinationsResponse = {
  data: Destination[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const destinationsResponseSchema: Schema<DestinationsResponse> = s.object<DestinationsResponse>(
  {
    data: s.array(s.lazy(() => destinationSchema)),
  },
  { additionalProperties: s.json() },
);
