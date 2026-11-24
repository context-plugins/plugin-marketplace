import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Output only. The config for Compute Engine Instance Group Manager that manages this group. This
 * is only used for preemptible instance groups.
 */
export type ManagedGroupConfig2 = {
  /** Output only. The name of the Instance Template used for the Managed Instance Group. */
  instanceTemplateName?: string;
  /** Output only. The name of the Instance Group Manager for this group. */
  instanceGroupManagerName?: string;
  /**
   * Output only. The partial URI to the instance group manager for this group. E.g.
   * projects/my-project/regions/us-central1/instanceGroupManagers/my-igm.
   */
  instanceGroupManagerUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const managedGroupConfig2Schema: Schema<ManagedGroupConfig2> = s.object<ManagedGroupConfig2>(
  {
    instanceTemplateName: s.optional(s.string()),
    instanceGroupManagerName: s.optional(s.string()),
    instanceGroupManagerUri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
