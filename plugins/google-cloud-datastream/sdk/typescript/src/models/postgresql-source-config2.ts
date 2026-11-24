import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postgresqlRdbms3Schema, type PostgresqlRdbms3 } from "./postgresql-rdbms3.js";
import { postgresqlRdbms4Schema, type PostgresqlRdbms4 } from "./postgresql-rdbms4.js";

/** PostgreSQL data source configuration. */
export type PostgresqlSourceConfig2 = {
  /**
   * Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or
   * set to 0), the system's default value will be used.
   */
  maxConcurrentBackfillTasks?: number;
  /** The PostgreSQL objects to include in the stream. */
  includeObjects?: PostgresqlRdbms3;
  /**
   * Required. The name of the publication that includes the set of all tables that are defined in
   * the stream's include_objects.
   */
  publication?: string;
  /**
   * Required. Immutable. The name of the logical replication slot that's configured with the
   * pgoutput plugin.
   */
  replicationSlot?: string;
  /** The PostgreSQL objects to exclude from the stream. */
  excludeObjects?: PostgresqlRdbms4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postgresqlSourceConfig2Schema: Schema<PostgresqlSourceConfig2> =
  s.object<PostgresqlSourceConfig2>(
    {
      maxConcurrentBackfillTasks: s.optional(s.int()),
      includeObjects: s.optional(s.lazy(() => postgresqlRdbms3Schema)),
      publication: s.optional(s.string()),
      replicationSlot: s.optional(s.string()),
      excludeObjects: s.optional(s.lazy(() => postgresqlRdbms4Schema)),
    },
    { additionalProperties: s.json() },
  );
