import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { consumerSchema, type Consumer } from "./consumer.js";

/** Network configuration for the Dataproc Metastore service. */
export type NetworkConfig = {
  /** Immutable. The consumer-side network configuration for the Dataproc Metastore instance. */
  consumers?: Consumer[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const networkConfigSchema: Schema<NetworkConfig> = s.object<NetworkConfig>(
  {
    consumers: s.optional(s.array(s.lazy(() => consumerSchema))),
  },
  { additionalProperties: s.json() },
);
