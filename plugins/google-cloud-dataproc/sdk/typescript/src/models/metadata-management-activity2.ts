import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metadataExportSchema, type MetadataExport } from "./metadata-export.js";
import { restoreSchema, type Restore } from "./restore.js";

/** Output only. The metadata management activities of the metastore service. */
export type MetadataManagementActivity2 = {
  /** Output only. The latest metadata exports of the metastore service. */
  metadataExports?: MetadataExport[];
  /** Output only. The latest restores of the metastore service. */
  restores?: Restore[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metadataManagementActivity2Schema: Schema<MetadataManagementActivity2> =
  s.object<MetadataManagementActivity2>(
    {
      metadataExports: s.optional(s.array(s.lazy(() => metadataExportSchema))),
      restores: s.optional(s.array(s.lazy(() => restoreSchema))),
    },
    { additionalProperties: s.json() },
  );
