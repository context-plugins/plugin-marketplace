import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { consumerSchema, type Consumer } from "./consumer.js";

/**
 * Output only. The network configuration contains the endpoint URI(s) of the auxiliary Hive
 * metastore service.
 */
export type NetworkConfig1 = {
  /** Immutable. The consumer-side network configuration for the Dataproc Metastore instance. */
  consumers?: Consumer[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const networkConfig1Schema: Schema<NetworkConfig1> = s.object<NetworkConfig1>(
  {
    consumers: s.optional(s.array(s.lazy(() => consumerSchema))),
  },
  { additionalProperties: s.json() },
);
