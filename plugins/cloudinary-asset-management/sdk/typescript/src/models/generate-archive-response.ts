import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GenerateArchiveResponse = {
  /** A 32-character hexadecimal asset ID. */
  assetId?: string;
  /** The public ID of the generated archive. */
  publicId?: string;
  /** The version number of the generated archive. */
  version?: number;
  /** Hexadecimal version ID; length is a positive multiple of 32 (typically 32 or 64). */
  versionId?: string;
  /** The API signature for the generated archive. */
  signature?: string;
  /** The type of resource. Always "raw" for generated archives. */
  resourceType?: string;
  /** The timestamp when the archive was generated. */
  createdAt?: Date;
  /** The tags assigned to the generated archive. */
  tags?: string[] | null;
  /** The size of the generated archive in bytes. */
  bytes?: number;
  /** The resource type of the generated archive. */
  type?: string;
  /** The ETag of the generated archive. */
  etag?: string;
  /** Whether the generated archive is a placeholder. */
  placeholder?: boolean;
  /** The HTTP URL for downloading the generated archive. */
  url?: string;
  /** The HTTPS URL for downloading the generated archive. */
  secureUrl?: string;
  /**
   * The folder where the archive is stored (only for product environments with Dynamic Folders
   * disabled).
   *
   * @deprecated
   */
  folder?: string;
  /** The number of unique resources included in the archive. */
  resourceCount?: number;
  /** The total number of files in the archive. */
  fileCount?: number;
  /** The folder in your product environment where the archive is stored. */
  assetFolder?: string;
  /** The display name of the generated archive. */
  displayName?: string;
  /** The list of public IDs that were requested but not found. */
  missingPublicIds?: string[];
  /** The list of tags that were requested but returned no results. */
  emptyTags?: string[];
  /** The list of prefixes that were requested but returned no results. */
  emptyPrefixes?: string[];
};

export const generateArchiveResponseSchema: Schema<GenerateArchiveResponse> =
  s.object<GenerateArchiveResponse>({
    assetId: s.optional(s.string()),
    publicId: s.optional(s.string()),
    version: s.optional(s.int()),
    versionId: s.optional(s.string()),
    signature: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    tags: s.optionalNullable(s.array(s.string())),
    bytes: s.optional(s.int()),
    type: s.optional(s.string()),
    etag: s.optional(s.string()),
    placeholder: s.optional(s.boolean()),
    url: s.optional(s.string()),
    secureUrl: s.optional(s.string()),
    folder: s.optional(s.string()),
    resourceCount: s.optional(s.int()),
    fileCount: s.optional(s.int()),
    assetFolder: s.optional(s.string()),
    displayName: s.optional(s.string()),
    missingPublicIds: s.optional(s.array(s.string())),
    emptyTags: s.optional(s.array(s.string())),
    emptyPrefixes: s.optional(s.array(s.string())),
    _keysMap: {
      assetId: "asset_id",
      publicId: "public_id",
      versionId: "version_id",
      resourceType: "resource_type",
      createdAt: "created_at",
      secureUrl: "secure_url",
      resourceCount: "resource_count",
      fileCount: "file_count",
      assetFolder: "asset_folder",
      displayName: "display_name",
      missingPublicIds: "missing_public_ids",
      emptyTags: "empty_tags",
      emptyPrefixes: "empty_prefixes",
    },
  });
