import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mysqlSslConfig1Schema, type MysqlSslConfig1 } from "./mysql-ssl-config1.js";

/** Profile for connecting to a MySQL source. */
export type MysqlProfile = {
  /**
   * Optional. A reference to a Secret Manager resource name storing the MySQL connection password.
   * Mutually exclusive with the `password` field.
   */
  secretManagerStoredPassword?: string;
  /** Required. Hostname for the MySQL connection. */
  hostname?: string;
  /** SSL configuration for the MySQL connection. */
  sslConfig?: MysqlSslConfig1;
  /** Required. Username for the MySQL connection. */
  username?: string;
  /**
   * Optional. Input only. Password for the MySQL connection. Mutually exclusive with the
   * `secret_manager_stored_password` field.
   */
  password?: string;
  /** Port for the MySQL connection, default value is 3306. */
  port?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mysqlProfileSchema: Schema<MysqlProfile> = s.object<MysqlProfile>(
  {
    secretManagerStoredPassword: s.optional(s.string()),
    hostname: s.optional(s.string()),
    sslConfig: s.optional(s.lazy(() => mysqlSslConfig1Schema)),
    username: s.optional(s.string()),
    password: s.optional(s.string()),
    port: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
