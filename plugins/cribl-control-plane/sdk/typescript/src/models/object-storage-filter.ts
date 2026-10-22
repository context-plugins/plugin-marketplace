import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pathFilterDataFormat1Schema, type PathFilterDataFormat1 } from "./path-filter-data-format1.js";

export type ObjectStorageFilter = {
  /** Row format for Search v2 Lake path filters. */
  dataPathFormat?: PathFilterDataFormat1;
  /** Datatype identifier that maps filtered objects to a data type definition. */
  dataTypeId: string;
  /** Glob pattern for selecting files within the storage path. */
  filter: string;
  /**
   * When true, instructs the C++ reader to unwrap the outer JSON envelope before applying the user
   * datatype to the nested _raw field. Set for Cribl Lake NDJSON filters only.
   */
  preprocessOuterJson?: boolean;
};

export const objectStorageFilterSchema: Schema<ObjectStorageFilter> = s.object<ObjectStorageFilter>({
  dataPathFormat: s.optional(s.lazy(() => pathFilterDataFormat1Schema)),
  dataTypeId: s.string(),
  filter: s.string(),
  preprocessOuterJson: s.optional(s.boolean()),
});
