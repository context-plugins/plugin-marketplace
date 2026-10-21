import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectionSchema, type Collection } from "./collection.js";

export type EditCollectionItemResponse = {
  collection?: Collection;
};

export const editCollectionItemResponseSchema: Schema<EditCollectionItemResponse> =
  s.object<EditCollectionItemResponse>({
    collection: s.optional(s.lazy(() => collectionSchema)),
  });
