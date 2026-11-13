import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { UploadState, uploadStateSchema } from "./upload-state.js";

export type UploadResult = {
  /** URL of the uploaded file. */
  fileUrl: string;
  /** Name of the uploaded file. */
  fileName: string;
  /** Size of the uploaded file in bytes. */
  fileSize: number;
  /** MIME type of the uploaded file. */
  fileType: string;
  /** Detected resource type of the upload. */
  resourceType: string;
  /** Image URL for image uploads, or `null` for non-image files. */
  image?: string | null;
  /** Image width in pixels, or `null` for non-image files. */
  imageWidth?: number | null;
  /** Image height in pixels, or `null` for non-image files. */
  imageHeight?: number | null;
  /** Upload processing state. @default UploadState.Pending */
  uploadState?: UploadState;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const uploadResultSchema: Schema<UploadResult> = s.object<UploadResult>(
  {
    fileUrl: s.string(),
    fileName: s.string(),
    fileSize: s.int(),
    fileType: s.string(),
    resourceType: s.string(),
    image: s.optionalNullable(s.string()),
    imageWidth: s.optionalNullable(s.int()),
    imageHeight: s.optionalNullable(s.int()),
    uploadState: s.defaulted(uploadStateSchema, UploadState.Pending),
    _keysMap: {
      fileUrl: "file_url",
      fileName: "file_name",
      fileSize: "file_size",
      fileType: "file_type",
      resourceType: "resource_type",
      imageWidth: "image_width",
      imageHeight: "image_height",
      uploadState: "upload_state",
    },
  },
  { additionalProperties: s.json() },
);
