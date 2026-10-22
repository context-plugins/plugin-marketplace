import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod104Schema, type AuthenticationMethod104 } from "./authentication-method104.js";
import { commandSchema, type Command } from "./command.js";
import { deploymentType3Schema, type DeploymentType3 } from "./deployment-type3.js";
import {
  rootNodeConfRedisDeploymentTypeClusterSchema,
  type RootNodeConfRedisDeploymentTypeCluster,
} from "./root-node-conf-redis-deployment-type-cluster.js";
import { scaleReadsSchema, type ScaleReads } from "./scale-reads.js";
import {
  tlsOptionsTypeRedisDeploymentTypeStandaloneSchema,
  type TlsOptionsTypeRedisDeploymentTypeStandalone,
} from "./tls-options-type-redis-deployment-type-standalone.js";

export type FunctionConfSchemaRedis = {
  /** List of Redis commands to execute against the specified keys. */
  commands?: Command[];
  /** How the Redis server is configured. Defaults to Standalone */
  deploymentType?: DeploymentType3;
  /** Authentication method to use when connecting to Redis. */
  authType?: AuthenticationMethod104;
  /**
   * Maximum amount of time (seconds) to wait before assuming that Redis is down and passing events
   * through. Use 0 to disable.
   */
  maxBlockSecs?: number;
  /**
   * Enable client-side cache. Redundant when using Redis write operations. See more options at
   * Settings > General > Limits > Redis Cache.
   */
  enableClientSideCaching?: boolean;
  /**
   * Redis URL to connect to. Format:
   * redis[s]://[[user][:password@]][host][:port][/db-number][?db=db-number[&password=bar[&option=value]]].
   * Must be a JavaScript expression (which can evaluate to a constant value), enclosed in quotes or
   * backticks. Can be evaluated only at init time. Example referencing a Global Variable:
   * `myBucket-${C.vars.myVar}`
   */
  url?: string;
  /**
   * Binds 'url' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'url' at runtime.
   */
  templateUrl?: string;
  /** TLS settings for encrypting the connection to Redis. */
  tlsOptions?: TlsOptionsTypeRedisDeploymentTypeStandalone;
  /** Root nodes to which the cluster connection should be initiated */
  rootNodes?: RootNodeConfRedisDeploymentTypeCluster[];
  /** Use TLS for connections to this cluster */
  tls?: boolean;
  /** Which nodes read commands should be sent to */
  scaleReads?: ScaleReads;
  /** Name of the Redis Sentinel master group to connect to. */
  masterName?: string;
  /** Username for Redis authentication. */
  username?: string;
  /**
   * Binds 'username' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'username' at runtime.
   */
  templateUsername?: string;
  /** Password for Redis authentication. */
  password?: string;
  /**
   * Binds 'password' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'password' at runtime.
   */
  templatePassword?: string;
  /** Secret that references Redis username and password */
  credentialsSecret?: string;
  /** Secret that references Redis admin password */
  textSecret?: string;
};

export const functionConfSchemaRedisSchema: Schema<FunctionConfSchemaRedis> =
  s.object<FunctionConfSchemaRedis>({
    commands: s.optional(s.array(s.lazy(() => commandSchema))),
    deploymentType: s.optional(s.lazy(() => deploymentType3Schema)),
    authType: s.optional(s.lazy(() => authenticationMethod104Schema)),
    maxBlockSecs: s.optional(s.float64()),
    enableClientSideCaching: s.optional(s.boolean()),
    url: s.optional(s.string()),
    templateUrl: s.optional(s.string()),
    tlsOptions: s.optional(s.lazy(() => tlsOptionsTypeRedisDeploymentTypeStandaloneSchema)),
    rootNodes: s.optional(s.array(s.lazy(() => rootNodeConfRedisDeploymentTypeClusterSchema))),
    tls: s.optional(s.boolean()),
    scaleReads: s.optional(s.lazy(() => scaleReadsSchema)),
    masterName: s.optional(s.string()),
    username: s.optional(s.string()),
    templateUsername: s.optional(s.string()),
    password: s.optional(s.string()),
    templatePassword: s.optional(s.string()),
    credentialsSecret: s.optional(s.string()),
    textSecret: s.optional(s.string()),
    _keysMap: {
      templateUrl: "__template_url",
      templateUsername: "__template_username",
      templatePassword: "__template_password",
    },
  });
