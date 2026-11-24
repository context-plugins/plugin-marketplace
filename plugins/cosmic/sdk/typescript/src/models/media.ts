import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sizeSchema, type Size } from "./unions/size.js";

/** An image, file, or document in the Bucket. */
export type Media = {
  id?: string;
  /**
   * Unique file name within the Bucket. This is the value you assign to a File or Image Metafield.
   */
  name?: string;
  /** The file name as uploaded. */
  originalName?: string;
  /** File size in bytes. */
  size?: Size;
  /** MIME type. */
  type?: string;
  /** Bucket id. */
  bucket?: string;
  folder?: string | null;
  /** Images only. */
  altText?: string | null;
  /** Pixel width. Images only. */
  width?: number | null;
  /** Pixel height. Images only. */
  height?: number | null;
  /** CDN URL. */
  url?: string;
  /** imgix URL, which accepts image processing query parameters. */
  imgixUrl?: string;
  /** Arbitrary JSON metadata you attach to the media. */
  metadata?: Record<string, unknown> | null;
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const mediaProperties: s.Shape<Media> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  originalName: s.optional(s.string()),
  size: s.optional(s.lazy(() => sizeSchema)),
  type: s.optional(s.string()),
  bucket: s.optional(s.string()),
  folder: s.optionalNullable(s.string()),
  altText: s.optionalNullable(s.string()),
  width: s.optionalNullable(s.int()),
  height: s.optionalNullable(s.int()),
  url: s.optional(s.string()),
  imgixUrl: s.optional(s.string()),
  metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
  createdAt: s.optional(s.dateTime()),
  _keysMap: {
    originalName: "original_name",
    altText: "alt_text",
    imgixUrl: "imgix_url",
    createdAt: "created_at",
  },
};

export const mediaInternalSchema: Schema<Media> = s.object<Media>(mediaProperties, {
  additionalProperties: s.json(),
});

export const mediaSchema: Schema<Media> = s.lazySchema(() =>
  s.object<Media>(
    {
      ...mediaProperties,
      url: s.optional(s.string().check(s.url())),
      imgixUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
