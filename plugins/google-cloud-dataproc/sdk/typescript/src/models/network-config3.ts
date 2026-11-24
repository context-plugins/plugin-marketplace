import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { consumerSchema, type Consumer } from "./consumer.js";

/**
 * Optional. The configuration specifying the network settings for the Dataproc Metastore service.
 */
export type NetworkConfig3 = {
  /** Immutable. The consumer-side network configuration for the Dataproc Metastore instance. */
  consumers?: Consumer[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const networkConfig3Schema: Schema<NetworkConfig3> = s.object<NetworkConfig3>(
  {
    consumers: s.optional(s.array(s.lazy(() => consumerSchema))),
  },
  { additionalProperties: s.json() },
);
