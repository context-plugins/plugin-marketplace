import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required. Start of the issue. */
export type GoogleCloudApihubV1Point3 = {
  /** Required. Line number (zero-indexed). */
  line?: number;
  /** Required. Character position within the line (zero-indexed). */
  character?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Point3Schema: Schema<GoogleCloudApihubV1Point3> =
  s.object<GoogleCloudApihubV1Point3>(
    {
      line: s.optional(s.int()),
      character: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
