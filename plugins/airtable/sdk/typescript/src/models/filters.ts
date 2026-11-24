import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataTypeSchema, type DataType } from "./data-type.js";
import { sourceOptionsSchema, type SourceOptions } from "./source-options.js";

/** Filters to narrow down which changes trigger the webhook. */
export type Filters = {
  sourceOptions?: SourceOptions;
  /** The types of data changes to monitor. */
  dataTypes?: DataType[];
  /** The scope of record changes to monitor. */
  recordChangeScope?: string;
  /** Specific field IDs to watch for changes. */
  watchDataInFieldIds?: string[];
  /** Specific field IDs whose schema changes to watch. */
  watchSchemasOfFieldIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filtersSchema: Schema<Filters> = s.object<Filters>(
  {
    sourceOptions: s.optional(s.lazy(() => sourceOptionsSchema)),
    dataTypes: s.optional(s.array(s.lazy(() => dataTypeSchema))),
    recordChangeScope: s.optional(s.string()),
    watchDataInFieldIds: s.optional(s.array(s.string())),
    watchSchemasOfFieldIds: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
