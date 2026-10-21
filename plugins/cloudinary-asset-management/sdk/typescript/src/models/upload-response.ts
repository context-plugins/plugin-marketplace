import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contextFullResponseSchema, type ContextFullResponse } from "./context-full-response.js";
import { coordinatesResponseSchema, type CoordinatesResponse } from "./coordinates-response.js";
import { eagerSchema, type Eager } from "./eager.js";

export type UploadResponse = {
  /** The URL of the uploaded file. */
  url?: string;
  /** The secure URL of the uploaded file. */
  secureUrl?: string;
  /** The public ID of the uploaded file. */
  publicId?: string;
  /** The version of the uploaded file. */
  version?: number;
  /** Hexadecimal version ID; length is a positive multiple of 32 (typically 32 or 64). */
  versionId?: string;
  /** The signature of the uploaded file. */
  signature?: string;
  /** The width of the uploaded file. */
  width?: number;
  /** The height of the uploaded file. */
  height?: number;
  /** A 32-character hexadecimal asset ID. */
  assetId?: string;
  /** The format of the uploaded file. */
  format?: string;
  /** The type of resource that was uploaded. */
  resourceType?: string;
  /** The date and time the file was uploaded. */
  createdAt?: Date;
  /** The tags of the uploaded file. */
  tags?: string[] | null;
  /**
   * Contextual metadata grouped by kind. Custom user context appears under the 'custom' key. Other
   * context kinds may also appear as additional keys.
   */
  context?: ContextFullResponse | null;
  /** Structured metadata associated with the uploaded file. */
  metadata?: Record<string, unknown>;
  /** The number of pages in the uploaded file. */
  pages?: number;
  /** The size of the uploaded file in bytes. */
  bytes?: number;
  /** The type of the uploaded file. */
  type?: string;
  /** The ETag of the uploaded file. */
  etag?: string;
  /** Whether the uploaded file is a placeholder. */
  placeholder?: boolean;
  /** The original filename of the uploaded file. */
  originalFilename?: string;
  /** The image metadata of the uploaded file. */
  imageMetadata?: Record<string, unknown>;
  /** The illustration score of the uploaded file. */
  illustrationScore?: number;
  /** Whether the uploaded file is semi-transparent. */
  semiTransparent?: boolean;
  /** Whether the uploaded file is grayscale. */
  grayscale?: boolean;
  /** Detected face coordinate rectangles [x, y, width, height]. */
  faces?: number[][] | null;
  /** Coordinate data for faces and custom regions. */
  coordinates?: CoordinatesResponse | null;
  eager?: Eager[];
  /** The asset folder where the file is stored. */
  assetFolder?: string | null;
  /** The display name of the uploaded file. */
  displayName?: string;
  /** The API key used to upload the file. */
  apiKey?: string;
};

export const uploadResponseSchema: Schema<UploadResponse> = s.object<UploadResponse>({
  url: s.optional(s.string()),
  secureUrl: s.optional(s.string()),
  publicId: s.optional(s.string()),
  version: s.optional(s.int()),
  versionId: s.optional(s.string()),
  signature: s.optional(s.string()),
  width: s.optional(s.int()),
  height: s.optional(s.int()),
  assetId: s.optional(s.string()),
  format: s.optional(s.string()),
  resourceType: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  tags: s.optionalNullable(s.array(s.string())),
  context: s.optionalNullable(s.lazy(() => contextFullResponseSchema)),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  pages: s.optional(s.int()),
  bytes: s.optional(s.int()),
  type: s.optional(s.string()),
  etag: s.optional(s.string()),
  placeholder: s.optional(s.boolean()),
  originalFilename: s.optional(s.string()),
  imageMetadata: s.optional(s.record(s.string(), s.unknown())),
  illustrationScore: s.optional(s.float64()),
  semiTransparent: s.optional(s.boolean()),
  grayscale: s.optional(s.boolean()),
  faces: s.optionalNullable(s.array(s.array(s.int()))),
  coordinates: s.optionalNullable(s.lazy(() => coordinatesResponseSchema)),
  eager: s.optional(s.array(s.lazy(() => eagerSchema))),
  assetFolder: s.optionalNullable(s.string()),
  displayName: s.optional(s.string()),
  apiKey: s.optional(s.string()),
  _keysMap: {
    secureUrl: "secure_url",
    publicId: "public_id",
    versionId: "version_id",
    assetId: "asset_id",
    resourceType: "resource_type",
    createdAt: "created_at",
    originalFilename: "original_filename",
    imageMetadata: "image_metadata",
    illustrationScore: "illustration_score",
    semiTransparent: "semi_transparent",
    assetFolder: "asset_folder",
    displayName: "display_name",
    apiKey: "api_key",
  },
});
