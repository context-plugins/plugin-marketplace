import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. NodeConfig of the environment. */
export type GoogleCloudApigeeV1NodeConfig2 = {
  /**
   * Output only. The current total number of gateway nodes that each environment currently has
   * across all instances.
   */
  currentAggregateNodeCount?: string;
  /**
   * Optional. The minimum total number of gateway nodes that the is reserved for all instances that
   * has the specified environment. If not specified, the default is determined by the recommended
   * minimum number of nodes for that gateway.
   */
  minNodeCount?: string;
  /**
   * Optional. The maximum total number of gateway nodes that the is reserved for all instances that
   * has the specified environment. If not specified, the default is determined by the recommended
   * maximum number of nodes for that gateway.
   */
  maxNodeCount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1NodeConfig2Schema: Schema<GoogleCloudApigeeV1NodeConfig2> =
  s.object<GoogleCloudApigeeV1NodeConfig2>(
    {
      currentAggregateNodeCount: s.optional(s.string()),
      minNodeCount: s.optional(s.string()),
      maxNodeCount: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
