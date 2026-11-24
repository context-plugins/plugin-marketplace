import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { boundingBoxSchema, type BoundingBox } from "./bounding-box.js";
import { s3ObjectSchema, type S3Object } from "./s3-object.js";

export type AuditImage = {
  /**
   * The Base64-encoded bytes representing an image selected from the Face Liveness video and
   * returned for audit purposes.
   */
  bytes?: string;
  s3Object?: S3Object;
  boundingBox?: BoundingBox;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auditImageSchema: Schema<AuditImage> = s.object<AuditImage>(
  {
    bytes: s.optional(s.string()),
    s3Object: s.optional(s.lazy(() => s3ObjectSchema)),
    boundingBox: s.optional(s.lazy(() => boundingBoxSchema)),
    _keysMap: {
      bytes: "Bytes",
      s3Object: "S3Object",
      boundingBox: "BoundingBox",
    },
  },
  { additionalProperties: s.json() },
);
