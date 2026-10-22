import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  persistedSemanticSearchCitationMetadataSchema,
  type PersistedSemanticSearchCitationMetadata,
} from "./persisted-semantic-search-citation-metadata.js";

/**
 * Populated citation document referenced from a persisted search. The controller strips `__v` via
 * `populate({ select: '-__v' })`.
 */
export type PersistedSemanticSearchCitation = {
  id: string;
  content: string;
  chunkIndex: number;
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

export const persistedSemanticSearchCitationSchema: Schema<PersistedSemanticSearchCitation> =
  s.object<PersistedSemanticSearchCitation>({
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
