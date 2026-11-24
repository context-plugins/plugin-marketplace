import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cldTypeSchema, type CldType } from "./cld-type.js";
import { cloudDiagramGroupItemSchema, type CloudDiagramGroupItem } from "./cloud-diagram-group-item.js";
import { cloudDiagramIssueSchema, type CloudDiagramIssue } from "./cloud-diagram-issue.js";
import { groupTypeSchema, type GroupType } from "./group-type.js";

/** A group component (VPC, subnet, region, cluster, etc.). */
export type CloudDiagramGroup = {
  /** Group ID. */
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
  /** Group type. */
  groupType?: GroupType;
  /** Group color. */
  color?: string;
  /** Group icon identifier. */
  icon?: string;
  /** Components contained in the group. */
  items?: CloudDiagramGroupItem[];
  /** Issues associated with this group. */
  issues?: CloudDiagramIssue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramGroupSchema: Schema<CloudDiagramGroup> = s.object<CloudDiagramGroup>(
  {
    id: s.string(),
    name: s.optional(s.string()),
    props: s.optional(s.record(s.string(), s.unknown())),
    cldId: s.optional(s.string()),
    cldType: s.optional(s.lazy(() => cldTypeSchema)),
    cldSync: s.optional(s.boolean()),
    cldAccount: s.optional(s.string()),
    tags: s.optional(s.array(s.string())),
    groupType: s.optional(s.lazy(() => groupTypeSchema)),
    color: s.optional(s.string()),
    icon: s.optional(s.string()),
    items: s.optional(s.array(s.lazy(() => cloudDiagramGroupItemSchema))),
    issues: s.optional(s.array(s.lazy(() => cloudDiagramIssueSchema))),
    _keysMap: {
      id: "_id",
      cldId: "cld_id",
      cldType: "cld_type",
      cldSync: "cld_sync",
      cldAccount: "cld_account",
      groupType: "group_type",
    },
  },
  { additionalProperties: s.json() },
);
