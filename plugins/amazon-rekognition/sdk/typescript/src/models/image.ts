import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { s3ObjectSchema, type S3Object } from "./s3-object.js";

export type Image = {
  /**
   * Blob of image bytes up to 5 MBs. Note that the maximum image size you can pass to
   * DetectCustomLabels is 4MB.
   */
  bytes?: string;
  s3Object?: S3Object;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const imageSchema: Schema<Image> = s.object<Image>(
  {
    bytes: s.optional(s.string()),
    s3Object: s.optional(s.lazy(() => s3ObjectSchema)),
    _keysMap: {
      bytes: "Bytes",
      s3Object: "S3Object",
    },
  },
  { additionalProperties: s.json() },
);
