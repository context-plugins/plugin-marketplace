import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  persistedSemanticSearchCitationMetadataSchema,
  type PersistedSemanticSearchCitationMetadata,
} from "./persisted-semantic-search-citation-metadata.js";

/**
 * A populated citation document. Represents a single chunk of source content (e.g. a passage from a
 * document or record) referenced by an AI response, together with its provenance metadata.
 */
export type Citation = {
  id: string;
  /** The cited text chunk */
  content: string;
  /** Index of this chunk within the source record */
  chunkIndex: number;
  /** Source type identifier (e.g. `vectordb|document`) */
  citationType: string;
  /**
   * Citation metadata as persisted in MongoDB. Required fields mirror the Mongoose schema's
   * `required: true` flags; the rest are optional and may come through as `null` because the AI
   * retrieval service emits explicit nulls for absent fields.
   */
  metadata: PersistedSemanticSearchCitationMetadata;
  createdAt: Date;
  updatedAt: Date;
};

export const citationSchema: Schema<Citation> = s.object<Citation>({
  id: s.string(),
  content: s.string(),
  chunkIndex: s.int(),
  citationType: s.string(),
  metadata: persistedSemanticSearchCitationMetadataSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    id: "_id",
  },
});
