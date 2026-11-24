import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { instanceGroupConfig2Schema, type InstanceGroupConfig2 } from "./instance-group-config2.js";
import { role1Schema, type Role1 } from "./role1.js";

/** Required. Node group configuration. */
export type NodeGroup2 = {
  /** The Node group resource name (https://aip.dev/122). */
  name?: string;
  /** Required. Node group roles. */
  roles?: Role1[];
  /**
   * Optional. Node group labels. Label keys must consist of from 1 to 63 characters and conform to
   * RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty. If specified, they
   * must consist of from 1 to 63 characters and conform to RFC 1035
   * (https://www.ietf.org/rfc/rfc1035.txt). The node group must have no more than 32 labels.
   */
  labels?: Record<string, string>;
  /** Optional. The node group instance group configuration. */
  nodeGroupConfig?: InstanceGroupConfig2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const nodeGroup2Schema: Schema<NodeGroup2> = s.object<NodeGroup2>(
  {
    name: s.optional(s.string()),
    roles: s.optional(s.array(s.lazy(() => role1Schema))),
    labels: s.optional(s.record(s.string(), s.string())),
    nodeGroupConfig: s.optional(s.lazy(() => instanceGroupConfig2Schema)),
  },
  { additionalProperties: s.json() },
);
