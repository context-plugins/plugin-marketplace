import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. The type of collection. Applies to all entries in api_data. */
export const CollectionType = {
  CollectionTypeUnspecified: "COLLECTION_TYPE_UNSPECIFIED",
  CollectionTypeUpsert: "COLLECTION_TYPE_UPSERT",
  CollectionTypeDelete: "COLLECTION_TYPE_DELETE",
} as const;
export type CollectionType = (typeof CollectionType)[keyof typeof CollectionType] | (string & {});

export const collectionTypeSchema: EnumSchema<CollectionType> = s.enumOf<CollectionType>(CollectionType);
