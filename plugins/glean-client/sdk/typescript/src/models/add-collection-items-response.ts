import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addCollectionItemsErrorSchema, type AddCollectionItemsError } from "./add-collection-items-error.js";
import { collectionSchema, type Collection } from "./collection.js";

export type AddCollectionItemsResponse = {
  collection?: Collection;
  error?: AddCollectionItemsError;
};

export const addCollectionItemsResponseSchema: Schema<AddCollectionItemsResponse> =
  s.object<AddCollectionItemsResponse>({
    collection: s.optional(s.lazy(() => collectionSchema)),
    error: s.optional(s.lazy(() => addCollectionItemsErrorSchema)),
  });
