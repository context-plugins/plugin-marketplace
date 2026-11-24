import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Specifies where the manifest is located. */
export type TransferManifest = {
  /**
   * Specifies the path to the manifest in Cloud Storage. The Google-managed service account for the
   * transfer must have `storage.objects.get` permission for this object. An example path is
   * `gs://bucket_name/path/manifest.csv`.
   */
  location?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transferManifestSchema: Schema<TransferManifest> = s.object<TransferManifest>(
  {
    location: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
