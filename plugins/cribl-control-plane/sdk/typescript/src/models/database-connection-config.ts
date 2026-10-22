import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  databaseConnectionAuthType1Schema,
  type DatabaseConnectionAuthType1,
} from "./database-connection-auth-type1.js";
import { databaseConnectionType1Schema, type DatabaseConnectionType1 } from "./database-connection-type1.js";
import { pemSchema, type Pem } from "./pem.js";
import { tlsClientParamsSchema, type TlsClientParams } from "./tls-client-params.js";

export type DatabaseConnectionConfig = {
  /** Snowflake account identifier in org-account format (example: MYORG-MYACCOUNT). */
  accountIdentifier?: string;
  /** Authentication method for the Database Connection. Determines how credentials are provided. */
  authType: DatabaseConnectionAuthType1;
  /** JSON configuration object for advanced SQL Server connection settings. */
  configObj?: string;
  /** Database connection string with embedded credentials or server information. */
  connectionString?: string;
  /** Maximum time (in milliseconds) to wait when establishing the database connection. */
  connectionTimeout?: number;
  /**
   * Name of the stored credentials secret containing username and password for SQL Server configObj
   * authentication.
   */
  credentialsSecret?: string;
  /**
   * Name of the stored credentials secret containing username and password. Used with Oracle
   * connections.
   */
  credsSecrets?: string;
  /** Database to connect to instead of the server default. */
  database?: string;
  /** Type of database engine for the connection. */
  databaseType: DatabaseConnectionType1;
  /** Brief description of the Database Connection. */
  description: string;
  /** Hostname of the server to connect to. */
  host?: string;
  /** Unique identifier for the Database Connection. */
  id: string;
  /** Log On Mechanism for databases that support multiple, like Teradata. */
  logOnMechanism?: string;
  /** Database password for authentication. Used with Oracle connections. */
  password?: string;
  /** RSA private key configuration for Snowflake key-pair authentication. */
  pem?: Pem;
  /**
   * Maximum time (in milliseconds) to wait for a database query to complete. Applies to SQL Server
   * connections only.
   */
  requestTimeout?: number;
  /** Snowflake role to use for the session. When set, requests a role-scoped token. */
  role?: string;
  /** HTTPS/TLS connection mode for Teradata. Controls certificate verification behavior. */
  sslmode?: string;
  /** Comma-separated list of tags for categorizing and filtering Database Connections. */
  tags?: string;
  /** Name of the stored text secret containing the connection string. */
  textSecret?: string;
  /** TLS client connection settings. */
  tls?: TlsClientParams;
  /** Database username for authentication. Used with Oracle connections. */
  user?: string;
  /** Snowflake warehouse to use for queries. */
  warehouse?: string;
};

export const databaseConnectionConfigSchema: Schema<DatabaseConnectionConfig> =
  s.object<DatabaseConnectionConfig>({
    accountIdentifier: s.optional(s.string()),
    authType: databaseConnectionAuthType1Schema,
    configObj: s.optional(s.string()),
    connectionString: s.optional(s.string()),
    connectionTimeout: s.optional(s.int()),
    credentialsSecret: s.optional(s.string()),
    credsSecrets: s.optional(s.string()),
    database: s.optional(s.string()),
    databaseType: databaseConnectionType1Schema,
    description: s.string(),
    host: s.optional(s.string()),
    id: s.string(),
    logOnMechanism: s.optional(s.string()),
    password: s.optional(s.string()),
    pem: s.optional(s.lazy(() => pemSchema)),
    requestTimeout: s.optional(s.int()),
    role: s.optional(s.string()),
    sslmode: s.optional(s.string()),
    tags: s.optional(s.string()),
    textSecret: s.optional(s.string()),
    tls: s.optional(s.lazy(() => tlsClientParamsSchema)),
    user: s.optional(s.string()),
    warehouse: s.optional(s.string()),
  });
