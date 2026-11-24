import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customSchema, type Custom } from "./custom.js";
import { dbtCloud1Schema, type DbtCloud1 } from "./dbt-cloud1.js";
import { dbt1Schema, type Dbt1 } from "./dbt1.js";
import { rawSchema, type Raw } from "./raw.js";
import { tableSchema, type Table } from "./table.js";
import { visualSchema, type Visual } from "./visual.js";

/** The input for creating a Model */
export type ModelCreate = {
  /** The name of the model */
  name: string;
  /** The slug of the model */
  slug: string;
  /** The type of the query. Available options: custom, raw_sql, tabel, dbt and visual. */
  queryType: string;
  /** The id of the source that model is connected to */
  sourceId: number;
  /**
   * If is_schema is true, the model is just used to build other models. Either as part of visual
   * querying, or as the root of a visual query.
   */
  isSchema: boolean;
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
   * The Space this audience belongs to. Applies only to workspaces with Spaces enabled; contact
   * Hightouch to enable Spaces and to obtain Space ids. Only valid when queryType is "visual".
   * Omitted for models that are not in a Space. An API key scoped to a Space must set it on create.
   * Read-only after creation.
   */
  spaceId?: string;
  /**
   * Row-level access rules attached to this audience. Applies only to workspaces with Spaces
   * enabled. Only valid when queryType is "visual"; always present on an audience. When creating an
   * audience in a Space, include one rule from each required row-level access group on the parent
   * model. Rule ids come from the Spaces governance API. Read-only after creation.
   */
  rowLevelAccessRuleIds?: string[];
  /**
   * The primary key will be null if the query doesn't get directly synced (e.g. a relationship
   * table for visual querying). Optional here but actually conditionally required: every model
   * except a general model must supply one.
   */
  primaryKey?: string;
  /**
   * Create a general model: a model that exposes warehouse data to Hightouch AI agents instead of
   * being synced. Takes no primaryKey and no folderId, and cannot be a schema model, and only
   * supports certain query types.
   */
  isGeneralModel?: boolean;
  /**
   * The description of the model. On a general model this is the context AI agents read to decide
   * when to use it.
   */
  description?: string;
  dbt?: Dbt1;
  dbtCloud?: DbtCloud1;
};

export const modelCreateSchema: Schema<ModelCreate> = s.object<ModelCreate>({
  name: s.string(),
  slug: s.string(),
  queryType: s.string(),
  sourceId: s.float64(),
  isSchema: s.boolean(),
  visual: s.optional(s.lazy(() => visualSchema)),
  custom: s.optional(s.lazy(() => customSchema)),
  table: s.optional(s.lazy(() => tableSchema)),
  raw: s.optional(s.lazy(() => rawSchema)),
  folderId: s.optional(s.string()),
  spaceId: s.optional(s.string()),
  rowLevelAccessRuleIds: s.optional(s.array(s.string())),
  primaryKey: s.optional(s.string()),
  isGeneralModel: s.optional(s.boolean()),
  description: s.optional(s.string()),
  dbt: s.optional(s.lazy(() => dbt1Schema)),
  dbtCloud: s.optional(s.lazy(() => dbtCloud1Schema)),
  _keysMap: {
    dbtCloud: "dbt_cloud",
  },
});
