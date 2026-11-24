import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rdsHttpEndpointConfigSchema, type RdsHttpEndpointConfig } from "./rds-http-endpoint-config.js";
import {
  relationalDatabaseSourceTypeSchema,
  type RelationalDatabaseSourceType,
} from "./relational-database-source-type.js";

export type RelationalDatabaseDataSourceConfig = {
  /**
   * Source type for the relational database. RDS_HTTP_ENDPOINT: The relational database source type
   * is an Amazon Relational Database Service (Amazon RDS) HTTP endpoint.
   */
  relationalDatabaseSourceType?: RelationalDatabaseSourceType;
  rdsHttpEndpointConfig?: RdsHttpEndpointConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const relationalDatabaseDataSourceConfigSchema: Schema<RelationalDatabaseDataSourceConfig> =
  s.object<RelationalDatabaseDataSourceConfig>(
    {
      relationalDatabaseSourceType: s.optional(s.lazy(() => relationalDatabaseSourceTypeSchema)),
      rdsHttpEndpointConfig: s.optional(s.lazy(() => rdsHttpEndpointConfigSchema)),
    },
    { additionalProperties: s.json() },
  );
