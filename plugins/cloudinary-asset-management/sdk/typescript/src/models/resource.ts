import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessMode1Schema, type AccessMode1 } from "./access-mode1.js";
import { createdBySchema, type CreatedBy } from "./created-by.js";
import { resourceTypeSchema, type ResourceType } from "./resource-type.js";
import { status1Schema, type Status1 } from "./status1.js";
import { accessControl1Schema, type AccessControl1 } from "./unions/access-control1.js";
import { deliveryTypeAll1Schema, type DeliveryTypeAll1 } from "./unions/delivery-type-all1.js";
import { uploadedBySchema, type UploadedBy } from "./uploaded-by.js";

/**
 * Resource fields that can be returned. All fields are optional and can be filtered using the
 * fields parameter.
 */
export type Resource = {
  /** The unique identifier of the asset. */
  assetId?: string;
  /** The public identifier that is used to build the URL. */
  publicId?: string;
  /** The folder where the asset is stored. */
  assetFolder?: string;
  /** The original filename of the asset. */
  filename?: string;
  /** The display name of the asset. */
  displayName?: string;
  /** The format of the asset. Null for raw assets, which have no format. */
  format?: string | null;
  /** The version number of the asset. */
  version?: number;
  /** The type of resource. */
  resourceType?: ResourceType;
  /** All supported delivery types. */
  type?: DeliveryTypeAll1;
  /** The timestamp when the asset was created. */
  createdAt?: Date;
  /** The timestamp when the asset was uploaded. */
  uploadedAt?: Date;
  /** The size of the asset in bytes. */
  bytes?: number;
  /** The size of the backup asset in bytes. */
  backupBytes?: number;
  /** The width of the asset in pixels. Null for non-visual assets (e.g. raw, audio). */
  width?: number | null;
  /** The height of the asset in pixels. Null for non-visual assets (e.g. raw, audio). */
  height?: number | null;
  /** The aspect ratio of the asset (width/height). Null for non-visual assets (e.g. raw, audio). */
  aspectRatio?: number | null;
  /** The total number of pixels in the asset. Null for non-visual assets (e.g. raw, audio). */
  pixels?: number | null;
  /** The HTTP URL for accessing the asset. */
  url?: string;
  /** The HTTPS URL for accessing the asset. */
  secureUrl?: string;
  /** The current status of the asset. */
  status?: Status1;
  /** The access mode of the asset. Null when not explicitly set. */
  accessMode?: AccessMode1 | null;
  /** The access control settings for the asset. */
  accessControl?: AccessControl1;
  /** The ETag of the asset. */
  etag?: string;
  /** Information about who created the asset. */
  createdBy?: CreatedBy | null;
  /** Information about who uploaded the asset. */
  uploadedBy?: UploadedBy | null;
  /** Custom context metadata associated with the asset. */
  context?: Record<string, string> | null;
  /** Tags associated with the asset. */
  tags?: string[] | null;
  /** Technical metadata extracted from the image. */
  imageMetadata?: Record<string, unknown> | null;
  /** Results of image analysis. */
  imageAnalysis?: Record<string, unknown> | null;
  /** Structured metadata associated with the asset. */
  metadata?: Record<string, unknown> | null;
  /** Results of quality analysis. */
  qualityAnalysis?: Record<string, unknown> | null;
  /** Results of accessibility analysis. */
  accessibilityAnalysis?: Record<string, unknown> | null;
};

export const resourceSchema: Schema<Resource> = s.object<Resource>({
  assetId: s.optional(s.string()),
  publicId: s.optional(s.string()),
  assetFolder: s.optional(s.string()),
  filename: s.optional(s.string()),
  displayName: s.optional(s.string()),
  format: s.optionalNullable(s.string()),
  version: s.optional(s.int()),
  resourceType: s.optional(s.lazy(() => resourceTypeSchema)),
  type: s.optional(s.lazy(() => deliveryTypeAll1Schema)),
  createdAt: s.optional(s.dateTime()),
  uploadedAt: s.optional(s.dateTime()),
  bytes: s.optional(s.int()),
  backupBytes: s.optional(s.int()),
  width: s.optionalNullable(s.int()),
  height: s.optionalNullable(s.int()),
  aspectRatio: s.optionalNullable(s.float64()),
  pixels: s.optionalNullable(s.int()),
  url: s.optional(s.string()),
  secureUrl: s.optional(s.string()),
  status: s.optional(s.lazy(() => status1Schema)),
  accessMode: s.optionalNullable(s.lazy(() => accessMode1Schema)),
  accessControl: s.optional(s.lazy(() => accessControl1Schema)),
  etag: s.optional(s.string()),
  createdBy: s.optionalNullable(s.lazy(() => createdBySchema)),
  uploadedBy: s.optionalNullable(s.lazy(() => uploadedBySchema)),
  context: s.optionalNullable(s.record(s.string(), s.string())),
  tags: s.optionalNullable(s.array(s.string())),
  imageMetadata: s.optionalNullable(s.record(s.string(), s.unknown())),
  imageAnalysis: s.optionalNullable(s.record(s.string(), s.unknown())),
  metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
  qualityAnalysis: s.optionalNullable(s.record(s.string(), s.unknown())),
  accessibilityAnalysis: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    assetId: "asset_id",
    publicId: "public_id",
    assetFolder: "asset_folder",
    displayName: "display_name",
    resourceType: "resource_type",
    createdAt: "created_at",
    uploadedAt: "uploaded_at",
    backupBytes: "backup_bytes",
    aspectRatio: "aspect_ratio",
    secureUrl: "secure_url",
    accessMode: "access_mode",
    accessControl: "access_control",
    createdBy: "created_by",
    uploadedBy: "uploaded_by",
    imageMetadata: "image_metadata",
    imageAnalysis: "image_analysis",
    qualityAnalysis: "quality_analysis",
    accessibilityAnalysis: "accessibility_analysis",
  },
});
