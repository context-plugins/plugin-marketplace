import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformPersonReferenceSchema, type PlatformPersonReference } from "./platform-person-reference.js";

export type PlatformResult = {
  /** Canonical URL of the result. */
  url: string;
  /**
   * Display title. For a conversation, this is a title built from the participants, such as "Alice
   * and Bob", including when the indexed title is the message body. When the result has no title,
   * the server returns Untitled.
   */
  title: string;
  /** Query-relevant plain-text excerpts from the result body. */
  snippets?: string[];
  /** The datasource this result originates from. */
  datasource: string;
  /** The document type within the datasource. */
  documentType?: string | null;
  /** A lightweight reference to a person, used where a payload merely points at someone. */
  creator?: PlatformPersonReference;
  /** A lightweight reference to a person, used where a payload merely points at someone. */
  owner?: PlatformPersonReference;
  /** When the result was last modified. */
  updatedAt?: Date | null;
  /** When the result was created. */
  createdAt?: Date | null;
};

export const platformResultSchema: Schema<PlatformResult> = s.object<PlatformResult>({
  url: s.string(),
  title: s.string(),
  snippets: s.optional(s.array(s.string())),
  datasource: s.string(),
  documentType: s.optionalNullable(s.string()),
  creator: s.optional(s.lazy(() => platformPersonReferenceSchema)),
  owner: s.optional(s.lazy(() => platformPersonReferenceSchema)),
  updatedAt: s.optionalNullable(s.dateTime()),
  createdAt: s.optionalNullable(s.dateTime()),
  _keysMap: {
    documentType: "document_type",
    updatedAt: "updated_at",
    createdAt: "created_at",
  },
});
