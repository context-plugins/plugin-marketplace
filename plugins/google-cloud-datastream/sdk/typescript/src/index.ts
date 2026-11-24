export { GoogleCloudDatastreamClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export {
  PkceMethod,
  type SecretProvider,
  type OAuth2AuthorizationCodeCredentials,
  type AuthorizationCodePrompt,
} from "./core/auth/credentials.js";
export type {
  OAuth2RefreshableTokenStrategy,
  OAuthToken,
  OAuth2CredentialPlacement,
  OAuthTokenRefreshable,
} from "./core/auth/oauth2-strategies.js";

export { backfillAllStrategySchema, type BackfillAllStrategy } from "./models/backfill-all-strategy.js";
export { backfillAllStrategy1Schema, type BackfillAllStrategy1 } from "./models/backfill-all-strategy1.js";
export { backfillJobSchema, type BackfillJob } from "./models/backfill-job.js";
export { backfillJob2Schema, type BackfillJob2 } from "./models/backfill-job2.js";
export { bigQueryClusteringSchema, type BigQueryClustering } from "./models/big-query-clustering.js";
export { bigQueryClustering2Schema, type BigQueryClustering2 } from "./models/big-query-clustering2.js";
export {
  bigQueryDestinationConfigSchema,
  type BigQueryDestinationConfig,
} from "./models/big-query-destination-config.js";
export {
  bigQueryDestinationConfig2Schema,
  type BigQueryDestinationConfig2,
} from "./models/big-query-destination-config2.js";
export { bigQueryPartitioningSchema, type BigQueryPartitioning } from "./models/big-query-partitioning.js";
export { bigQueryPartitioning2Schema, type BigQueryPartitioning2 } from "./models/big-query-partitioning2.js";
export { binaryLogParserSchema, type BinaryLogParser } from "./models/binary-log-parser.js";
export { binaryLogParser2Schema, type BinaryLogParser2 } from "./models/binary-log-parser2.js";
export { blmtConfigSchema, type BlmtConfig } from "./models/blmt-config.js";
export { blmtConfig2Schema, type BlmtConfig2 } from "./models/blmt-config2.js";
export { cdcStrategySchema, type CdcStrategy } from "./models/cdc-strategy.js";
export { cdcStrategy2Schema, type CdcStrategy2 } from "./models/cdc-strategy2.js";
export { Compression, compressionSchema } from "./models/compression.js";
export { connectionProfileSchema, type ConnectionProfile } from "./models/connection-profile.js";
export { connectionProfile2Schema, type ConnectionProfile2 } from "./models/connection-profile2.js";
export { customizationRuleSchema, type CustomizationRule } from "./models/customization-rule.js";
export { datasetTemplateSchema, type DatasetTemplate } from "./models/dataset-template.js";
export { datasetTemplate2Schema, type DatasetTemplate2 } from "./models/dataset-template2.js";
export { dataverseProfileSchema, type DataverseProfile } from "./models/dataverse-profile.js";
export { dataverseSourceConfigSchema, type DataverseSourceConfig } from "./models/dataverse-source-config.js";
export {
  dataverseSourceConfig1Schema,
  type DataverseSourceConfig1,
} from "./models/dataverse-source-config1.js";
export { destinationConfigSchema, type DestinationConfig } from "./models/destination-config.js";
export { destinationConfig2Schema, type DestinationConfig2 } from "./models/destination-config2.js";
export {
  discoverConnectionProfileRequestSchema,
  type DiscoverConnectionProfileRequest,
} from "./models/discover-connection-profile-request.js";
export {
  discoverConnectionProfileResponseSchema,
  type DiscoverConnectionProfileResponse,
} from "./models/discover-connection-profile-response.js";
export {
  encryptionAndServerValidationSchema,
  type EncryptionAndServerValidation,
} from "./models/encryption-and-server-validation.js";
export {
  encryptionAndServerValidation2Schema,
  type EncryptionAndServerValidation2,
} from "./models/encryption-and-server-validation2.js";
export { errorSchema, type Error } from "./models/error.js";
export { error1Schema, type Error1 } from "./models/error1.js";
export { error2Schema, type Error2 } from "./models/error2.js";
export { eventFilterSchema, type EventFilter } from "./models/event-filter.js";
export { eventFilter1Schema, type EventFilter1 } from "./models/event-filter1.js";
export { eventFilter3Schema, type EventFilter3 } from "./models/event-filter3.js";
export {
  fetchStaticIpsResponseSchema,
  type FetchStaticIpsResponse,
} from "./models/fetch-static-ips-response.js";
export { FileFormat, fileFormatSchema } from "./models/file-format.js";
export {
  forwardSshTunnelConnectivitySchema,
  type ForwardSshTunnelConnectivity,
} from "./models/forward-ssh-tunnel-connectivity.js";
export {
  forwardSshTunnelConnectivity1Schema,
  type ForwardSshTunnelConnectivity1,
} from "./models/forward-ssh-tunnel-connectivity1.js";
export { gcsDestinationConfigSchema, type GcsDestinationConfig } from "./models/gcs-destination-config.js";
export { gcsDestinationConfig2Schema, type GcsDestinationConfig2 } from "./models/gcs-destination-config2.js";
export { gcsProfileSchema, type GcsProfile } from "./models/gcs-profile.js";
export { googleRpcErrorSchema, type GoogleRpcError } from "./models/google-rpc-error.js";
export { googleRpcErrorErrorSchema, type GoogleRpcErrorError } from "./models/google-rpc-error-error.js";
export { hostAddressSchema, type HostAddress } from "./models/host-address.js";
export {
  ingestionTimePartitionSchema,
  type IngestionTimePartition,
} from "./models/ingestion-time-partition.js";
export {
  ingestionTimePartition2Schema,
  type IngestionTimePartition2,
} from "./models/ingestion-time-partition2.js";
export { integerRangePartitionSchema, type IntegerRangePartition } from "./models/integer-range-partition.js";
export {
  integerRangePartition2Schema,
  type IntegerRangePartition2,
} from "./models/integer-range-partition2.js";
export { jsonFileFormatSchema, type JsonFileFormat } from "./models/json-file-format.js";
export { JsonMode, jsonModeSchema } from "./models/json-mode.js";
export {
  listConnectionProfilesResponseSchema,
  type ListConnectionProfilesResponse,
} from "./models/list-connection-profiles-response.js";
export { listLocationsResponseSchema, type ListLocationsResponse } from "./models/list-locations-response.js";
export {
  listOperationsResponseSchema,
  type ListOperationsResponse,
} from "./models/list-operations-response.js";
export {
  listPrivateConnectionsResponseSchema,
  type ListPrivateConnectionsResponse,
} from "./models/list-private-connections-response.js";
export { listRoutesResponseSchema, type ListRoutesResponse } from "./models/list-routes-response.js";
export {
  listStreamObjectsResponseSchema,
  type ListStreamObjectsResponse,
} from "./models/list-stream-objects-response.js";
export { listStreamsResponseSchema, type ListStreamsResponse } from "./models/list-streams-response.js";
export { locationSchema, type Location } from "./models/location.js";
export { logFileDirectoriesSchema, type LogFileDirectories } from "./models/log-file-directories.js";
export { logFileDirectories2Schema, type LogFileDirectories2 } from "./models/log-file-directories2.js";
export {
  lookupStreamObjectRequestSchema,
  type LookupStreamObjectRequest,
} from "./models/lookup-stream-object-request.js";
export {
  mongodbChangeStreamPositionSchema,
  type MongodbChangeStreamPosition,
} from "./models/mongodb-change-stream-position.js";
export {
  mongodbChangeStreamPosition2Schema,
  type MongodbChangeStreamPosition2,
} from "./models/mongodb-change-stream-position2.js";
export { mongodbClusterSchema, type MongodbCluster } from "./models/mongodb-cluster.js";
export { mongodbCluster1Schema, type MongodbCluster1 } from "./models/mongodb-cluster1.js";
export { mongodbCluster3Schema, type MongodbCluster3 } from "./models/mongodb-cluster3.js";
export { mongodbCluster4Schema, type MongodbCluster4 } from "./models/mongodb-cluster4.js";
export { mongodbCluster5Schema, type MongodbCluster5 } from "./models/mongodb-cluster5.js";
export { mongodbCluster6Schema, type MongodbCluster6 } from "./models/mongodb-cluster6.js";
export { mongodbCollectionSchema, type MongodbCollection } from "./models/mongodb-collection.js";
export { mongodbDatabaseSchema, type MongodbDatabase } from "./models/mongodb-database.js";
export { mongodbFieldSchema, type MongodbField } from "./models/mongodb-field.js";
export {
  mongodbObjectIdentifierSchema,
  type MongodbObjectIdentifier,
} from "./models/mongodb-object-identifier.js";
export { mongodbProfileSchema, type MongodbProfile } from "./models/mongodb-profile.js";
export { mongodbSourceConfigSchema, type MongodbSourceConfig } from "./models/mongodb-source-config.js";
export { mongodbSourceConfig2Schema, type MongodbSourceConfig2 } from "./models/mongodb-source-config2.js";
export { mongodbSslConfigSchema, type MongodbSslConfig } from "./models/mongodb-ssl-config.js";
export { mongodbSslConfig2Schema, type MongodbSslConfig2 } from "./models/mongodb-ssl-config2.js";
export { mysqlColumnSchema, type MysqlColumn } from "./models/mysql-column.js";
export { mysqlDatabaseSchema, type MysqlDatabase } from "./models/mysql-database.js";
export { mysqlGtidPositionSchema, type MysqlGtidPosition } from "./models/mysql-gtid-position.js";
export { mysqlGtidPosition2Schema, type MysqlGtidPosition2 } from "./models/mysql-gtid-position2.js";
export { mysqlLogPositionSchema, type MysqlLogPosition } from "./models/mysql-log-position.js";
export { mysqlLogPosition1Schema, type MysqlLogPosition1 } from "./models/mysql-log-position1.js";
export { mysqlObjectIdentifierSchema, type MysqlObjectIdentifier } from "./models/mysql-object-identifier.js";
export { mysqlProfileSchema, type MysqlProfile } from "./models/mysql-profile.js";
export { mysqlRdbmsSchema, type MysqlRdbms } from "./models/mysql-rdbms.js";
export { mysqlRdbms1Schema, type MysqlRdbms1 } from "./models/mysql-rdbms1.js";
export { mysqlRdbms2Schema, type MysqlRdbms2 } from "./models/mysql-rdbms2.js";
export { mysqlRdbms3Schema, type MysqlRdbms3 } from "./models/mysql-rdbms3.js";
export { mysqlRdbms4Schema, type MysqlRdbms4 } from "./models/mysql-rdbms4.js";
export { mysqlRdbms6Schema, type MysqlRdbms6 } from "./models/mysql-rdbms6.js";
export { mysqlSourceConfigSchema, type MysqlSourceConfig } from "./models/mysql-source-config.js";
export { mysqlSourceConfig1Schema, type MysqlSourceConfig1 } from "./models/mysql-source-config1.js";
export { mysqlSslConfigSchema, type MysqlSslConfig } from "./models/mysql-ssl-config.js";
export { mysqlSslConfig1Schema, type MysqlSslConfig1 } from "./models/mysql-ssl-config1.js";
export { mysqlTableSchema, type MysqlTable } from "./models/mysql-table.js";
export {
  oauth2ClientCredentialsSchema,
  type Oauth2ClientCredentials,
} from "./models/oauth2-client-credentials.js";
export {
  oauth2ClientCredentials1Schema,
  type Oauth2ClientCredentials1,
} from "./models/oauth2-client-credentials1.js";
export {
  oauthClientCredentialsSchema,
  type OauthClientCredentials,
} from "./models/oauth-client-credentials.js";
export {
  oauthClientCredentials1Schema,
  type OauthClientCredentials1,
} from "./models/oauth-client-credentials1.js";
export {
  oauthClientCredentials2Schema,
  type OauthClientCredentials2,
} from "./models/oauth-client-credentials2.js";
export {
  oauthClientCredentials3Schema,
  type OauthClientCredentials3,
} from "./models/oauth-client-credentials3.js";
export {
  oauthClientCredentials5Schema,
  type OauthClientCredentials5,
} from "./models/oauth-client-credentials5.js";
export {
  oauthRefreshTokenCredentialsSchema,
  type OauthRefreshTokenCredentials,
} from "./models/oauth-refresh-token-credentials.js";
export {
  oauthRefreshTokenCredentials2Schema,
  type OauthRefreshTokenCredentials2,
} from "./models/oauth-refresh-token-credentials2.js";
export { objectFilterSchema, type ObjectFilter } from "./models/object-filter.js";
export { objectFilter1Schema, type ObjectFilter1 } from "./models/object-filter1.js";
export { operationSchema, type Operation } from "./models/operation.js";
export { oracleAsmConfigSchema, type OracleAsmConfig } from "./models/oracle-asm-config.js";
export { oracleAsmConfig2Schema, type OracleAsmConfig2 } from "./models/oracle-asm-config2.js";
export { oracleColumnSchema, type OracleColumn } from "./models/oracle-column.js";
export {
  oracleObjectIdentifierSchema,
  type OracleObjectIdentifier,
} from "./models/oracle-object-identifier.js";
export { oracleProfileSchema, type OracleProfile } from "./models/oracle-profile.js";
export { oracleRdbmsSchema, type OracleRdbms } from "./models/oracle-rdbms.js";
export { oracleRdbms1Schema, type OracleRdbms1 } from "./models/oracle-rdbms1.js";
export { oracleRdbms2Schema, type OracleRdbms2 } from "./models/oracle-rdbms2.js";
export { oracleRdbms3Schema, type OracleRdbms3 } from "./models/oracle-rdbms3.js";
export { oracleRdbms4Schema, type OracleRdbms4 } from "./models/oracle-rdbms4.js";
export { oracleRdbms6Schema, type OracleRdbms6 } from "./models/oracle-rdbms6.js";
export { oracleSchemaSchema, type OracleSchema } from "./models/oracle-schema.js";
export { oracleScnPositionSchema, type OracleScnPosition } from "./models/oracle-scn-position.js";
export { oracleScnPosition2Schema, type OracleScnPosition2 } from "./models/oracle-scn-position2.js";
export { oracleSourceConfigSchema, type OracleSourceConfig } from "./models/oracle-source-config.js";
export { oracleSourceConfig1Schema, type OracleSourceConfig1 } from "./models/oracle-source-config1.js";
export { oracleSslConfigSchema, type OracleSslConfig } from "./models/oracle-ssl-config.js";
export { oracleSslConfig1Schema, type OracleSslConfig1 } from "./models/oracle-ssl-config1.js";
export { oracleTableSchema, type OracleTable } from "./models/oracle-table.js";
export {
  PartitioningTimeGranularity,
  partitioningTimeGranularitySchema,
} from "./models/partitioning-time-granularity.js";
export {
  PartitioningTimeGranularity1,
  partitioningTimeGranularity1Schema,
} from "./models/partitioning-time-granularity1.js";
export { postgresqlColumnSchema, type PostgresqlColumn } from "./models/postgresql-column.js";
export {
  postgresqlObjectIdentifierSchema,
  type PostgresqlObjectIdentifier,
} from "./models/postgresql-object-identifier.js";
export { postgresqlProfileSchema, type PostgresqlProfile } from "./models/postgresql-profile.js";
export { postgresqlRdbmsSchema, type PostgresqlRdbms } from "./models/postgresql-rdbms.js";
export { postgresqlRdbms1Schema, type PostgresqlRdbms1 } from "./models/postgresql-rdbms1.js";
export { postgresqlRdbms2Schema, type PostgresqlRdbms2 } from "./models/postgresql-rdbms2.js";
export { postgresqlRdbms3Schema, type PostgresqlRdbms3 } from "./models/postgresql-rdbms3.js";
export { postgresqlRdbms4Schema, type PostgresqlRdbms4 } from "./models/postgresql-rdbms4.js";
export { postgresqlRdbms6Schema, type PostgresqlRdbms6 } from "./models/postgresql-rdbms6.js";
export { postgresqlSchemaSchema, type PostgresqlSchema } from "./models/postgresql-schema.js";
export {
  postgresqlSourceConfigSchema,
  type PostgresqlSourceConfig,
} from "./models/postgresql-source-config.js";
export {
  postgresqlSourceConfig2Schema,
  type PostgresqlSourceConfig2,
} from "./models/postgresql-source-config2.js";
export { postgresqlSslConfigSchema, type PostgresqlSslConfig } from "./models/postgresql-ssl-config.js";
export { postgresqlSslConfig2Schema, type PostgresqlSslConfig2 } from "./models/postgresql-ssl-config2.js";
export { postgresqlTableSchema, type PostgresqlTable } from "./models/postgresql-table.js";
export { privateConnectionSchema, type PrivateConnection } from "./models/private-connection.js";
export { privateConnectivitySchema, type PrivateConnectivity } from "./models/private-connectivity.js";
export { privateConnectivity2Schema, type PrivateConnectivity2 } from "./models/private-connectivity2.js";
export { pscInterfaceConfigSchema, type PscInterfaceConfig } from "./models/psc-interface-config.js";
export { pscInterfaceConfig1Schema, type PscInterfaceConfig1 } from "./models/psc-interface-config1.js";
export { routeSchema, type Route } from "./models/route.js";
export { ruleSetSchema, type RuleSet } from "./models/rule-set.js";
export { runStreamRequestSchema, type RunStreamRequest } from "./models/run-stream-request.js";
export { salesforceFieldSchema, type SalesforceField } from "./models/salesforce-field.js";
export {
  salesforceMarketingCloudProfileSchema,
  type SalesforceMarketingCloudProfile,
} from "./models/salesforce-marketing-cloud-profile.js";
export {
  salesforceMarketingCloudSourceConfigSchema,
  type SalesforceMarketingCloudSourceConfig,
} from "./models/salesforce-marketing-cloud-source-config.js";
export {
  salesforceMarketingCloudSourceConfig2Schema,
  type SalesforceMarketingCloudSourceConfig2,
} from "./models/salesforce-marketing-cloud-source-config2.js";
export { salesforceObjectSchema, type SalesforceObject } from "./models/salesforce-object.js";
export {
  salesforceObjectIdentifierSchema,
  type SalesforceObjectIdentifier,
} from "./models/salesforce-object-identifier.js";
export { salesforceOrgSchema, type SalesforceOrg } from "./models/salesforce-org.js";
export { salesforceOrg1Schema, type SalesforceOrg1 } from "./models/salesforce-org1.js";
export { salesforceOrg2Schema, type SalesforceOrg2 } from "./models/salesforce-org2.js";
export { salesforceOrg3Schema, type SalesforceOrg3 } from "./models/salesforce-org3.js";
export { salesforceOrg4Schema, type SalesforceOrg4 } from "./models/salesforce-org4.js";
export { salesforceOrg5Schema, type SalesforceOrg5 } from "./models/salesforce-org5.js";
export { salesforceProfileSchema, type SalesforceProfile } from "./models/salesforce-profile.js";
export {
  salesforceSourceConfigSchema,
  type SalesforceSourceConfig,
} from "./models/salesforce-source-config.js";
export {
  salesforceSourceConfig1Schema,
  type SalesforceSourceConfig1,
} from "./models/salesforce-source-config1.js";
export { SchemaFileFormat, schemaFileFormatSchema } from "./models/schema-file-format.js";
export { secretSchema, type Secret } from "./models/secret.js";
export { secret1Schema, type Secret1 } from "./models/secret1.js";
export { secret3Schema, type Secret3 } from "./models/secret3.js";
export { secret4Schema, type Secret4 } from "./models/secret4.js";
export {
  serverAndClientVerificationSchema,
  type ServerAndClientVerification,
} from "./models/server-and-client-verification.js";
export {
  serverAndClientVerification2Schema,
  type ServerAndClientVerification2,
} from "./models/server-and-client-verification2.js";
export { serverVerificationSchema, type ServerVerification } from "./models/server-verification.js";
export { serverVerification2Schema, type ServerVerification2 } from "./models/server-verification2.js";
export { serviceNowProfileSchema, type ServiceNowProfile } from "./models/service-now-profile.js";
export {
  serviceNowSourceConfigSchema,
  type ServiceNowSourceConfig,
} from "./models/service-now-source-config.js";
export {
  serviceNowSourceConfig2Schema,
  type ServiceNowSourceConfig2,
} from "./models/service-now-source-config2.js";
export { singleTargetDatasetSchema, type SingleTargetDataset } from "./models/single-target-dataset.js";
export { singleTargetDataset2Schema, type SingleTargetDataset2 } from "./models/single-target-dataset2.js";
export { sourceCatalogSchema, type SourceCatalog } from "./models/source-catalog.js";
export { sourceCatalog1Schema, type SourceCatalog1 } from "./models/source-catalog1.js";
export { sourceCatalog2Schema, type SourceCatalog2 } from "./models/source-catalog2.js";
export { sourceCatalog3Schema, type SourceCatalog3 } from "./models/source-catalog3.js";
export { sourceCatalog4Schema, type SourceCatalog4 } from "./models/source-catalog4.js";
export { sourceCatalog5Schema, type SourceCatalog5 } from "./models/source-catalog5.js";
export { sourceConfigSchema, type SourceConfig } from "./models/source-config.js";
export { sourceConfig2Schema, type SourceConfig2 } from "./models/source-config2.js";
export {
  sourceHierarchyDatasetsSchema,
  type SourceHierarchyDatasets,
} from "./models/source-hierarchy-datasets.js";
export {
  sourceHierarchyDatasets1Schema,
  type SourceHierarchyDatasets1,
} from "./models/source-hierarchy-datasets1.js";
export { sourceObjectSchema, type SourceObject } from "./models/source-object.js";
export {
  sourceObjectIdentifierSchema,
  type SourceObjectIdentifier,
} from "./models/source-object-identifier.js";
export {
  sourceObjectIdentifier1Schema,
  type SourceObjectIdentifier1,
} from "./models/source-object-identifier1.js";
export {
  sourceObjectIdentifier2Schema,
  type SourceObjectIdentifier2,
} from "./models/source-object-identifier2.js";
export {
  sourceObjectIdentifier4Schema,
  type SourceObjectIdentifier4,
} from "./models/source-object-identifier4.js";
export { sourcePropertySchema, type SourceProperty } from "./models/source-property.js";
export {
  spannerChangeStreamPositionSchema,
  type SpannerChangeStreamPosition,
} from "./models/spanner-change-stream-position.js";
export {
  spannerChangeStreamPosition2Schema,
  type SpannerChangeStreamPosition2,
} from "./models/spanner-change-stream-position2.js";
export { spannerColumnSchema, type SpannerColumn } from "./models/spanner-column.js";
export { spannerDatabaseSchema, type SpannerDatabase } from "./models/spanner-database.js";
export { spannerDatabase1Schema, type SpannerDatabase1 } from "./models/spanner-database1.js";
export { spannerDatabase2Schema, type SpannerDatabase2 } from "./models/spanner-database2.js";
export { spannerDatabase3Schema, type SpannerDatabase3 } from "./models/spanner-database3.js";
export { spannerDatabase4Schema, type SpannerDatabase4 } from "./models/spanner-database4.js";
export { spannerDatabase6Schema, type SpannerDatabase6 } from "./models/spanner-database6.js";
export {
  spannerObjectIdentifierSchema,
  type SpannerObjectIdentifier,
} from "./models/spanner-object-identifier.js";
export { spannerProfileSchema, type SpannerProfile } from "./models/spanner-profile.js";
export { SpannerRpcPriority, spannerRpcPrioritySchema } from "./models/spanner-rpc-priority.js";
export { spannerSchemaSchema, type SpannerSchema } from "./models/spanner-schema.js";
export { spannerSourceConfigSchema, type SpannerSourceConfig } from "./models/spanner-source-config.js";
export { spannerSourceConfig2Schema, type SpannerSourceConfig2 } from "./models/spanner-source-config2.js";
export { spannerTableSchema, type SpannerTable } from "./models/spanner-table.js";
export { specificStartPositionSchema, type SpecificStartPosition } from "./models/specific-start-position.js";
export {
  specificStartPosition2Schema,
  type SpecificStartPosition2,
} from "./models/specific-start-position2.js";
export {
  sqlServerChangeTablesSchema,
  type SqlServerChangeTables,
} from "./models/sql-server-change-tables.js";
export {
  sqlServerChangeTables1Schema,
  type SqlServerChangeTables1,
} from "./models/sql-server-change-tables1.js";
export { sqlServerColumnSchema, type SqlServerColumn } from "./models/sql-server-column.js";
export { sqlServerDdlConfigSchema, type SqlServerDdlConfig } from "./models/sql-server-ddl-config.js";
export { sqlServerDdlConfig2Schema, type SqlServerDdlConfig2 } from "./models/sql-server-ddl-config2.js";
export { sqlServerLsnPositionSchema, type SqlServerLsnPosition } from "./models/sql-server-lsn-position.js";
export {
  sqlServerLsnPosition1Schema,
  type SqlServerLsnPosition1,
} from "./models/sql-server-lsn-position1.js";
export {
  sqlServerObjectIdentifierSchema,
  type SqlServerObjectIdentifier,
} from "./models/sql-server-object-identifier.js";
export { sqlServerProfileSchema, type SqlServerProfile } from "./models/sql-server-profile.js";
export { sqlServerRdbmsSchema, type SqlServerRdbms } from "./models/sql-server-rdbms.js";
export { sqlServerRdbms1Schema, type SqlServerRdbms1 } from "./models/sql-server-rdbms1.js";
export { sqlServerRdbms2Schema, type SqlServerRdbms2 } from "./models/sql-server-rdbms2.js";
export { sqlServerRdbms3Schema, type SqlServerRdbms3 } from "./models/sql-server-rdbms3.js";
export { sqlServerRdbms4Schema, type SqlServerRdbms4 } from "./models/sql-server-rdbms4.js";
export { sqlServerRdbms6Schema, type SqlServerRdbms6 } from "./models/sql-server-rdbms6.js";
export { sqlServerSchemaSchema, type SqlServerSchema } from "./models/sql-server-schema.js";
export {
  sqlServerSourceConfigSchema,
  type SqlServerSourceConfig,
} from "./models/sql-server-source-config.js";
export {
  sqlServerSourceConfig1Schema,
  type SqlServerSourceConfig1,
} from "./models/sql-server-source-config1.js";
export { sqlServerSslConfigSchema, type SqlServerSslConfig } from "./models/sql-server-ssl-config.js";
export { sqlServerSslConfig2Schema, type SqlServerSslConfig2 } from "./models/sql-server-ssl-config2.js";
export { sqlServerTableSchema, type SqlServerTable } from "./models/sql-server-table.js";
export {
  standardConnectionFormatSchema,
  type StandardConnectionFormat,
} from "./models/standard-connection-format.js";
export {
  startBackfillJobRequestSchema,
  type StartBackfillJobRequest,
} from "./models/start-backfill-job-request.js";
export {
  startBackfillJobResponseSchema,
  type StartBackfillJobResponse,
} from "./models/start-backfill-job-response.js";
export { State, stateSchema } from "./models/state.js";
export { State1, state1Schema } from "./models/state1.js";
export { State2, state2Schema } from "./models/state2.js";
export { statusSchema, type Status } from "./models/status.js";
export { status2Schema, type Status2 } from "./models/status2.js";
export {
  stopBackfillJobResponseSchema,
  type StopBackfillJobResponse,
} from "./models/stop-backfill-job-response.js";
export { streamSchema, type Stream } from "./models/stream.js";
export { streamObjectSchema, type StreamObject } from "./models/stream-object.js";
export { streamObject2Schema, type StreamObject2 } from "./models/stream-object2.js";
export { streamObject3Schema, type StreamObject3 } from "./models/stream-object3.js";
export { TableFormat, tableFormatSchema } from "./models/table-format.js";
export { timeUnitPartitionSchema, type TimeUnitPartition } from "./models/time-unit-partition.js";
export { timeUnitPartition2Schema, type TimeUnitPartition2 } from "./models/time-unit-partition2.js";
export { Trigger, triggerSchema } from "./models/trigger.js";
export { userCredentialsSchema, type UserCredentials } from "./models/user-credentials.js";
export { userCredentials2Schema, type UserCredentials2 } from "./models/user-credentials2.js";
export {
  userPasswordCredentialsSchema,
  type UserPasswordCredentials,
} from "./models/user-password-credentials.js";
export {
  userPasswordCredentials2Schema,
  type UserPasswordCredentials2,
} from "./models/user-password-credentials2.js";
export { vpcPeeringConfigSchema, type VpcPeeringConfig } from "./models/vpc-peering-config.js";
export { vpcPeeringConfig2Schema, type VpcPeeringConfig2 } from "./models/vpc-peering-config2.js";
export { workdayProfileSchema, type WorkdayProfile } from "./models/workday-profile.js";
export { workdayProfile1Schema, type WorkdayProfile1 } from "./models/workday-profile1.js";
export { workdaySourceConfigSchema, type WorkdaySourceConfig } from "./models/workday-source-config.js";
export { workdaySourceConfig2Schema, type WorkdaySourceConfig2 } from "./models/workday-source-config2.js";

export {
  CoreError as GoogleCloudDatastreamError,
  ResponseError,
  DecodeError,
  EncodeError,
  ConnectionError,
  TimeoutError,
  AuthError,
  PaginationError,
  ConfigurationError,
} from "./core/errors.js";
export { ApiError } from "./core/api-error.js";
export { SchemaError } from "./core/validation/schema-error.js";
export {
  defaultLoggingOptions,
  type LoggingOptions,
  type RequestLoggingOptions,
  type Logger,
  type LogDetails,
  type HttpRequestDetails,
  type RequestHeadersDetails,
  type RequestBodyDetails,
  type HttpResponseDetails,
  type ResponseHeadersDetails,
  type HttpRetryingDetails,
  type HttpFailedDetails,
  type LogLevel,
} from "./core/logging.js";
export type { ApiPromise, ApiResult } from "./core/api-promise.js";
export type { Pageable, PageableApiResult } from "./core/pagination/pageable.js";
export type { HttpMethod, RequestOptions } from "./core/api-request.js";
export type { RetryOptions, RequestRetryOptions, RetryAttempt, RetryReason } from "./core/retry.js";
export type { HookOptions, BeforeRequestHook, AfterResponseHook, HookContext } from "./core/hooks.js";
export type { BinaryContent, BinaryData, BinaryErrorContent, FileData, FileInput } from "./core/binary.js";
export type { ErrorKind } from "./core/errors.js";
export type { Declared, Undeclared } from "./core/api-error.js";
export type { Schema, EnumSchema, Encoded, ValidationResult, JsonValue } from "./core/validation/schema.js";
