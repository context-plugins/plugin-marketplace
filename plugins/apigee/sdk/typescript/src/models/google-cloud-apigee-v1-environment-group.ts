import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";

/**
 * EnvironmentGroup configuration. An environment group is used to group one or more Apigee
 * environments under a single host name.
 */
export type GoogleCloudApigeeV1EnvironmentGroup = {
  /**
   * Output only. State of the environment group. Values other than ACTIVE means the resource is not
   * ready to use.
   */
  state?: State;
  /** Required. Host names for this environment group. */
  hostnames?: string[];
  /**
   * Output only. The time at which the environment group was created as milliseconds since epoch.
   */
  createdAt?: string;
  /**
   * Output only. The time at which the environment group was last updated as milliseconds since
   * epoch.
   */
  lastModifiedAt?: string;
  /** ID of the environment group. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1EnvironmentGroupSchema: Schema<GoogleCloudApigeeV1EnvironmentGroup> =
  s.object<GoogleCloudApigeeV1EnvironmentGroup>(
    {
      state: s.optional(s.lazy(() => stateSchema)),
      hostnames: s.optional(s.array(s.string())),
      createdAt: s.optional(s.string()),
      lastModifiedAt: s.optional(s.string()),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
