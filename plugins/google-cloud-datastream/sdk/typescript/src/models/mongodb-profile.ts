import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { hostAddressSchema, type HostAddress } from "./host-address.js";
import { mongodbSslConfig2Schema, type MongodbSslConfig2 } from "./mongodb-ssl-config2.js";
import {
  standardConnectionFormatSchema,
  type StandardConnectionFormat,
} from "./standard-connection-format.js";

/** Profile for connecting to a MongoDB source. */
export type MongodbProfile = {
  /**
   * Optional. A reference to a Secret Manager resource name storing the SQLServer connection
   * password. Mutually exclusive with the `password` field.
   */
  secretManagerStoredPassword?: string;
  /**
   * Optional. Specifies additional options for the MongoDB connection. The options should be sent
   * as key-value pairs, for example: `additional_options = {"serverSelectionTimeoutMS": "10000",
   * "directConnection": "true"}`. Keys are case-sensitive and should match the official MongoDB
   * connection string options:
   * https://www.mongodb.com/docs/manual/reference/connection-string-options/ The server will not
   * modify the values provided by the user.
   */
  additionalOptions?: Record<string, string>;
  /** Srv connection format. */
  srvConnectionFormat?: Record<string, unknown>;
  /**
   * Required. List of host addresses for a MongoDB cluster. For SRV connection format, this list
   * must contain exactly one DNS host without a port. For Standard connection format, this list
   * must contain all the required hosts in the cluster with their respective ports.
   */
  hostAddresses?: HostAddress[];
  /** Required. Username for the MongoDB connection. */
  username?: string;
  /**
   * Optional. Password for the MongoDB connection. Mutually exclusive with the
   * `secret_manager_stored_password` field.
   */
  password?: string;
  /**
   * Optional. Name of the replica set. Only needed for self hosted replica set type MongoDB
   * cluster. For SRV connection format, this field must be empty. For Standard connection format,
   * this field must be specified.
   */
  replicaSet?: string;
  /** Standard connection format. */
  standardConnectionFormat?: StandardConnectionFormat;
  /** Optional. SSL configuration for the MongoDB connection. */
  sslConfig?: MongodbSslConfig2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mongodbProfileSchema: Schema<MongodbProfile> = s.object<MongodbProfile>(
  {
    secretManagerStoredPassword: s.optional(s.string()),
    additionalOptions: s.optional(s.record(s.string(), s.string())),
    srvConnectionFormat: s.optional(s.record(s.string(), s.unknown())),
    hostAddresses: s.optional(s.array(s.lazy(() => hostAddressSchema))),
    username: s.optional(s.string()),
    password: s.optional(s.string()),
    replicaSet: s.optional(s.string()),
    standardConnectionFormat: s.optional(s.lazy(() => standardConnectionFormatSchema)),
    sslConfig: s.optional(s.lazy(() => mongodbSslConfig2Schema)),
  },
  { additionalProperties: s.json() },
);
