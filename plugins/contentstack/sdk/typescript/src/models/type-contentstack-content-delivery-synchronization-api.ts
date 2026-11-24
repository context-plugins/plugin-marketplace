import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of sync event. Possible values: entry_published, entry_unpublished, entry_deleted,
 * asset_published, asset_unpublished, asset_deleted, content_type_deleted.
 */
export const TypeContentstackContentDeliverySynchronizationApi = {
  EntryPublished: "entry_published",
  EntryUnpublished: "entry_unpublished",
  EntryDeleted: "entry_deleted",
  AssetPublished: "asset_published",
  AssetUnpublished: "asset_unpublished",
  AssetDeleted: "asset_deleted",
  ContentTypeDeleted: "content_type_deleted",
} as const;
export type TypeContentstackContentDeliverySynchronizationApi =
  | (typeof TypeContentstackContentDeliverySynchronizationApi)[keyof typeof TypeContentstackContentDeliverySynchronizationApi]
  | (string & {});

export const typeContentstackContentDeliverySynchronizationApiSchema: EnumSchema<TypeContentstackContentDeliverySynchronizationApi> =
  s.enumOf<TypeContentstackContentDeliverySynchronizationApi>(
    TypeContentstackContentDeliverySynchronizationApi,
  );
