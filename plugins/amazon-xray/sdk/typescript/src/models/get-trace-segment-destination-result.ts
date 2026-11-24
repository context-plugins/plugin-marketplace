import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { destinationSchema, type Destination } from "./destination.js";
import {
  statusAwsXRayOperationsApiSchema,
  type StatusAwsXRayOperationsApi,
} from "./status-aws-xray-operations-api.js";

export type GetTraceSegmentDestinationResult = {
  /** Retrieves the current destination. */
  destination?: Destination;
  /** Status of the retrieval. */
  status?: StatusAwsXRayOperationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getTraceSegmentDestinationResultSchema: Schema<GetTraceSegmentDestinationResult> =
  s.object<GetTraceSegmentDestinationResult>(
    {
      destination: s.optional(s.lazy(() => destinationSchema)),
      status: s.optional(s.lazy(() => statusAwsXRayOperationsApiSchema)),
      _keysMap: {
        destination: "Destination",
        status: "Status",
      },
    },
    { additionalProperties: s.json() },
  );
