import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deploymentTypeSchema, type DeploymentType } from "./deployment-type.js";
import {
  tlsOptionsTypeRedisDeploymentTypeStandaloneSchema,
  type TlsOptionsTypeRedisDeploymentTypeStandalone,
} from "./tls-options-type-redis-deployment-type-standalone.js";

export type RedisDeploymentTypeStandalone = {
  /** How the Redis server is configured. Defaults to Standalone */
  deploymentType?: DeploymentType;
  /**
   * Redis URL to connect to. Format:
   * redis[s]://[[user][:password@]][host][:port][/db-number][?db=db-number[&password=bar[&option=value]]].
   * Must be a JavaScript expression (which can evaluate to a constant value), enclosed in quotes or
   * backticks. Can be evaluated only at init time. Example referencing a Global Variable:
   * `myBucket-${C.vars.myVar}`
   */
  url: string;
  /** TLS settings for encrypting the connection to Redis. */
  tlsOptions?: TlsOptionsTypeRedisDeploymentTypeStandalone;
  /**
   * Binds 'url' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'url' at runtime.
   */
  templateUrl?: string;
};

export const redisDeploymentTypeStandaloneSchema: Schema<RedisDeploymentTypeStandalone> =
  s.object<RedisDeploymentTypeStandalone>({
    deploymentType: s.optional(s.lazy(() => deploymentTypeSchema)),
    url: s.string(),
    tlsOptions: s.optional(s.lazy(() => tlsOptionsTypeRedisDeploymentTypeStandaloneSchema)),
    templateUrl: s.optional(s.string()),
    _keysMap: {
      templateUrl: "__template_url",
    },
  });
