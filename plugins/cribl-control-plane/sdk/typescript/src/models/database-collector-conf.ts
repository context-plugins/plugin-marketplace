import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { hiddenDefaultBreakersSchema, type HiddenDefaultBreakers } from "./hidden-default-breakers.js";
import { schedulingSchema, type Scheduling } from "./scheduling.js";

export type DatabaseCollectorConf = {
  /** Select an existing Connection, or go to Knowledge > Database Connections to add one */
  connectionId: string;
  /**
   * An expression that resolves to the query string for selecting data from the database. Has
   * access to the special ${earliest} and ${latest} variables, which will resolve to the Collector
   * run's start and end time.
   */
  query: string;
  /**
   * Enforces a basic query validation that allows only a single 'select' statement. Disable for
   * more complex queries or when using semicolons. Caution: Disabling query validation allows DDL
   * and DML statements to be executed, which could be destructive to your database.
   */
  queryValidationEnabled?: boolean;
  /** Hidden Default Breakers */
  defaultBreakers?: HiddenDefaultBreakers;
  /** Internal settings for scheduled execution of this Collector. */
  scheduling?: Scheduling;
  /**
   * Binds 'query' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'query' at runtime.
   */
  templateQuery?: string;
};

export const databaseCollectorConfSchema: Schema<DatabaseCollectorConf> = s.object<DatabaseCollectorConf>({
  connectionId: s.string(),
  query: s.string(),
  queryValidationEnabled: s.optional(s.boolean()),
  defaultBreakers: s.optional(s.lazy(() => hiddenDefaultBreakersSchema)),
  scheduling: s.optional(s.lazy(() => schedulingSchema)),
  templateQuery: s.optional(s.string()),
  _keysMap: {
    scheduling: "__scheduling",
    templateQuery: "__template_query",
  },
});
