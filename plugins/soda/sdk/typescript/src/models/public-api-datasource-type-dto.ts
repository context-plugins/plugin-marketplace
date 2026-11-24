import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PublicApiDatasourceTypeDto = {
  Bigquery: "bigquery",
  Mysql: "mysql",
  Postgres: "postgres",
  Snowflake: "snowflake",
  Dask: "dask",
  Spark: "spark",
  Sparkdf: "sparkdf",
  Redshift: "redshift",
  Duckdb: "duckdb",
  Presto: "presto",
  Oracle: "oracle",
  Athena: "athena",
  Trino: "trino",
  Dremio: "dremio",
  Vertica: "vertica",
  Denodo: "denodo",
  Db2: "db2",
  Db2Z: "db2z",
  Sqlserver: "sqlserver",
  Databricks: "databricks",
  Synapse: "synapse",
  Fabric: "fabric",
  Salesforce: "salesforce",
} as const;
export type PublicApiDatasourceTypeDto =
  | (typeof PublicApiDatasourceTypeDto)[keyof typeof PublicApiDatasourceTypeDto]
  | (string & {});

export const publicApiDatasourceTypeDtoSchema: EnumSchema<PublicApiDatasourceTypeDto> =
  s.enumOf<PublicApiDatasourceTypeDto>(PublicApiDatasourceTypeDto);
