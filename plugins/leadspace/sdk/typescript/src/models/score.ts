import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bucketSchema, type Bucket } from "./bucket.js";

export type Score = {
  value?: number;
  bucket?: Bucket;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scoreSchema: Schema<Score> = s.object<Score>(
  {
    value: s.optional(s.float64()),
    bucket: s.optional(s.lazy(() => bucketSchema)),
  },
  { additionalProperties: s.json() },
);
