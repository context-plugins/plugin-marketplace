import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nodeTypeSchema, type NodeType } from "./node-type.js";
import { origin1Schema, type Origin1 } from "./origin1.js";
import { permission3Schema, type Permission3 } from "./permission3.js";

/**
 * One element of `items`. The live API keeps keys stable and sets inapplicable values to JSON
 * `null` (not omitted).
 */
export type KnowledgeHubNode = {
  /** Unique identifier for the node. */
  id: string;
  /** Display name of the node. */
  name: string;
  /** Type of the node (app, recordGroup, folder, or record). */
  nodeType: NodeType;
  /** Parent node ID, or `null` at the root browse level. */
  parentId: string | null;
  /** Origin type. */
  origin: Origin1;
  /** Connector display name / key when applicable; otherwise `null`. */
  connector: string | null;
  /**
   * Connector instance id for records and groups that come from a connector; otherwise `null`
   * (Collections, and app nodes).
   */
  connectorId: string | null;
  /** Record type when `nodeType` is `record`; otherwise `null`. */
  recordType: string | null;
  /** Record group type when `nodeType` is `recordGroup`; otherwise `null`. */
  recordGroupType: string | null;
  /** Indexing status when `nodeType` is `record`; otherwise `null`. */
  indexingStatus: string | null;
  /** Failure or status reason when set; otherwise `null`. */
  reason: string | null;
  /** True for internal/system nodes that do not originate from a source. */
  isInternal: boolean;
  /**
   * True for placeholder/stub nodes standing in for an out-of-scope ancestor (rendered read-only,
   * no content actions; excluded from search and indexing).
   */
  isPlaceholder: boolean;
  /** Creation timestamp (epoch ms). */
  createdAt: number;
  /** Update timestamp (epoch ms). */
  updatedAt: number;
  /** File size in bytes for file records; otherwise `null`. */
  sizeInBytes: number | null;
  mimeType: string | null;
  extension: string | null;
  webUrl: string | null;
  /** Whether the node has children (sidebar / tree). */
  hasChildren: boolean;
  previewRenderable: boolean | null;
  /** Per-item permission when `include=permissions` is requested; otherwise `null`. */
  permission: Permission3 | null;
  /**
   * Sharing status (e.g. `private`, `shared`, `team`, `workspace`) when applicable; otherwise
   * `null`.
   */
  sharingStatus: string | null;
};

export const knowledgeHubNodeSchema: Schema<KnowledgeHubNode> = s.object<KnowledgeHubNode>({
  id: s.string(),
  name: s.string(),
  nodeType: nodeTypeSchema,
  parentId: s.nullable(s.string()),
  origin: origin1Schema,
  connector: s.nullable(s.string()),
  connectorId: s.nullable(s.string()),
  recordType: s.nullable(s.string()),
  recordGroupType: s.nullable(s.string()),
  indexingStatus: s.nullable(s.string()),
  reason: s.nullable(s.string()),
  isInternal: s.boolean(),
  isPlaceholder: s.boolean(),
  createdAt: s.int(),
  updatedAt: s.int(),
  sizeInBytes: s.nullable(s.int()),
  mimeType: s.nullable(s.string()),
  extension: s.nullable(s.string()),
  webUrl: s.nullable(s.string()),
  hasChildren: s.boolean(),
  previewRenderable: s.nullable(s.boolean()),
  permission: s.nullable(s.lazy(() => permission3Schema)),
  sharingStatus: s.nullable(s.string()),
});
