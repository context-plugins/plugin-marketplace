import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataverseProfileSchema, type DataverseProfile } from "./dataverse-profile.js";
import {
  forwardSshTunnelConnectivity1Schema,
  type ForwardSshTunnelConnectivity1,
} from "./forward-ssh-tunnel-connectivity1.js";
import { gcsProfileSchema, type GcsProfile } from "./gcs-profile.js";
import { mongodbProfileSchema, type MongodbProfile } from "./mongodb-profile.js";
import { mysqlProfileSchema, type MysqlProfile } from "./mysql-profile.js";
import { oracleProfileSchema, type OracleProfile } from "./oracle-profile.js";
import { postgresqlProfileSchema, type PostgresqlProfile } from "./postgresql-profile.js";
import { privateConnectivity2Schema, type PrivateConnectivity2 } from "./private-connectivity2.js";
import {
  salesforceMarketingCloudProfileSchema,
  type SalesforceMarketingCloudProfile,
} from "./salesforce-marketing-cloud-profile.js";
import { salesforceProfileSchema, type SalesforceProfile } from "./salesforce-profile.js";
import { serviceNowProfileSchema, type ServiceNowProfile } from "./service-now-profile.js";
import { spannerProfileSchema, type SpannerProfile } from "./spanner-profile.js";
import { sqlServerProfileSchema, type SqlServerProfile } from "./sql-server-profile.js";
import { workdayProfile1Schema, type WorkdayProfile1 } from "./workday-profile1.js";

/** Optional. An ad-hoc connection profile configuration. */
export type ConnectionProfile2 = {
  /** Profile for connecting to a BigQuery destination. */
  bigqueryProfile?: Record<string, unknown>;
  /** Required. Display name. */
  displayName?: string;
  /** Profile for connecting to a MySQL source. */
  mysqlProfile?: MysqlProfile;
  /** Optional. Profile for connecting to a Workday source. */
  workdayProfile?: WorkdayProfile1;
  /** Profile for connecting to a Cloud Storage destination. */
  gcsProfile?: GcsProfile;
  /** Profile for connecting to a Spanner source. */
  spannerProfile?: SpannerProfile;
  /** Output only. The create time of the resource. */
  createTime?: string;
  /** Profile for connecting to a SQLServer source. */
  sqlServerProfile?: SqlServerProfile;
  /** Labels. */
  labels?: Record<string, string>;
  /** Profile for connecting to a Salesforce Marketing Cloud source. */
  salesforceMarketingCloudProfile?: SalesforceMarketingCloudProfile;
  /** Profile for connecting to a Dataverse source. */
  dataverseProfile?: DataverseProfile;
  /** Profile for connecting to a Salesforce source. */
  salesforceProfile?: SalesforceProfile;
  /** Profile for connecting to a MongoDB source. */
  mongodbProfile?: MongodbProfile;
  /** Profile for connecting to a ServiceNow source. */
  serviceNowProfile?: ServiceNowProfile;
  /** Private connectivity. */
  privateConnectivity?: PrivateConnectivity2;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Output only. Identifier. The resource's name. */
  name?: string;
  /** Forward SSH tunnel connectivity. */
  forwardSshConnectivity?: ForwardSshTunnelConnectivity1;
  /** Profile for connecting to an Oracle source. */
  oracleProfile?: OracleProfile;
  /** Output only. The update time of the resource. */
  updateTime?: string;
  /** Static Service IP connectivity. */
  staticServiceIpConnectivity?: Record<string, unknown>;
  /** Profile for connecting to a PostgreSQL source. */
  postgresqlProfile?: PostgresqlProfile;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const connectionProfile2Schema: Schema<ConnectionProfile2> = s.object<ConnectionProfile2>(
  {
    bigqueryProfile: s.optional(s.record(s.string(), s.unknown())),
    displayName: s.optional(s.string()),
    mysqlProfile: s.optional(s.lazy(() => mysqlProfileSchema)),
    workdayProfile: s.optional(s.lazy(() => workdayProfile1Schema)),
    gcsProfile: s.optional(s.lazy(() => gcsProfileSchema)),
    spannerProfile: s.optional(s.lazy(() => spannerProfileSchema)),
    createTime: s.optional(s.string()),
    sqlServerProfile: s.optional(s.lazy(() => sqlServerProfileSchema)),
    labels: s.optional(s.record(s.string(), s.string())),
    salesforceMarketingCloudProfile: s.optional(s.lazy(() => salesforceMarketingCloudProfileSchema)),
    dataverseProfile: s.optional(s.lazy(() => dataverseProfileSchema)),
    salesforceProfile: s.optional(s.lazy(() => salesforceProfileSchema)),
    mongodbProfile: s.optional(s.lazy(() => mongodbProfileSchema)),
    serviceNowProfile: s.optional(s.lazy(() => serviceNowProfileSchema)),
    privateConnectivity: s.optional(s.lazy(() => privateConnectivity2Schema)),
    satisfiesPzs: s.optional(s.boolean()),
    satisfiesPzi: s.optional(s.boolean()),
    name: s.optional(s.string()),
    forwardSshConnectivity: s.optional(s.lazy(() => forwardSshTunnelConnectivity1Schema)),
    oracleProfile: s.optional(s.lazy(() => oracleProfileSchema)),
    updateTime: s.optional(s.string()),
    staticServiceIpConnectivity: s.optional(s.record(s.string(), s.unknown())),
    postgresqlProfile: s.optional(s.lazy(() => postgresqlProfileSchema)),
  },
  { additionalProperties: s.json() },
);
