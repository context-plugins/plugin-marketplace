import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { databaseDumpTypeSchema, type DatabaseDumpType } from "./database-dump-type.js";
import { state9Schema, type State9 } from "./state9.js";

/** The details of a metadata export operation. */
export type MetadataExport = {
  /** Output only. The current state of the export. */
  state?: State9;
  /** Output only. The time when the export ended. */
  endTime?: string;
  /** Output only. The time when the export started. */
  startTime?: string;
  /** Output only. The type of the database dump. */
  databaseDumpType?: DatabaseDumpType;
  /**
   * Output only. A Cloud Storage URI of a folder that metadata are exported to, in the form of
   * gs:////, where is automatically generated.
   */
  destinationGcsUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metadataExportSchema: Schema<MetadataExport> = s.object<MetadataExport>(
  {
    state: s.optional(s.lazy(() => state9Schema)),
    endTime: s.optional(s.string()),
    startTime: s.optional(s.string()),
    databaseDumpType: s.optional(s.lazy(() => databaseDumpTypeSchema)),
    destinationGcsUri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
