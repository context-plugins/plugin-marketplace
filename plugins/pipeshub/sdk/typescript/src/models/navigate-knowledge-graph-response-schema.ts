import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  knowledgeGraphNodeRefSchemaSchema,
  type KnowledgeGraphNodeRefSchema,
} from "./knowledge-graph-node-ref-schema.js";
import {
  knowledgeGraphNodeRowSchemaSchema,
  type KnowledgeGraphNodeRowSchema,
} from "./knowledge-graph-node-row-schema.js";
import {
  knowledgeGraphPaginationSchemaSchema,
  type KnowledgeGraphPaginationSchema,
} from "./knowledge-graph-pagination-schema.js";

/**
 * Response returned by GET /connectors/navigate.
 *
 * Field names are snake_case, matching the knowledge graph's internal view models. `text` carries
 * the same flat-text rendering PipesHub's own agent sees for this node; the remaining fields carry
 * the same information in structured form.
 */
export type NavigateKnowledgeGraphResponseSchema = {
  /** The node that was opened. Null at the root listing. */
  current: KnowledgeGraphNodeRefSchema | null;
  /** Root to parent, not including `current`. */
  breadcrumbs: KnowledgeGraphNodeRefSchema[];
  /**
   * The current node's children for this page. With `depth` > 1 this is a flat list of all
   * descendants up to that depth, each row carrying its own `level`.
   */
  rows: KnowledgeGraphNodeRowSchema[];
  /**
   * Cross-referenced records (non-containment edges), e.g. the Confluence page linked from a Jira
   * ticket. Page 1 only.
   */
  related: KnowledgeGraphNodeRowSchema[];
  pagination: KnowledgeGraphPaginationSchema | null;
  webUrl: string | null;
  indexingStatus: string | null;
  connector: string | null;
  /**
   * Type-specific metadata for the current node when it is a record — for a ticket, status,
   * assignee, priority and dates.
   */
  contextBlock?: string | null;
  /**
   * Flat-text rendering of this view: breadcrumbs, the current node's metadata, the children
   * listing with an id per row, `Related:`, and a closing `Next:` line naming a follow-up call.
   *
   * Shape depends on the page: pages after the first omit the header, breadcrumbs and related rows
   * to stay compact, while the structured fields above remain complete. Capped at 25,000 bytes,
   * with a truncation marker appended when exceeded.
   */
  text: string;
};

export const navigateKnowledgeGraphResponseSchemaSchema: Schema<NavigateKnowledgeGraphResponseSchema> =
  s.object<NavigateKnowledgeGraphResponseSchema>({
    current: s.nullable(s.lazy(() => knowledgeGraphNodeRefSchemaSchema)),
    breadcrumbs: s.array(s.lazy(() => knowledgeGraphNodeRefSchemaSchema)),
    rows: s.array(s.lazy(() => knowledgeGraphNodeRowSchemaSchema)),
    related: s.array(s.lazy(() => knowledgeGraphNodeRowSchemaSchema)),
    pagination: s.nullable(s.lazy(() => knowledgeGraphPaginationSchemaSchema)),
    webUrl: s.nullable(s.string()),
    indexingStatus: s.nullable(s.string()),
    connector: s.nullable(s.string()),
    contextBlock: s.optionalNullable(s.string()),
    text: s.string(),
    _keysMap: {
      webUrl: "web_url",
      indexingStatus: "indexing_status",
      contextBlock: "context_block",
    },
  });
