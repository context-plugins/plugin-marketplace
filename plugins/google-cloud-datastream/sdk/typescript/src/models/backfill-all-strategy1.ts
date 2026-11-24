import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mongodbCluster6Schema, type MongodbCluster6 } from "./mongodb-cluster6.js";
import { mysqlRdbms6Schema, type MysqlRdbms6 } from "./mysql-rdbms6.js";
import { oracleRdbms6Schema, type OracleRdbms6 } from "./oracle-rdbms6.js";
import { postgresqlRdbms6Schema, type PostgresqlRdbms6 } from "./postgresql-rdbms6.js";
import { salesforceOrg1Schema, type SalesforceOrg1 } from "./salesforce-org1.js";
import { sourceCatalog2Schema, type SourceCatalog2 } from "./source-catalog2.js";
import { spannerDatabase6Schema, type SpannerDatabase6 } from "./spanner-database6.js";
import { sqlServerRdbms6Schema, type SqlServerRdbms6 } from "./sql-server-rdbms6.js";

/**
 * Automatically backfill objects included in the stream source configuration. Specific objects can
 * be excluded.
 */
export type BackfillAllStrategy1 = {
  /**
   * Source catalog data source objects to avoid backfilling. This is mainly used to represent SaaS
   * applications objects.
   */
  saasExcludedObjects?: SourceCatalog2;
  /** PostgreSQL data source objects to avoid backfilling. */
  postgresqlExcludedObjects?: PostgresqlRdbms6;
  /** Spanner data source objects to avoid backfilling. */
  spannerExcludedObjects?: SpannerDatabase6;
  /** MySQL data source objects to avoid backfilling. */
  mysqlExcludedObjects?: MysqlRdbms6;
  /** SQLServer data source objects to avoid backfilling */
  sqlServerExcludedObjects?: SqlServerRdbms6;
  /** MongoDB data source objects to avoid backfilling */
  mongodbExcludedObjects?: MongodbCluster6;
  /** Oracle data source objects to avoid backfilling. */
  oracleExcludedObjects?: OracleRdbms6;
  /** Salesforce data source objects to avoid backfilling */
  salesforceExcludedObjects?: SalesforceOrg1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const backfillAllStrategy1Schema: Schema<BackfillAllStrategy1> = s.object<BackfillAllStrategy1>(
  {
    saasExcludedObjects: s.optional(s.lazy(() => sourceCatalog2Schema)),
    postgresqlExcludedObjects: s.optional(s.lazy(() => postgresqlRdbms6Schema)),
    spannerExcludedObjects: s.optional(s.lazy(() => spannerDatabase6Schema)),
    mysqlExcludedObjects: s.optional(s.lazy(() => mysqlRdbms6Schema)),
    sqlServerExcludedObjects: s.optional(s.lazy(() => sqlServerRdbms6Schema)),
    mongodbExcludedObjects: s.optional(s.lazy(() => mongodbCluster6Schema)),
    oracleExcludedObjects: s.optional(s.lazy(() => oracleRdbms6Schema)),
    salesforceExcludedObjects: s.optional(s.lazy(() => salesforceOrg1Schema)),
  },
  { additionalProperties: s.json() },
);
