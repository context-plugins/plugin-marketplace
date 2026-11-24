import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RdsHttpEndpointConfig = {
  /** Amazon Web Services Region for Amazon RDS HTTP endpoint. */
  awsRegion?: string;
  /** Amazon RDS cluster Amazon Resource Name (ARN). */
  dbClusterIdentifier?: string;
  /** Logical database name. */
  databaseName?: string;
  /** Logical schema name. */
  schema?: string;
  /** Amazon Web Services secret store Amazon Resource Name (ARN) for database credentials. */
  awsSecretStoreArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rdsHttpEndpointConfigSchema: Schema<RdsHttpEndpointConfig> = s.object<RdsHttpEndpointConfig>(
  {
    awsRegion: s.optional(s.string()),
    dbClusterIdentifier: s.optional(s.string()),
    databaseName: s.optional(s.string()),
    schema: s.optional(s.string()),
    awsSecretStoreArn: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
