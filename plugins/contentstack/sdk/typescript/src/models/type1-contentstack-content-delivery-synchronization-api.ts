import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type1ContentstackContentDeliverySynchronizationApi = {
  EntryPublished: "entry_published",
  EntryUnpublished: "entry_unpublished",
  EntryDeleted: "entry_deleted",
  AssetPublished: "asset_published",
  AssetUnpublished: "asset_unpublished",
  AssetDeleted: "asset_deleted",
  ContentTypeDeleted: "content_type_deleted",
} as const;
export type Type1ContentstackContentDeliverySynchronizationApi =
  | (typeof Type1ContentstackContentDeliverySynchronizationApi)[keyof typeof Type1ContentstackContentDeliverySynchronizationApi]
  | (string & {});

export const type1ContentstackContentDeliverySynchronizationApiSchema: EnumSchema<Type1ContentstackContentDeliverySynchronizationApi> =
  s.enumOf<Type1ContentstackContentDeliverySynchronizationApi>(
    Type1ContentstackContentDeliverySynchronizationApi,
  );
