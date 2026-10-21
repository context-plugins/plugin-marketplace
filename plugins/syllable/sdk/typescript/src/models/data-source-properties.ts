import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Names of data source fields supported for filtering/sorting on list endpoint. */
export const DataSourceProperties = {
  Name: "name",
  Description: "description",
  Labels: "labels",
  Chunk: "chunk",
  ChunkDelimiter: "chunk_delimiter",
  UpdatedAt: "updated_at",
  LastUpdatedBy: "last_updated_by",
} as const;
export type DataSourceProperties =
  | (typeof DataSourceProperties)[keyof typeof DataSourceProperties]
  | (string & {});

export const dataSourcePropertiesSchema: EnumSchema<DataSourceProperties> =
  s.enumOf<DataSourceProperties>(DataSourceProperties);
