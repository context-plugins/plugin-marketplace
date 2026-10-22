import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectionSchema, type Collection } from "./collection.js";

export type ListCollectionsResponse = {
  /** List of all Collections, no Collection items are fetched. */
  collections: Collection[];
};

export const listCollectionsResponseSchema: Schema<ListCollectionsResponse> =
  s.object<ListCollectionsResponse>({
    collections: s.array(s.lazy(() => collectionSchema)),
  });
