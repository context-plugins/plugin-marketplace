import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Google Cloud Storage file source. */
export type GcsInputSource1 = {
  /** Required. Source data URI. For example, `gs://my_bucket/my_object`. */
  inputUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gcsInputSource1Schema: Schema<GcsInputSource1> = s.object<GcsInputSource1>(
  {
    inputUri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
