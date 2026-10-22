import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectionErrorSchema, type CollectionError } from "./collection-error.js";
import { collectionSchema, type Collection } from "./collection.js";

export type GetCollectionResponse = {
  collection?: Collection;
  rootCollection?: Collection;
  error?: CollectionError;
  /**
   * Use `collection.trackingToken` instead.
   *
   * @deprecated
   */
  trackingToken?: string;
};

export const getCollectionResponseSchema: Schema<GetCollectionResponse> = s.object<GetCollectionResponse>({
  collection: s.optional(s.lazy(() => collectionSchema)),
  rootCollection: s.optional(s.lazy(() => collectionSchema)),
  error: s.optional(s.lazy(() => collectionErrorSchema)),
  trackingToken: s.optional(s.string()),
});
