import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oracleAsmConfig2Schema, type OracleAsmConfig2 } from "./oracle-asm-config2.js";
import { oracleSslConfig1Schema, type OracleSslConfig1 } from "./oracle-ssl-config1.js";

/** Profile for connecting to an Oracle source. */
export type OracleProfile = {
  /** Required. Hostname for the Oracle connection. */
  hostname?: string;
  /**
   * Optional. A reference to a Secret Manager resource name storing the Oracle connection password.
   * Mutually exclusive with the `password` field.
   */
  secretManagerStoredPassword?: string;
  /** Port for the Oracle connection, default value is 1521. */
  port?: number;
  /** Required. Database for the Oracle connection. */
  databaseService?: string;
  /** Optional. Configuration for Oracle ASM connection. */
  oracleAsmConfig?: OracleAsmConfig2;
  /** Connection string attributes */
  connectionAttributes?: Record<string, string>;
  /** Required. Username for the Oracle connection. */
  username?: string;
  /**
   * Optional. Password for the Oracle connection. Mutually exclusive with the
   * `secret_manager_stored_password` field.
   */
  password?: string;
  /** Optional. SSL configuration for the Oracle connection. */
  oracleSslConfig?: OracleSslConfig1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oracleProfileSchema: Schema<OracleProfile> = s.object<OracleProfile>(
  {
    hostname: s.optional(s.string()),
    secretManagerStoredPassword: s.optional(s.string()),
    port: s.optional(s.int()),
    databaseService: s.optional(s.string()),
    oracleAsmConfig: s.optional(s.lazy(() => oracleAsmConfig2Schema)),
    connectionAttributes: s.optional(s.record(s.string(), s.string())),
    username: s.optional(s.string()),
    password: s.optional(s.string()),
    oracleSslConfig: s.optional(s.lazy(() => oracleSslConfig1Schema)),
  },
  { additionalProperties: s.json() },
);
