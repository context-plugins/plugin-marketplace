import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customSchema, type Custom } from "./custom.js";
import { dbtCloudSchema, type DbtCloud } from "./dbt-cloud.js";
import { dbtSchema, type Dbt } from "./dbt.js";
import { rawSchema, type Raw } from "./raw.js";
import { tableSchema, type Table } from "./table.js";
import { userReferenceSchema, type UserReference } from "./user-reference.js";
import { visualSchema, type Visual } from "./visual.js";

/**
 * The SQL query that pulls data from your source to send to your destination. We send your SQL
 * query directly to your source so any SQL that is valid for your source (including functions) is
 * valid in Hightouch.
 */
export type Model = {
  /** The id of the model */
  id: number;
  /** The name of the model */
  name: string;
  /** The slug of the model */
  slug: string;
  /** The description of the model. Null when no description has been set. */
  description: string | null;
  /** The id of the workspace where the model belongs to */
  workspaceId: number;
  /**
   * The primary key will be null if the query doesn't get directly synced (e.g. a relationship
   * table for visual querying)
   */
  primaryKey: string;
  /** The timestamp when model was created */
  createdAt: Date;
  /** The timestamp when model was lastly updated */
  updatedAt: Date;
  /** The user who created the model, or null if no user was recorded */
  createdBy: UserReference;
  /** The user who last updated the model, or null if no user was recorded */
  updatedBy: UserReference;
  /** The id of the source that model is connected to */
  sourceId: number;
  /** The type of the query. Available options: custom, raw_sql, tabel, dbt and visual. */
  queryType: string;
  /** The tags of the model */
  tags: Record<string, string>;
  /**
   * If is_schema is true, the model is just used to build other models. Either as part of visual
   * querying, or as the root of a visual query.
   */
  isSchema: boolean;
  /**
   * If is_general_model is true, the model is not synced. It exposes warehouse data to Hightouch AI
   * agents and is managed from the schema section.
   */
  isGeneralModel: boolean;
  /** The list of id of syncs that uses this model */
  syncs: number[];
  /** Visual query, used by audience */
  visual?: Visual;
  /** Custom query for sources that doesn't support sql. For example, Airtable. */
  custom?: Custom;
  /** Table-based query that fetches on a table instead of SQL */
  table?: Table;
  /** Query that is based on a dbt model */
  dbt?: Dbt;
  dbtCloud?: DbtCloud;
  /** Standard raw SQL query */
  raw?: Raw;
  folderId?: string;
  /**
   * The number of rows returned by the most recent successful sync run of this model. Null if the
   * model has never been synced successfully.
   */
  lastRunSize: number | null;
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
};

export const modelSchema: Schema<Model> = s.object<Model>({
  id: s.float64(),
  name: s.string(),
  slug: s.string(),
  description: s.nullable(s.string()),
  workspaceId: s.float64(),
  primaryKey: s.string(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  createdBy: userReferenceSchema,
  updatedBy: userReferenceSchema,
  sourceId: s.float64(),
  queryType: s.string(),
  tags: s.record(s.string(), s.string()),
  isSchema: s.boolean(),
  isGeneralModel: s.boolean(),
  syncs: s.array(s.float64()),
  visual: s.optional(s.lazy(() => visualSchema)),
  custom: s.optional(s.lazy(() => customSchema)),
  table: s.optional(s.lazy(() => tableSchema)),
  dbt: s.optional(s.lazy(() => dbtSchema)),
  dbtCloud: s.optional(s.lazy(() => dbtCloudSchema)),
  raw: s.optional(s.lazy(() => rawSchema)),
  folderId: s.optional(s.string()),
  lastRunSize: s.nullable(s.float64()),
  spaceId: s.optional(s.string()),
  rowLevelAccessRuleIds: s.optional(s.array(s.string())),
  _keysMap: {
    dbtCloud: "dbt_cloud",
  },
});
