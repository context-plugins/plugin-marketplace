import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deltaSyncConfigSchema, type DeltaSyncConfig } from "./delta-sync-config.js";

export type DynamodbDataSourceConfig = {
  /** The table name. */
  tableName: string;
  /** The Amazon Web Services Region. */
  awsRegion: string;
  /** Set to TRUE to use Amazon Cognito credentials with this data source. */
  useCallerCredentials?: boolean;
  deltaSyncConfig?: DeltaSyncConfig;
  /** Set to TRUE to use Conflict Detection and Resolution with this data source. */
  versioned?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dynamodbDataSourceConfigSchema: Schema<DynamodbDataSourceConfig> =
  s.object<DynamodbDataSourceConfig>(
    {
      tableName: s.string(),
      awsRegion: s.string(),
      useCallerCredentials: s.optional(s.boolean()),
      deltaSyncConfig: s.optional(s.lazy(() => deltaSyncConfigSchema)),
      versioned: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
