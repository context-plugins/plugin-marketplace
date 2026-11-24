import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A media asset stored in the Contentstack asset library. */
export type Asset = {
  /** Unique identifier of the asset. */
  uid?: string;
  /** Display name of the asset. */
  title?: string;
  /** CDN URL to access the asset file. */
  url?: string;
  /** Original file name of the uploaded asset. */
  filename?: string;
  /** MIME type of the asset file. */
  contentType?: string;
  /** File size of the asset in bytes. */
  fileSize?: string;
  /** ISO 8601 timestamp when the asset was created. */
  createdAt?: Date;
  /** ISO 8601 timestamp when the asset was last updated. */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const assetProperties: s.Shape<Asset> = {
  uid: s.optional(s.string()),
  title: s.optional(s.string()),
  url: s.optional(s.string()),
  filename: s.optional(s.string()),
  contentType: s.optional(s.string()),
  fileSize: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  _keysMap: {
    contentType: "content_type",
    fileSize: "file_size",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};

export const assetInternalSchema: Schema<Asset> = s.object<Asset>(assetProperties, {
  additionalProperties: s.json(),
});

export const assetSchema: Schema<Asset> = s.lazySchema(() =>
  s.object<Asset>(
    {
      ...assetProperties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
