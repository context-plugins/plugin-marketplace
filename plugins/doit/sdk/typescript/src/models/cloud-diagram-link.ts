import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cldTypeSchema, type CldType } from "./cld-type.js";
import {
  cloudDiagramComponentRefSchema,
  type CloudDiagramComponentRef,
} from "./cloud-diagram-component-ref.js";
import { cloudDiagramIssueSchema, type CloudDiagramIssue } from "./cloud-diagram-issue.js";
import { connectionTypeSchema, type ConnectionType } from "./connection-type.js";

/** A link component connecting two nodes or groups. */
export type CloudDiagramLink = {
  /** Link ID. */
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
  /** Link connection type. */
  connectionType?: ConnectionType;
  /** Reference to a diagram component, including its parent diagram and layer. */
  origin: CloudDiagramComponentRef;
  /** Reference to a diagram component, including its parent diagram and layer. */
  destination: CloudDiagramComponentRef;
  /** Owner layer ID for cross-diagram links. */
  ownerSsId?: string;
  /** Issues associated with this link. */
  issues?: CloudDiagramIssue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramLinkSchema: Schema<CloudDiagramLink> = s.object<CloudDiagramLink>(
  {
    id: s.string(),
    name: s.optional(s.string()),
    props: s.optional(s.record(s.string(), s.unknown())),
    cldId: s.optional(s.string()),
    cldType: s.optional(s.lazy(() => cldTypeSchema)),
    cldSync: s.optional(s.boolean()),
    cldAccount: s.optional(s.string()),
    tags: s.optional(s.array(s.string())),
    connectionType: s.optional(s.lazy(() => connectionTypeSchema)),
    origin: cloudDiagramComponentRefSchema,
    destination: cloudDiagramComponentRefSchema,
    ownerSsId: s.optional(s.string()),
    issues: s.optional(s.array(s.lazy(() => cloudDiagramIssueSchema))),
    _keysMap: {
      id: "_id",
      cldId: "cld_id",
      cldType: "cld_type",
      cldSync: "cld_sync",
      cldAccount: "cld_account",
      connectionType: "connection_type",
      ownerSsId: "owner_ss_id",
    },
  },
  { additionalProperties: s.json() },
);
