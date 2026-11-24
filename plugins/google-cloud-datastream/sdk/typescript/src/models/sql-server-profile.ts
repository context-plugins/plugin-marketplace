import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sqlServerSslConfig2Schema, type SqlServerSslConfig2 } from "./sql-server-ssl-config2.js";

/** Profile for connecting to a SQLServer source. */
export type SqlServerProfile = {
  /**
   * Optional. A reference to a Secret Manager resource name storing the SQLServer connection
   * password. Mutually exclusive with the `password` field.
   */
  secretManagerStoredPassword?: string;
  /** Required. Username for the SQLServer connection. */
  username?: string;
  /**
   * Optional. Password for the SQLServer connection. Mutually exclusive with the
   * `secret_manager_stored_password` field.
   */
  password?: string;
  /** Required. Hostname for the SQLServer connection. */
  hostname?: string;
  /** Optional. SSL configuration for the SQLServer connection. */
  sslConfig?: SqlServerSslConfig2;
  /** Port for the SQLServer connection, default value is 1433. */
  port?: number;
  /** Required. Database for the SQLServer connection. */
  database?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqlServerProfileSchema: Schema<SqlServerProfile> = s.object<SqlServerProfile>(
  {
    secretManagerStoredPassword: s.optional(s.string()),
    username: s.optional(s.string()),
    password: s.optional(s.string()),
    hostname: s.optional(s.string()),
    sslConfig: s.optional(s.lazy(() => sqlServerSslConfig2Schema)),
    port: s.optional(s.int()),
    database: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
