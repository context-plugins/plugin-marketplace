import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorTypeSchema, type ConnectorType } from "./connector-type.js";
import { documentContentSchema, type DocumentContent } from "./document-content.js";
import { documentMetadataSchema, type DocumentMetadata } from "./document-metadata.js";
import { documentSectionSchema, type DocumentSection } from "./document-section.js";

export type Document = {
  /** The Glean Document ID. */
  id?: string;
  /** The app or other repository type from which the document was extracted */
  datasource?: string;
  /** The source from which document content was pulled, e.g. an API crawl or browser history */
  connectorType?: ConnectorType;
  /**
   * The datasource-specific type of the document (e.g. for Jira issues, this is the issue type such
   * as Bug or Feature Request).
   */
  docType?: string;
  content?: DocumentContent;
  containerDocument?: Document;
  parentDocument?: Document;
  /** The title of the document. */
  title?: string;
  /** A permalink for the document. */
  url?: string;
  metadata?: DocumentMetadata;
  /**
   * A list of content sub-sections in the document, e.g. text blocks with different headings in a
   * Drive doc or Confluence page.
   */
  sections?: DocumentSection[];
};

export const documentSchema: Schema<Document> = s.object<Document>({
  id: s.optional(s.string()),
  datasource: s.optional(s.string()),
  connectorType: s.optional(s.lazy(() => connectorTypeSchema)),
  docType: s.optional(s.string()),
  content: s.optional(s.lazy(() => documentContentSchema)),
  containerDocument: s.optional(s.lazy(() => documentSchema)),
  parentDocument: s.optional(s.lazy(() => documentSchema)),
  title: s.optional(s.string()),
  url: s.optional(s.string()),
  metadata: s.optional(s.lazy(() => documentMetadataSchema)),
  sections: s.optional(s.array(s.lazy(() => documentSectionSchema))),
});
