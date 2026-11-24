import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  serverAndClientVerification2Schema,
  type ServerAndClientVerification2,
} from "./server-and-client-verification2.js";
import { serverVerification2Schema, type ServerVerification2 } from "./server-verification2.js";

/** PostgreSQL SSL configuration information. */
export type PostgresqlSslConfig = {
  /**
   * If this field is set, the communication will be encrypted with TLS encryption and both the
   * server identity and the client identity will be authenticated.
   */
  serverAndClientVerification?: ServerAndClientVerification2;
  /**
   * If this field is set, the communication will be encrypted with TLS encryption and the server
   * identity will be authenticated.
   */
  serverVerification?: ServerVerification2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postgresqlSslConfigSchema: Schema<PostgresqlSslConfig> = s.object<PostgresqlSslConfig>(
  {
    serverAndClientVerification: s.optional(s.lazy(() => serverAndClientVerification2Schema)),
    serverVerification: s.optional(s.lazy(() => serverVerification2Schema)),
  },
  { additionalProperties: s.json() },
);
