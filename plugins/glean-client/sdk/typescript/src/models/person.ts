import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personMetadataSchema, type PersonMetadata } from "./person-metadata.js";
import { relatedDocumentsSchema, type RelatedDocuments } from "./related-documents.js";

export type Person = {
  /** The display name. */
  name: string;
  /** An opaque identifier that can be used to request metadata for a Person. */
  obfuscatedId: string;
  /**
   * True when this is an authenticated identity fallback rather than a people profile. Directory
   * metadata is unavailable.
   */
  identityOnly?: boolean;
  /** A list of documents related to this person. */
  relatedDocuments?: RelatedDocuments[];
  metadata?: PersonMetadata;
};

export const personSchema: Schema<Person> = s.object<Person>({
  name: s.string(),
  obfuscatedId: s.string(),
  identityOnly: s.optional(s.boolean()),
  relatedDocuments: s.optional(s.array(s.lazy(() => relatedDocumentsSchema))),
  metadata: s.optional(s.lazy(() => personMetadataSchema)),
});
