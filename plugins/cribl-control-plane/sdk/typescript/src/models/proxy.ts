import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** HTTP proxy configuration for outbound connections. */
export type Proxy = {
  /**
   * If <code>true</code>, use proxy settings from environment variables (<code>HTTP_PROXY</code>,
   * <code>HTTPS_PROXY</code>, <code>NO_PROXY</code>). Otherwise, <code>false</code>.
   */
  useEnvVars?: boolean;
};

export const proxySchema: Schema<Proxy> = s.object<Proxy>({
  useEnvVars: s.optional(s.boolean()),
});
