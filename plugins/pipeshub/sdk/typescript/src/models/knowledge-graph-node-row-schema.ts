import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * One row in a navigate listing. Carries the identity fields of KnowledgeGraphNodeRefSchema
 * (inlined rather than composed, so this object can stay closed) plus display detail.
 */
export type KnowledgeGraphNodeRowSchema = {
  id: string;
  name: string;
  /** One of `recordGroup`, `folder`, `record`. Listings never contain `app` nodes. */
  nodeType: string;
  subType: string | null;
  isRecord: boolean;
  /** Whether this node can itself be opened with `nodeId`. */
  hasChildren: boolean;
  /** e.g. size, indexing status, or relationship type. */
  detail: string | null;
  /**
   * Link to the record in its source system. Records that carry a relative URL (uploaded/KB
   * records) are resolved against the configured frontend public URL (see POST
   * /configurationManager/frontendPublicUrl). The value is null when that host is not configured.
   */
  webUrl?: string | null;
  indexingStatus?: string | null;
  /**
   * Creation time in the source system, epoch milliseconds. Null when the underlying node did not
   * carry one.
   */
  sourceCreatedAt?: number | null;
  sourceModifiedAt?: number | null;
  /**
   * 1-based nesting depth from the navigated parent. Always 1 for a `depth=1` listing; 2 or 3 for
   * deeper rows when `depth` > 1.
   */
  level?: number;
  contextSummary?: string | null;
};

export const knowledgeGraphNodeRowSchemaSchema: Schema<KnowledgeGraphNodeRowSchema> =
  s.object<KnowledgeGraphNodeRowSchema>({
    id: s.string(),
    name: s.string(),
    nodeType: s.string(),
    subType: s.nullable(s.string()),
    isRecord: s.boolean(),
    hasChildren: s.boolean(),
    detail: s.nullable(s.string()),
    webUrl: s.optionalNullable(s.string()),
    indexingStatus: s.optionalNullable(s.string()),
    sourceCreatedAt: s.optionalNullable(s.int()),
    sourceModifiedAt: s.optionalNullable(s.int()),
    level: s.optional(s.int()),
    contextSummary: s.optionalNullable(s.string()),
    _keysMap: {
      nodeType: "node_type",
      subType: "sub_type",
      isRecord: "is_record",
      hasChildren: "has_children",
      webUrl: "web_url",
      indexingStatus: "indexing_status",
      sourceCreatedAt: "source_created_at",
      sourceModifiedAt: "source_modified_at",
      contextSummary: "context_summary",
    },
  });
