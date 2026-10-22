import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectionErrorSchema, type CollectionError } from "./collection-error.js";
import { collectionSchema, type Collection } from "./collection.js";

export type CreateCollectionResponse1 = {
  collection?: Collection;
  error: CollectionError;
};

export const createCollectionResponse1Schema: Schema<CreateCollectionResponse1> =
  s.object<CreateCollectionResponse1>({
    collection: s.optional(s.lazy(() => collectionSchema)),
    error: collectionErrorSchema,
  });
