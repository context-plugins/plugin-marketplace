import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { s3ObjectSchema, type S3Object } from "./s3-object.js";

export type Summary = {
  s3Object?: S3Object;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summarySchema: Schema<Summary> = s.object<Summary>(
  {
    s3Object: s.optional(s.lazy(() => s3ObjectSchema)),
    _keysMap: {
      s3Object: "S3Object",
    },
  },
  { additionalProperties: s.json() },
);
