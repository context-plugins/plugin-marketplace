import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  serverAndClientVerification2Schema,
  type ServerAndClientVerification2,
} from "./server-and-client-verification2.js";
import { serverVerification2Schema, type ServerVerification2 } from "./server-verification2.js";

/**
 * Optional. SSL configuration for the PostgreSQL connection. In case PostgresqlSslConfig is not
 * set, the connection will use the default SSL mode, which is `prefer` (i.e. this mode will only
 * use encryption if enabled from database side, otherwise will use unencrypted communication)
 */
export type PostgresqlSslConfig2 = {
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

export const postgresqlSslConfig2Schema: Schema<PostgresqlSslConfig2> = s.object<PostgresqlSslConfig2>(
  {
    serverAndClientVerification: s.optional(s.lazy(() => serverAndClientVerification2Schema)),
    serverVerification: s.optional(s.lazy(() => serverVerification2Schema)),
  },
  { additionalProperties: s.json() },
);
