import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataverseSourceConfig1Schema, type DataverseSourceConfig1 } from "./dataverse-source-config1.js";
import { mongodbSourceConfig2Schema, type MongodbSourceConfig2 } from "./mongodb-source-config2.js";
import { mysqlSourceConfig1Schema, type MysqlSourceConfig1 } from "./mysql-source-config1.js";
import { oracleSourceConfig1Schema, type OracleSourceConfig1 } from "./oracle-source-config1.js";
import { postgresqlSourceConfig2Schema, type PostgresqlSourceConfig2 } from "./postgresql-source-config2.js";
import {
  salesforceMarketingCloudSourceConfig2Schema,
  type SalesforceMarketingCloudSourceConfig2,
} from "./salesforce-marketing-cloud-source-config2.js";
import { salesforceSourceConfig1Schema, type SalesforceSourceConfig1 } from "./salesforce-source-config1.js";
import { serviceNowSourceConfig2Schema, type ServiceNowSourceConfig2 } from "./service-now-source-config2.js";
import { spannerSourceConfig2Schema, type SpannerSourceConfig2 } from "./spanner-source-config2.js";
import { sqlServerSourceConfig1Schema, type SqlServerSourceConfig1 } from "./sql-server-source-config1.js";
import { workdaySourceConfig2Schema, type WorkdaySourceConfig2 } from "./workday-source-config2.js";

/** Required. Source connection profile configuration. */
export type SourceConfig2 = {
  /**
   * Required. Source connection profile resource. Format:
   * `projects/{project}/locations/{location}/connectionProfiles/{name}`
   */
  sourceConnectionProfile?: string;
  /** PostgreSQL data source configuration. */
  postgresqlSourceConfig?: PostgresqlSourceConfig2;
  /** Oracle data source configuration. */
  oracleSourceConfig?: OracleSourceConfig1;
  /** Spanner data source configuration. */
  spannerSourceConfig?: SpannerSourceConfig2;
  /** Optional. Workday data source configuration. */
  workdaySourceConfig?: WorkdaySourceConfig2;
  /** MySQL data source configuration. */
  mysqlSourceConfig?: MysqlSourceConfig1;
  /** SQLServer data source configuration. */
  sqlServerSourceConfig?: SqlServerSourceConfig1;
  /** Salesforce data source configuration. */
  salesforceSourceConfig?: SalesforceSourceConfig1;
  /** MongoDB data source configuration. */
  mongodbSourceConfig?: MongodbSourceConfig2;
  /** Dataverse data source configuration. */
  dataverseSourceConfig?: DataverseSourceConfig1;
  /** ServiceNow data source configuration. */
  serviceNowSourceConfig?: ServiceNowSourceConfig2;
  /** Salesforce Marketing Cloud data source configuration. */
  salesforceMarketingCloudSourceConfig?: SalesforceMarketingCloudSourceConfig2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceConfig2Schema: Schema<SourceConfig2> = s.object<SourceConfig2>(
  {
    sourceConnectionProfile: s.optional(s.string()),
    postgresqlSourceConfig: s.optional(s.lazy(() => postgresqlSourceConfig2Schema)),
    oracleSourceConfig: s.optional(s.lazy(() => oracleSourceConfig1Schema)),
    spannerSourceConfig: s.optional(s.lazy(() => spannerSourceConfig2Schema)),
    workdaySourceConfig: s.optional(s.lazy(() => workdaySourceConfig2Schema)),
    mysqlSourceConfig: s.optional(s.lazy(() => mysqlSourceConfig1Schema)),
    sqlServerSourceConfig: s.optional(s.lazy(() => sqlServerSourceConfig1Schema)),
    salesforceSourceConfig: s.optional(s.lazy(() => salesforceSourceConfig1Schema)),
    mongodbSourceConfig: s.optional(s.lazy(() => mongodbSourceConfig2Schema)),
    dataverseSourceConfig: s.optional(s.lazy(() => dataverseSourceConfig1Schema)),
    serviceNowSourceConfig: s.optional(s.lazy(() => serviceNowSourceConfig2Schema)),
    salesforceMarketingCloudSourceConfig: s.optional(
      s.lazy(() => salesforceMarketingCloudSourceConfig2Schema),
    ),
  },
  { additionalProperties: s.json() },
);
