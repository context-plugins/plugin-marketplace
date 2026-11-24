import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cldTypeSchema, type CldType } from "./cld-type.js";
import {
  cloudDiagramInfraNodeRefSchema,
  type CloudDiagramInfraNodeRef,
} from "./cloud-diagram-infra-node-ref.js";
import { cloudDiagramIssueSchema, type CloudDiagramIssue } from "./cloud-diagram-issue.js";

/** A node component (host, service, or application component). */
export type CloudDiagramNode = {
  /** Node ID. */
  id: string;
  /** Component name. */
  name?: string;
  /** Custom component properties (key-value pairs). */
  props?: Record<string, unknown>;
  /** Cloud resource ID (set on cloud-imported components). */
  cldId?: string;
  /** Cloud account type. */
  cldType?: CldType;
  /** Whether this component is synced with cloud. */
  cldSync?: boolean;
  /** Cloud account ID. */
  cldAccount?: string;
  /** Tags assigned to the component. */
  tags?: string[];
  /** Node color. */
  color?: string;
  /** Node icon identifier. */
  icon?: string;
  /** Parent node ID. */
  parent?: string;
  /** Reference to a linked infrastructure node in another diagram. */
  infraNode?: CloudDiagramInfraNodeRef;
  /** Number of instances represented by this node. */
  instanceCount?: number;
  /** Whether the node is currently running. */
  running?: boolean;
  /** Issues associated with this node. */
  issues?: CloudDiagramIssue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramNodeSchema: Schema<CloudDiagramNode> = s.object<CloudDiagramNode>(
  {
    id: s.string(),
    name: s.optional(s.string()),
    props: s.optional(s.record(s.string(), s.unknown())),
    cldId: s.optional(s.string()),
    cldType: s.optional(s.lazy(() => cldTypeSchema)),
    cldSync: s.optional(s.boolean()),
    cldAccount: s.optional(s.string()),
    tags: s.optional(s.array(s.string())),
    color: s.optional(s.string()),
    icon: s.optional(s.string()),
    parent: s.optional(s.string()),
    infraNode: s.optional(s.lazy(() => cloudDiagramInfraNodeRefSchema)),
    instanceCount: s.optional(s.int()),
    running: s.optional(s.boolean()),
    issues: s.optional(s.array(s.lazy(() => cloudDiagramIssueSchema))),
    _keysMap: {
      id: "_id",
      cldId: "cld_id",
      cldType: "cld_type",
      cldSync: "cld_sync",
      cldAccount: "cld_account",
      infraNode: "infra_node",
      instanceCount: "instance_count",
    },
  },
  { additionalProperties: s.json() },
);
