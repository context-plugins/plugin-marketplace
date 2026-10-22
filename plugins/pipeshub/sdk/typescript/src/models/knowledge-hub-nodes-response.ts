import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { breadcrumbSchema, type Breadcrumb } from "./breadcrumb.js";
import { countsSchema, type Counts } from "./counts.js";
import { currentNodeSchema, type CurrentNode } from "./current-node.js";
import { filters1Schema, type Filters1 } from "./filters1.js";
import { knowledgeHubNodeSchema, type KnowledgeHubNode } from "./knowledge-hub-node.js";
import { pagination4Schema, type Pagination4 } from "./pagination4.js";
import { parentNodeSchema, type ParentNode } from "./parent-node.js";
import { permissionsSchema, type Permissions } from "./permissions.js";

/**
 * Response body for the Knowledge Hub nodes API. The deployed service serialises optional values as
 * JSON `null` and always includes the keys listed in `required` (Swagger / clients will see stable
 * shapes, not omitted properties).
 */
export type KnowledgeHubNodesResponse = {
  /** Deepest a collection folder may be nested; a folder directly in the collection is depth 1. */
  maxFolderDepth: number;
  /**
   * Always `true` on HTTP 200. Failures use 4xx/5xx error envelopes, not this body shape.
   *
   * @default "True"
   */
  success?: "True";
  /** Always `null` on HTTP 200. */
  error: string | null;
  /** Current parent node ID when browsing children; `null` at root. */
  id: string | null;
  /** Node being browsed when `parentId` is in the path; `null` at root. */
  currentNode: CurrentNode | null;
  /** Parent of `currentNode` when present; `null` when not applicable. */
  parentNode: ParentNode | null;
  /** Page of nodes for the current browse or search. */
  items: KnowledgeHubNode[];
  pagination: Pagination4;
  filters: Filters1;
  /** Present when `include=breadcrumbs`; otherwise `null`. */
  breadcrumbs: Breadcrumb[] | null;
  /** Present when `include=counts`; otherwise `null`. */
  counts: Counts | null;
  /** Present when `include=permissions`; otherwise `null`. */
  permissions: Permissions | null;
};

export const knowledgeHubNodesResponseSchema: Schema<KnowledgeHubNodesResponse> =
  s.object<KnowledgeHubNodesResponse>({
    maxFolderDepth: s.int(),
    success: s.defaulted(s.literal("True"), "True"),
    error: s.nullable(s.string()),
    id: s.nullable(s.string()),
    currentNode: s.nullable(s.lazy(() => currentNodeSchema)),
    parentNode: s.nullable(s.lazy(() => parentNodeSchema)),
    items: s.array(s.lazy(() => knowledgeHubNodeSchema)),
    pagination: pagination4Schema,
    filters: filters1Schema,
    breadcrumbs: s.nullable(s.array(s.lazy(() => breadcrumbSchema))),
    counts: s.nullable(s.lazy(() => countsSchema)),
    permissions: s.nullable(s.lazy(() => permissionsSchema)),
  });
