import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod92Schema, type AuthenticationMethod92 } from "./authentication-method92.js";
import { authenticationTokenSchema, type AuthenticationToken } from "./authentication-token.js";

/** List of configurations to set up indexer discovery in Splunk Indexer clustering environment. */
export type IndexerDiscoveryConfigs = {
  /**
   * Clustering site of the indexers from where indexers need to be discovered. In case of single
   * site cluster, it defaults to 'default' site.
   */
  site: string;
  /**
   * Full URI of Splunk cluster manager (scheme://host:port). Example: https://managerAddress:8089
   */
  masterUri: string;
  /**
   * Time interval, in seconds, between two consecutive indexer list fetches from cluster manager
   */
  refreshIntervalSec: number;
  /**
   * During indexer discovery, reject cluster manager certificates that are not authorized by the
   * system's CA. Disable to allow untrusted (for example, self-signed) certificates.
   */
  rejectUnauthorized?: boolean;
  /** Tokens required to authenticate to cluster manager for indexer discovery */
  authTokens?: AuthenticationToken[];
  /**
   * Select Manual to enter an auth token directly, or select Secret to use a text secret to
   * authenticate
   */
  authType?: AuthenticationMethod92;
  /**
   * Shared secret to be provided by any client (in authToken header field). If empty, unauthorized
   * access is permitted.
   */
  authToken?: string;
  /** Select or create a stored text secret */
  textSecret?: string;
};

export const indexerDiscoveryConfigsSchema: Schema<IndexerDiscoveryConfigs> =
  s.object<IndexerDiscoveryConfigs>({
    site: s.string(),
    masterUri: s.string(),
    refreshIntervalSec: s.float64(),
    rejectUnauthorized: s.optional(s.boolean()),
    authTokens: s.optional(s.array(s.lazy(() => authenticationTokenSchema))),
    authType: s.optional(s.lazy(() => authenticationMethod92Schema)),
    authToken: s.optional(s.string()),
    textSecret: s.optional(s.string()),
  });
