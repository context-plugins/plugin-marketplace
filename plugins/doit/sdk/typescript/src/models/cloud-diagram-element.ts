import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cldTypeSchema, type CldType } from "./cld-type.js";
import { cloudDiagramIssueSchema, type CloudDiagramIssue } from "./cloud-diagram-issue.js";

/** An element component (application-layer component). */
export type CloudDiagramElement = {
  /** Element ID. */
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
  /** Element color. */
  color?: string;
  /** Element icon identifier. */
  icon?: string;
  /** Parent element ID. */
  parent?: string;
  /** Issues associated with this element. */
  issues?: CloudDiagramIssue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramElementSchema: Schema<CloudDiagramElement> = s.object<CloudDiagramElement>(
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
    issues: s.optional(s.array(s.lazy(() => cloudDiagramIssueSchema))),
    _keysMap: {
      id: "_id",
      cldId: "cld_id",
      cldType: "cld_type",
      cldSync: "cld_sync",
      cldAccount: "cld_account",
    },
  },
  { additionalProperties: s.json() },
);
