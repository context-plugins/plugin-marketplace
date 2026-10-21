import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embeddingSchema, type Embedding } from "./unions/embedding.js";

export type EmbeddingObject = {
  /** The index of the embedding in the list of embeddings. */
  index: number;
  /** The object type, which is always set to `embedding`. @default "embedding" */
  object?: "embedding";
  /**
   * The embedding vector, which is a list of floats or a base64-encoded string. The length of
   * vector depends on the model.
   */
  embedding: Embedding;
};

export const embeddingObjectSchema: Schema<EmbeddingObject> = s.object<EmbeddingObject>({
  index: s.int(),
  object: s.defaulted(s.literal("embedding"), "embedding"),
  embedding: embeddingSchema,
});
