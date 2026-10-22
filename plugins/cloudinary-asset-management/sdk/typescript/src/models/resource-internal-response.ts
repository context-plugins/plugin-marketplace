import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contextFullResponseSchema, type ContextFullResponse } from "./context-full-response.js";
import { coordinatesResponseSchema, type CoordinatesResponse } from "./coordinates-response.js";
import { derivativeSchema, type Derivative } from "./derivative.js";
import { derivedSchema, type Derived } from "./derived.js";
import { lastUpdatedSchema, type LastUpdated } from "./last-updated.js";
import { moderationSchema, type Moderation } from "./moderation.js";
import { accessControlSchema, type AccessControl } from "./unions/access-control.js";
import { deliveryTypeAll1Schema, type DeliveryTypeAll1 } from "./unions/delivery-type-all1.js";
import { versionSchema, type Version } from "./version.js";

/**
 * The details of a single asset. Returns the standard asset fields, plus additional internal fields
 * when accessed over the internal transport.
 */
export type ResourceInternalResponse = {
  /** A 32-character hexadecimal asset ID. */
  assetId?: string;
  publicId?: string;
  assetFolder?: string;
  displayName?: string;
  folder?: string;
  filename?: string;
  format?: string;
  version?: number;
  resourceType?: string;
  /** All supported delivery types. */
  type?: DeliveryTypeAll1;
  createdAt?: Date;
  uploadedAt?: Date;
  bytes?: number;
  backupBytes?: number;
  width?: number | null;
  height?: number | null;
  aspectRatio?: number | null;
  pixels?: number | null;
  /** Included if 'tags=true' parameter is used. */
  tags?: string[] | null;
  /** Included if 'context=true' parameter is used. */
  context?: ContextFullResponse | null;
  metadata?: Record<string, unknown>;
  /** The type of moderation applied to the asset. */
  moderationKind?: string;
  /** The current status of the moderation process for the asset. */
  moderationStatus?: string;
  /** Included if 'moderations=true' parameter is used. */
  moderation?: Moderation[];
  backup?: boolean;
  url?: string;
  secureUrl?: string;
  status?: string;
  accessControl?: AccessControl;
  etag?: string;
  /** Whether the asset is animated (e.g., GIF, animated WebP). Null for non-animated assets. */
  animated?: boolean | null;
  /** Duration in seconds for video/audio assets. Null for images. */
  duration?: number | null;
  /** The subtype of the resource (e.g., for video). Null when not applicable. */
  resourceSubtype?: string | null;
  /** The substatus of the resource. Null when not set. */
  substatus?: string | null;
  /** Related assets linked to this resource. Null when none linked. */
  relatedAssets?: Record<string, unknown>[] | null;
  lastUpdated?: LastUpdated | null;
  /** Cursor for paginating derived assets. */
  nextCursor?: string;
  derived?: Derived[];
  /** Detected face rectangles. Included if 'faces=true' parameter is used. */
  faces?: number[][] | null;
  /** Face and custom coordinate data. Included if 'coordinates=true' parameter is used. */
  coordinates?: CoordinatesResponse | null;
  illustrationScore?: number;
  semiTransparent?: boolean;
  grayscale?: boolean;
  colors?: Record<string, unknown>[][];
  predominant?: Record<string, Record<string, unknown>>;
  versions?: Version[];
  /** Additional asset information (visual search, recognized people, etc.) */
  info?: Record<string, unknown>;
  /** Included if 'derived=true' parameter is used. Null when no derivatives exist. */
  derivatives?: Derivative[] | null;
};

export const resourceInternalResponseSchema: Schema<ResourceInternalResponse> =
  s.object<ResourceInternalResponse>({
    assetId: s.optional(s.string()),
    publicId: s.optional(s.string()),
    assetFolder: s.optional(s.string()),
    displayName: s.optional(s.string()),
    folder: s.optional(s.string()),
    filename: s.optional(s.string()),
    format: s.optional(s.string()),
    version: s.optional(s.int()),
    resourceType: s.optional(s.string()),
    type: s.optional(s.lazy(() => deliveryTypeAll1Schema)),
    createdAt: s.optional(s.dateTime()),
    uploadedAt: s.optional(s.dateTime()),
    bytes: s.optional(s.int()),
    backupBytes: s.optional(s.int()),
    width: s.optionalNullable(s.int()),
    height: s.optionalNullable(s.int()),
    aspectRatio: s.optionalNullable(s.float64()),
    pixels: s.optionalNullable(s.int()),
    tags: s.optionalNullable(s.array(s.string())),
    context: s.optionalNullable(s.lazy(() => contextFullResponseSchema)),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    moderationKind: s.optional(s.string()),
    moderationStatus: s.optional(s.string()),
    moderation: s.optional(s.array(s.lazy(() => moderationSchema))),
    backup: s.optional(s.boolean()),
    url: s.optional(s.string()),
    secureUrl: s.optional(s.string()),
    status: s.optional(s.string()),
    accessControl: s.optional(s.lazy(() => accessControlSchema)),
    etag: s.optional(s.string()),
    animated: s.optionalNullable(s.boolean()),
    duration: s.optionalNullable(s.float64()),
    resourceSubtype: s.optionalNullable(s.string()),
    substatus: s.optionalNullable(s.string()),
    relatedAssets: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    lastUpdated: s.optionalNullable(s.lazy(() => lastUpdatedSchema)),
    nextCursor: s.optional(s.string()),
    derived: s.optional(s.array(s.lazy(() => derivedSchema))),
    faces: s.optionalNullable(s.array(s.array(s.int()))),
    coordinates: s.optionalNullable(s.lazy(() => coordinatesResponseSchema)),
    illustrationScore: s.optional(s.float64()),
    semiTransparent: s.optional(s.boolean()),
    grayscale: s.optional(s.boolean()),
    colors: s.optional(s.array(s.array(s.record(s.string(), s.unknown())))),
    predominant: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
    versions: s.optional(s.array(s.lazy(() => versionSchema))),
    info: s.optional(s.record(s.string(), s.unknown())),
    derivatives: s.optionalNullable(s.array(s.lazy(() => derivativeSchema))),
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
      moderationKind: "moderation_kind",
      moderationStatus: "moderation_status",
      secureUrl: "secure_url",
      accessControl: "access_control",
      resourceSubtype: "resource_subtype",
      relatedAssets: "related_assets",
      lastUpdated: "last_updated",
      nextCursor: "next_cursor",
      illustrationScore: "illustration_score",
      semiTransparent: "semi_transparent",
    },
  });
