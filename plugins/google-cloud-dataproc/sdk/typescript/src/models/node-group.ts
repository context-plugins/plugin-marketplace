import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { instanceGroupConfig2Schema, type InstanceGroupConfig2 } from "./instance-group-config2.js";
import { role1Schema, type Role1 } from "./role1.js";

/** Node Group. The NodeGroup resource is not related to the NodeGroupAffinity resource. */
export type NodeGroup = {
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

export const nodeGroupSchema: Schema<NodeGroup> = s.object<NodeGroup>(
  {
    name: s.optional(s.string()),
    roles: s.optional(s.array(s.lazy(() => role1Schema))),
    labels: s.optional(s.record(s.string(), s.string())),
    nodeGroupConfig: s.optional(s.lazy(() => instanceGroupConfig2Schema)),
  },
  { additionalProperties: s.json() },
);
