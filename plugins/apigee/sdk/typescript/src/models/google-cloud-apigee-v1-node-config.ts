import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** NodeConfig for setting the min/max number of nodes associated with the environment. */
export type GoogleCloudApigeeV1NodeConfig = {
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

export const googleCloudApigeeV1NodeConfigSchema: Schema<GoogleCloudApigeeV1NodeConfig> =
  s.object<GoogleCloudApigeeV1NodeConfig>(
    {
      currentAggregateNodeCount: s.optional(s.string()),
      minNodeCount: s.optional(s.string()),
      maxNodeCount: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
