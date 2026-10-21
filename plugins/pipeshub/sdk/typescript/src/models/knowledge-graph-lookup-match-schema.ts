import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A single record resolved from an identifier. */
export type KnowledgeGraphLookupMatchSchema = {
  /**
   * The Record ID. Pass it to GET /connectors/record/{recordId}/content to read the record, or as
   * `nodeId` to GET /connectors/navigate to list what is under it.
   */
  id: string;
  name: string;
  recordType: string | null;
  connectorName: string | null;
  webUrl: string | null;
  indexingStatus: string | null;
  /** Which of the supplied identifiers produced this match. */
  identifierUsed: string;
  /** e.g. `PA-1787`, a Confluence page id, a Drive file id. */
  externalId?: string | null;
  /** Type-specific metadata for the record — for a ticket, status, assignee, priority and dates. */
  contextBlock?: string | null;
};

export const knowledgeGraphLookupMatchSchemaSchema: Schema<KnowledgeGraphLookupMatchSchema> =
  s.object<KnowledgeGraphLookupMatchSchema>({
    id: s.string(),
    name: s.string(),
    recordType: s.nullable(s.string()),
    connectorName: s.nullable(s.string()),
    webUrl: s.nullable(s.string()),
    indexingStatus: s.nullable(s.string()),
    identifierUsed: s.string(),
    externalId: s.optionalNullable(s.string()),
    contextBlock: s.optionalNullable(s.string()),
    _keysMap: {
      recordType: "record_type",
      connectorName: "connector_name",
      webUrl: "web_url",
      indexingStatus: "indexing_status",
      identifierUsed: "identifier_used",
      externalId: "external_id",
      contextBlock: "context_block",
    },
  });
