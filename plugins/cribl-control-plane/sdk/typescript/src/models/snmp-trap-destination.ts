import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SnmpTrapDestination = {
  /** Destination host */
  host: string;
  /** Destination port, default is 162 */
  port: number;
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

export const snmpTrapDestinationSchema: Schema<SnmpTrapDestination> = s.object<SnmpTrapDestination>({
  host: s.string(),
  port: s.float64(),
  templateHost: s.optional(s.string()),
  templatePort: s.optional(s.string()),
  _keysMap: {
    templateHost: "__template_host",
    templatePort: "__template_port",
  },
});
