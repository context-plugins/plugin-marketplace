import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1PointSchema,
  type GoogleCloudApigeeV1Point,
} from "./google-cloud-apigee-v1-point.js";

/**
 * A transaction contains all of the debug information of the entire message flow of an API call
 * processed by the runtime plane. The information is collected and recorded at critical points of
 * the message flow in the runtime apiproxy.
 */
export type GoogleCloudApigeeV1DebugSessionTransaction = {
  /** Flag indicating whether a transaction is completed or not */
  completed?: boolean;
  /** List of debug data collected by runtime plane at various defined points in the flow. */
  point?: GoogleCloudApigeeV1Point[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DebugSessionTransactionSchema: Schema<GoogleCloudApigeeV1DebugSessionTransaction> =
  s.object<GoogleCloudApigeeV1DebugSessionTransaction>(
    {
      completed: s.optional(s.boolean()),
      point: s.optional(s.array(s.lazy(() => googleCloudApigeeV1PointSchema))),
    },
    { additionalProperties: s.json() },
  );
