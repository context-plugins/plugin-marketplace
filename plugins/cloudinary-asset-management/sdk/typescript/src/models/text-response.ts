import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessControlItemSchema, type AccessControlItem } from "./access-control-item.js";

export type TextResponse = {
  /** A 32-character hexadecimal asset ID. */
  assetId?: string;
  /** The public identifier of the asset. */
  publicId?: string;
  /** The version number of the asset. */
  version?: number;
  /** Hexadecimal version ID; length is a positive multiple of 32 (typically 32 or 64). */
  versionId?: string;
  /** The signature for the asset. */
  signature?: string;
  /** The width of the generated image in pixels. */
  width?: number;
  /** The height of the generated image in pixels. */
  height?: number;
  /** The format of the generated image. */
  format?: string;
  /** The type of resource (image). */
  resourceType?: string;
  /** The creation timestamp. */
  createdAt?: Date;
  /** Array of tags assigned to the asset. */
  tags?: string[] | null;
  /** Number of pages in the asset. */
  pages?: number;
  /** Size of the asset in bytes. */
  bytes?: number;
  /** The storage type of the asset. */
  type?: string;
  /** The ETag of the asset. */
  etag?: string;
  /** Whether the asset is a placeholder. */
  placeholder?: boolean;
  /** The HTTP URL for accessing the asset. */
  url?: string;
  /** The HTTPS URL for accessing the asset. */
  secureUrl?: string;
  /** The display name of the asset. */
  displayName?: string;
  /**
   * Restricts access to the asset by specifying one or more access types. The asset is restricted
   * unless at least one listed access type is valid.
   */
  accessControl?: AccessControlItem[];
  /** Region information for the asset. */
  regions?: Record<string, unknown>[];
  /** Moderation information for the asset. */
  moderation?: Record<string, unknown>;
  /** Additional information about the asset. */
  info?: Record<string, unknown>;
};

export const textResponseSchema: Schema<TextResponse> = s.object<TextResponse>({
  assetId: s.optional(s.string()),
  publicId: s.optional(s.string()),
  version: s.optional(s.int()),
  versionId: s.optional(s.string()),
  signature: s.optional(s.string()),
  width: s.optional(s.int()),
  height: s.optional(s.int()),
  format: s.optional(s.string()),
  resourceType: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  tags: s.optionalNullable(s.array(s.string())),
  pages: s.optional(s.int()),
  bytes: s.optional(s.int()),
  type: s.optional(s.string()),
  etag: s.optional(s.string()),
  placeholder: s.optional(s.boolean()),
  url: s.optional(s.string()),
  secureUrl: s.optional(s.string()),
  displayName: s.optional(s.string()),
  accessControl: s.optional(s.array(s.lazy(() => accessControlItemSchema))),
  regions: s.optional(s.array(s.record(s.string(), s.unknown()))),
  moderation: s.optional(s.record(s.string(), s.unknown())),
  info: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    assetId: "asset_id",
    publicId: "public_id",
    versionId: "version_id",
    resourceType: "resource_type",
    createdAt: "created_at",
    secureUrl: "secure_url",
    displayName: "display_name",
    accessControl: "access_control",
  },
});
