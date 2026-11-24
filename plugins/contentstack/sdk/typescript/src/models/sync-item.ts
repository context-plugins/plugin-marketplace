import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeContentstackContentDeliverySynchronizationApiSchema,
  type TypeContentstackContentDeliverySynchronizationApi,
} from "./type-contentstack-content-delivery-synchronization-api.js";

/** A single item in a sync response representing a content change event. */
export type SyncItem = {
  /**
   * The type of sync event. Possible values: entry_published, entry_unpublished, entry_deleted,
   * asset_published, asset_unpublished, asset_deleted, content_type_deleted.
   */
  type?: TypeContentstackContentDeliverySynchronizationApi;
  /** The content data associated with this sync event. */
  data?: Record<string, unknown>;
  /** The UID of the content type for entry-related events. */
  contentTypeUid?: string;
  /** The locale of the content for locale-specific events. */
  locale?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const syncItemSchema: Schema<SyncItem> = s.object<SyncItem>(
  {
    type: s.optional(s.lazy(() => typeContentstackContentDeliverySynchronizationApiSchema)),
    data: s.optional(s.record(s.string(), s.unknown())),
    contentTypeUid: s.optional(s.string()),
    locale: s.optional(s.string()),
    _keysMap: {
      contentTypeUid: "content_type_uid",
    },
  },
  { additionalProperties: s.json() },
);
