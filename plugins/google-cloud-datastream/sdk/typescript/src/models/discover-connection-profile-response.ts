import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mongodbCluster1Schema, type MongodbCluster1 } from "./mongodb-cluster1.js";
import { mysqlRdbms1Schema, type MysqlRdbms1 } from "./mysql-rdbms1.js";
import { oracleRdbms1Schema, type OracleRdbms1 } from "./oracle-rdbms1.js";
import { postgresqlRdbms1Schema, type PostgresqlRdbms1 } from "./postgresql-rdbms1.js";
import { salesforceOrg2Schema, type SalesforceOrg2 } from "./salesforce-org2.js";
import { sourceCatalog3Schema, type SourceCatalog3 } from "./source-catalog3.js";
import { spannerDatabase1Schema, type SpannerDatabase1 } from "./spanner-database1.js";
import { sqlServerRdbms1Schema, type SqlServerRdbms1 } from "./sql-server-rdbms1.js";

/** Response from a discover request. */
export type DiscoverConnectionProfileResponse = {
  /** Enriched Spanner database. */
  spannerDatabase?: SpannerDatabase1;
  /** Enriched Salesforce organization. */
  salesforceOrg?: SalesforceOrg2;
  /** Enriched Oracle RDBMS object. */
  oracleRdbms?: OracleRdbms1;
  /** Enriched source catalog. This is mainly used to represent SaaS sources databases. */
  sourceCatalog?: SourceCatalog3;
  /** Enriched SQLServer RDBMS object. */
  sqlServerRdbms?: SqlServerRdbms1;
  /** Enriched MongoDB cluster. */
  mongodbCluster?: MongodbCluster1;
  /** Enriched MySQL RDBMS object. */
  mysqlRdbms?: MysqlRdbms1;
  /** Enriched PostgreSQL RDBMS object. */
  postgresqlRdbms?: PostgresqlRdbms1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const discoverConnectionProfileResponseSchema: Schema<DiscoverConnectionProfileResponse> =
  s.object<DiscoverConnectionProfileResponse>(
    {
      spannerDatabase: s.optional(s.lazy(() => spannerDatabase1Schema)),
      salesforceOrg: s.optional(s.lazy(() => salesforceOrg2Schema)),
      oracleRdbms: s.optional(s.lazy(() => oracleRdbms1Schema)),
      sourceCatalog: s.optional(s.lazy(() => sourceCatalog3Schema)),
      sqlServerRdbms: s.optional(s.lazy(() => sqlServerRdbms1Schema)),
      mongodbCluster: s.optional(s.lazy(() => mongodbCluster1Schema)),
      mysqlRdbms: s.optional(s.lazy(() => mysqlRdbms1Schema)),
      postgresqlRdbms: s.optional(s.lazy(() => postgresqlRdbms1Schema)),
    },
    { additionalProperties: s.json() },
  );
