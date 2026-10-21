import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectionErrorSchema, type CollectionError } from "./collection-error.js";
import { collectionSchema, type Collection } from "./collection.js";

export type CreateCollectionResponse = {
  collection: Collection;
  error?: CollectionError;
};

export const createCollectionResponseSchema: Schema<CreateCollectionResponse> =
  s.object<CreateCollectionResponse>({
    collection: collectionSchema,
    error: s.optional(s.lazy(() => collectionErrorSchema)),
  });
