import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customSchema, type Custom } from "./custom.js";
import { dbt1Schema, type Dbt1 } from "./dbt1.js";
import { rawSchema, type Raw } from "./raw.js";
import { tableSchema, type Table } from "./table.js";
import { visualSchema, type Visual } from "./visual.js";

/** The input for updating a Model */
export type ModelUpdate = {
  /** The name of the model */
  name?: string;
  /** The description of the model. Null when no description has been set. */
  description?: string | null;
  /**
   * If is_schema is true, the model is just used to build other models. Either as part of visual
   * querying, or as the root of a visual query.
   */
  isSchema?: boolean;
  /** Visual query, used by audience */
  visual?: Visual;
  /** Custom query for sources that doesn't support sql. For example, Airtable. */
  custom?: Custom;
  /** Table-based query that fetches on a table instead of SQL */
  table?: Table;
  /** Standard raw SQL query */
  raw?: Raw;
  folderId?: string;
  /**
   * The primary key will be null if the query doesn't get directly synced (e.g. a relationship
   * table for visual querying)
   */
  primaryKey?: string;
  dbt?: Dbt1;
};

export const modelUpdateSchema: Schema<ModelUpdate> = s.object<ModelUpdate>({
  name: s.optional(s.string()),
  description: s.optionalNullable(s.string()),
  isSchema: s.optional(s.boolean()),
  visual: s.optional(s.lazy(() => visualSchema)),
  custom: s.optional(s.lazy(() => customSchema)),
  table: s.optional(s.lazy(() => tableSchema)),
  raw: s.optional(s.lazy(() => rawSchema)),
  folderId: s.optional(s.string()),
  primaryKey: s.optional(s.string()),
  dbt: s.optional(s.lazy(() => dbt1Schema)),
});
