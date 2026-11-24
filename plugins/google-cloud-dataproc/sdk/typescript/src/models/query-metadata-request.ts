import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request message for DataprocMetastore.QueryMetadata. */
export type QueryMetadataRequest = {
  /**
   * Required. A read-only SQL query to execute against the metadata database. The query cannot
   * change or mutate the data.
   */
  query?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const queryMetadataRequestSchema: Schema<QueryMetadataRequest> = s.object<QueryMetadataRequest>(
  {
    query: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
