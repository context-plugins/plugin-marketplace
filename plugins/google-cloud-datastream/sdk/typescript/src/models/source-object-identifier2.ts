import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mongodbObjectIdentifierSchema, type MongodbObjectIdentifier } from "./mongodb-object-identifier.js";
import { mysqlObjectIdentifierSchema, type MysqlObjectIdentifier } from "./mysql-object-identifier.js";
import { oracleObjectIdentifierSchema, type OracleObjectIdentifier } from "./oracle-object-identifier.js";
import {
  postgresqlObjectIdentifierSchema,
  type PostgresqlObjectIdentifier,
} from "./postgresql-object-identifier.js";
import {
  salesforceObjectIdentifierSchema,
  type SalesforceObjectIdentifier,
} from "./salesforce-object-identifier.js";
import { spannerObjectIdentifierSchema, type SpannerObjectIdentifier } from "./spanner-object-identifier.js";
import {
  sqlServerObjectIdentifierSchema,
  type SqlServerObjectIdentifier,
} from "./sql-server-object-identifier.js";

/** Required. The source object identifier which maps to the stream object. */
export type SourceObjectIdentifier2 = {
  /** MongoDB data source object identifier. */
  mongodbIdentifier?: MongodbObjectIdentifier;
  /** Oracle data source object identifier. */
  oracleIdentifier?: OracleObjectIdentifier;
  /** Spanner data source object identifier. */
  spannerIdentifier?: SpannerObjectIdentifier;
  /** Salesforce data source object identifier. */
  salesforceIdentifier?: SalesforceObjectIdentifier;
  /** PostgreSQL data source object identifier. */
  postgresqlIdentifier?: PostgresqlObjectIdentifier;
  /** SQLServer data source object identifier. */
  sqlServerIdentifier?: SqlServerObjectIdentifier;
  /** Mysql data source object identifier. */
  mysqlIdentifier?: MysqlObjectIdentifier;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceObjectIdentifier2Schema: Schema<SourceObjectIdentifier2> =
  s.object<SourceObjectIdentifier2>(
    {
      mongodbIdentifier: s.optional(s.lazy(() => mongodbObjectIdentifierSchema)),
      oracleIdentifier: s.optional(s.lazy(() => oracleObjectIdentifierSchema)),
      spannerIdentifier: s.optional(s.lazy(() => spannerObjectIdentifierSchema)),
      salesforceIdentifier: s.optional(s.lazy(() => salesforceObjectIdentifierSchema)),
      postgresqlIdentifier: s.optional(s.lazy(() => postgresqlObjectIdentifierSchema)),
      sqlServerIdentifier: s.optional(s.lazy(() => sqlServerObjectIdentifierSchema)),
      mysqlIdentifier: s.optional(s.lazy(() => mysqlObjectIdentifierSchema)),
    },
    { additionalProperties: s.json() },
  );
