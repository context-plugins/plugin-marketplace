import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oracleSslConfig1Schema, type OracleSslConfig1 } from "./oracle-ssl-config1.js";

/** Configuration for Oracle Automatic Storage Management (ASM) connection. */
export type OracleAsmConfig = {
  /** Required. Port for the Oracle ASM connection. */
  port?: number;
  /**
   * Optional. A reference to a Secret Manager resource name storing the Oracle ASM connection
   * password. Mutually exclusive with the `password` field.
   */
  secretManagerStoredPassword?: string;
  /** Required. Username for the Oracle ASM connection. */
  username?: string;
  /**
   * Optional. Password for the Oracle ASM connection. Mutually exclusive with the
   * `secret_manager_stored_password` field.
   */
  password?: string;
  /** Required. Hostname for the Oracle ASM connection. */
  hostname?: string;
  /** Optional. SSL configuration for the Oracle connection. */
  oracleSslConfig?: OracleSslConfig1;
  /** Required. ASM service name for the Oracle ASM connection. */
  asmService?: string;
  /** Optional. Connection string attributes */
  connectionAttributes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oracleAsmConfigSchema: Schema<OracleAsmConfig> = s.object<OracleAsmConfig>(
  {
    port: s.optional(s.int()),
    secretManagerStoredPassword: s.optional(s.string()),
    username: s.optional(s.string()),
    password: s.optional(s.string()),
    hostname: s.optional(s.string()),
    oracleSslConfig: s.optional(s.lazy(() => oracleSslConfig1Schema)),
    asmService: s.optional(s.string()),
    connectionAttributes: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
