import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Point within the file (line and character). */
export type GoogleCloudApihubV1Point = {
  /** Required. Line number (zero-indexed). */
  line?: number;
  /** Required. Character position within the line (zero-indexed). */
  character?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1PointSchema: Schema<GoogleCloudApihubV1Point> =
  s.object<GoogleCloudApihubV1Point>(
    {
      line: s.optional(s.int()),
      character: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
