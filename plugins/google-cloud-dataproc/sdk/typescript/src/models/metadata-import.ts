import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { databaseDump2Schema, type DatabaseDump2 } from "./database-dump2.js";
import { state16Schema, type State16 } from "./state16.js";

/** A metastore resource that imports metadata. */
export type MetadataImport = {
  /**
   * Immutable. Identifier. The relative resource name of the metadata import, of the
   * form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports/{metadata_import_id}.
   */
  name?: string;
  /** Immutable. A database dump from a pre-existing metastore's database. */
  databaseDump?: DatabaseDump2;
  /** Output only. The time when the metadata import was started. */
  createTime?: string;
  /** Output only. The time when the metadata import was last updated. */
  updateTime?: string;
  /** Output only. The current state of the metadata import. */
  state?: State16;
  /** Optional. The description of the metadata import. */
  description?: string;
  /** Output only. The time when the metadata import finished. */
  endTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metadataImportSchema: Schema<MetadataImport> = s.object<MetadataImport>(
  {
    name: s.optional(s.string()),
    databaseDump: s.optional(s.lazy(() => databaseDump2Schema)),
    createTime: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    state: s.optional(s.lazy(() => state16Schema)),
    description: s.optional(s.string()),
    endTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
