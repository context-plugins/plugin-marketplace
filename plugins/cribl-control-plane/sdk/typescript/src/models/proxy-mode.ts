import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod13Schema, type AuthenticationMethod13 } from "./authentication-method13.js";

/** Proxy mode settings for Elasticsearch requests. */
export type ProxyMode = {
  /**
   * Enable proxying of non-bulk API requests to an external Elastic server. Enable this only if you
   * understand the implications. See [Cribl
   * Docs](https://docs.cribl.io/stream/sources-elastic/#proxy-mode) for more details.
   */
  enabled: boolean;
  /** Enter credentials directly, or select a stored secret */
  authType?: AuthenticationMethod13;
  /** Username */
  username?: string;
  /** Password */
  password?: string;
  /** Select or create a secret that references your credentials */
  credentialsSecret?: string;
  /** URL of the Elastic server to proxy non-bulk requests to, such as http://elastic:9200 */
  url?: string;
  /**
   * Reject certificates that cannot be verified against a valid CA (such as self-signed
   * certificates)
   */
  rejectUnauthorized?: boolean;
  /** List of headers to remove from the request to proxy */
  removeHeaders?: string[];
  /** Amount of time, in seconds, to wait for a proxy request to complete before canceling it */
  timeoutSec?: number;
  /**
   * Binds 'url' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'url' at runtime.
   */
  templateUrl?: string;
};

export const proxyModeSchema: Schema<ProxyMode> = s.object<ProxyMode>({
  enabled: s.boolean(),
  authType: s.optional(s.lazy(() => authenticationMethod13Schema)),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  credentialsSecret: s.optional(s.string()),
  url: s.optional(s.string()),
  rejectUnauthorized: s.optional(s.boolean()),
  removeHeaders: s.optional(s.array(s.string())),
  timeoutSec: s.optional(s.float64()),
  templateUrl: s.optional(s.string()),
  _keysMap: {
    templateUrl: "__template_url",
  },
});
