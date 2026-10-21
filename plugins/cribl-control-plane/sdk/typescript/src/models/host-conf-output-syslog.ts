import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tlsSchema, type Tls } from "./tls.js";

export type HostConfOutputSyslog = {
  /** The hostname of the receiver */
  host: string;
  /** The port to connect to on the provided host */
  port: number;
  /** Whether to inherit TLS configs from group setting or disable TLS */
  tls?: Tls;
  /**
   * Servername to use if establishing a TLS connection. If not specified, defaults to connection
   * host (if not an IP); otherwise, uses the global TLS settings.
   */
  servername?: string;
  /** Assign a weight (>0) to each endpoint to indicate its traffic-handling capability */
  weight?: number;
  /**
   * Binds 'host' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'host' at runtime.
   */
  templateHost?: string;
  /**
   * Binds 'port' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'port' at runtime.
   */
  templatePort?: string;
};

export const hostConfOutputSyslogSchema: Schema<HostConfOutputSyslog> = s.object<HostConfOutputSyslog>({
  host: s.string(),
  port: s.float64(),
  tls: s.optional(s.lazy(() => tlsSchema)),
  servername: s.optional(s.string()),
  weight: s.optional(s.float64()),
  templateHost: s.optional(s.string()),
  templatePort: s.optional(s.string()),
  _keysMap: {
    templateHost: "__template_host",
    templatePort: "__template_port",
  },
});
