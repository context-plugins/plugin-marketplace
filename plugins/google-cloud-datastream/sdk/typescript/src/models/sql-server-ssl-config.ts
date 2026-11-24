import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  encryptionAndServerValidation2Schema,
  type EncryptionAndServerValidation2,
} from "./encryption-and-server-validation2.js";

/** SQL Server SSL configuration information. */
export type SqlServerSslConfig = {
  /** If set, Datastream will enforce encryption and authenticate server identity. */
  encryptionAndServerValidation?: EncryptionAndServerValidation2;
  /**
   * If set, Datastream will not enforce encryption. If the DB server mandates encryption, then
   * connection will be encrypted but server identity will not be authenticated.
   */
  encryptionNotEnforced?: Record<string, unknown>;
  /**
   * If set, Datastream will enforce encryption without authenticating server identity. Server
   * certificates will be trusted by default.
   */
  basicEncryption?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqlServerSslConfigSchema: Schema<SqlServerSslConfig> = s.object<SqlServerSslConfig>(
  {
    encryptionAndServerValidation: s.optional(s.lazy(() => encryptionAndServerValidation2Schema)),
    encryptionNotEnforced: s.optional(s.record(s.string(), s.unknown())),
    basicEncryption: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
