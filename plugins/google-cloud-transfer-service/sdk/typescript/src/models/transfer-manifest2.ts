import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A manifest file provides a list of objects to be transferred from the data source. This field
 * points to the location of the manifest file. Otherwise, the entire source bucket is used.
 * ObjectConditions still apply.
 */
export type TransferManifest2 = {
  /**
   * Specifies the path to the manifest in Cloud Storage. The Google-managed service account for the
   * transfer must have `storage.objects.get` permission for this object. An example path is
   * `gs://bucket_name/path/manifest.csv`.
   */
  location?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transferManifest2Schema: Schema<TransferManifest2> = s.object<TransferManifest2>(
  {
    location: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
