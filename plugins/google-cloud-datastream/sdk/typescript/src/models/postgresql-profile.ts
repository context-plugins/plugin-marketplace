import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postgresqlSslConfig2Schema, type PostgresqlSslConfig2 } from "./postgresql-ssl-config2.js";

/** Profile for connecting to a PostgreSQL source. */
export type PostgresqlProfile = {
  /**
   * Optional. SSL configuration for the PostgreSQL connection. In case PostgresqlSslConfig is not
   * set, the connection will use the default SSL mode, which is `prefer` (i.e. this mode will only
   * use encryption if enabled from database side, otherwise will use unencrypted communication)
   */
  sslConfig?: PostgresqlSslConfig2;
  /** Required. Hostname for the PostgreSQL connection. */
  hostname?: string;
  /** Required. Database for the PostgreSQL connection. */
  database?: string;
  /**
   * Optional. A reference to a Secret Manager resource name storing the PostgreSQL connection
   * password. Mutually exclusive with the `password` field.
   */
  secretManagerStoredPassword?: string;
  /** Port for the PostgreSQL connection, default value is 5432. */
  port?: number;
  /** Required. Username for the PostgreSQL connection. */
  username?: string;
  /**
   * Optional. Password for the PostgreSQL connection. Mutually exclusive with the
   * `secret_manager_stored_password` field.
   */
  password?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postgresqlProfileSchema: Schema<PostgresqlProfile> = s.object<PostgresqlProfile>(
  {
    sslConfig: s.optional(s.lazy(() => postgresqlSslConfig2Schema)),
    hostname: s.optional(s.string()),
    database: s.optional(s.string()),
    secretManagerStoredPassword: s.optional(s.string()),
    port: s.optional(s.int()),
    username: s.optional(s.string()),
    password: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
