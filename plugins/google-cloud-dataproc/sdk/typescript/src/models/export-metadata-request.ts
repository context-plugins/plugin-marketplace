import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { databaseDumpType1Schema, type DatabaseDumpType1 } from "./database-dump-type1.js";

/** Request message for DataprocMetastore.ExportMetadata. */
export type ExportMetadataRequest = {
  /** Optional. The type of the database dump. If unspecified, defaults to MYSQL. */
  databaseDumpType?: DatabaseDumpType1;
  /**
   * A Cloud Storage URI of a folder, in the format gs:///. A sub-folder containing exported files
   * will be created below it.
   */
  destinationGcsFolder?: string;
  /**
   * Optional. A request ID. Specify a unique request ID to allow the server to ignore the request
   * if it has completed. The server will ignore subsequent requests that provide a duplicate
   * request ID for at least 60 minutes after the first request.For example, if an initial request
   * times out, followed by another request with the same request ID, the server ignores the second
   * request to prevent the creation of duplicate commitments.The request ID must be a valid UUID
   * (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format). A zero UUID
   * (00000000-0000-0000-0000-000000000000) is not supported.
   */
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exportMetadataRequestSchema: Schema<ExportMetadataRequest> = s.object<ExportMetadataRequest>(
  {
    databaseDumpType: s.optional(s.lazy(() => databaseDumpType1Schema)),
    destinationGcsFolder: s.optional(s.string()),
    requestId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
