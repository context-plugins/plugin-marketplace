import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { connectionProfile2Schema, type ConnectionProfile2 } from "./connection-profile2.js";
import { mongodbCluster3Schema, type MongodbCluster3 } from "./mongodb-cluster3.js";
import { mysqlRdbms4Schema, type MysqlRdbms4 } from "./mysql-rdbms4.js";
import { oracleRdbms4Schema, type OracleRdbms4 } from "./oracle-rdbms4.js";
import { postgresqlRdbms2Schema, type PostgresqlRdbms2 } from "./postgresql-rdbms2.js";
import { salesforceOrg5Schema, type SalesforceOrg5 } from "./salesforce-org5.js";
import { sourceCatalog4Schema, type SourceCatalog4 } from "./source-catalog4.js";
import { spannerDatabase2Schema, type SpannerDatabase2 } from "./spanner-database2.js";
import { sqlServerRdbms2Schema, type SqlServerRdbms2 } from "./sql-server-rdbms2.js";

/** Request message for 'discover' ConnectionProfile request. */
export type DiscoverConnectionProfileRequest = {
  /** Optional. PostgreSQL RDBMS to enrich with child data objects and metadata. */
  postgresqlRdbms?: PostgresqlRdbms2;
  /** Optional. The number of hierarchy levels below the current level to be retrieved. */
  hierarchyDepth?: number;
  /**
   * Optional. Source catalog to enrich with child data objects and metadata. This is mainly used to
   * represent SaaS sources databases.
   */
  sourceCatalog?: SourceCatalog4;
  /** Optional. SQLServer RDBMS to enrich with child data objects and metadata. */
  sqlServerRdbms?: SqlServerRdbms2;
  /** Optional. MongoDB cluster to enrich with child data objects and metadata. */
  mongodbCluster?: MongodbCluster3;
  /** Optional. Oracle RDBMS to enrich with child data objects and metadata. */
  oracleRdbms?: OracleRdbms4;
  /** Optional. MySQL RDBMS to enrich with child data objects and metadata. */
  mysqlRdbms?: MysqlRdbms4;
  /** Optional. Salesforce organization to enrich with child data objects and metadata. */
  salesforceOrg?: SalesforceOrg5;
  /** Optional. An ad-hoc connection profile configuration. */
  connectionProfile?: ConnectionProfile2;
  /** Optional. A reference to an existing connection profile. */
  connectionProfileName?: string;
  /**
   * Optional. Whether to retrieve the full hierarchy of data objects (TRUE) or only the current
   * level (FALSE).
   */
  fullHierarchy?: boolean;
  /** Optional. Spanner database to enrich with child data objects and metadata. */
  spannerDatabase?: SpannerDatabase2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const discoverConnectionProfileRequestSchema: Schema<DiscoverConnectionProfileRequest> =
  s.object<DiscoverConnectionProfileRequest>(
    {
      postgresqlRdbms: s.optional(s.lazy(() => postgresqlRdbms2Schema)),
      hierarchyDepth: s.optional(s.int()),
      sourceCatalog: s.optional(s.lazy(() => sourceCatalog4Schema)),
      sqlServerRdbms: s.optional(s.lazy(() => sqlServerRdbms2Schema)),
      mongodbCluster: s.optional(s.lazy(() => mongodbCluster3Schema)),
      oracleRdbms: s.optional(s.lazy(() => oracleRdbms4Schema)),
      mysqlRdbms: s.optional(s.lazy(() => mysqlRdbms4Schema)),
      salesforceOrg: s.optional(s.lazy(() => salesforceOrg5Schema)),
      connectionProfile: s.optional(s.lazy(() => connectionProfile2Schema)),
      connectionProfileName: s.optional(s.string()),
      fullHierarchy: s.optional(s.boolean()),
      spannerDatabase: s.optional(s.lazy(() => spannerDatabase2Schema)),
    },
    { additionalProperties: s.json() },
  );
