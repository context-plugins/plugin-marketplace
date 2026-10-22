import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectionSchema, type Collection } from "./collection.js";

export type DeleteCollectionItemResponse = {
  collection?: Collection;
};

export const deleteCollectionItemResponseSchema: Schema<DeleteCollectionItemResponse> =
  s.object<DeleteCollectionItemResponse>({
    collection: s.optional(s.lazy(() => collectionSchema)),
  });
