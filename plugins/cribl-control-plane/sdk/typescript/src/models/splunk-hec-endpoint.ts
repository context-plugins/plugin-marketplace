import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SplunkHecEndpoint = {
  /**
   * URL to a Splunk HEC endpoint to send events to, e.g.,
   * http://localhost:8088/services/collector/event
   */
  url: string;
  /** Assign a weight (>0) to each endpoint to indicate its traffic-handling capability */
  weight?: number;
  /**
   * Binds 'url' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'url' at runtime.
   */
  templateUrl?: string;
};

export const splunkHecEndpointSchema: Schema<SplunkHecEndpoint> = s.object<SplunkHecEndpoint>({
  url: s.string(),
  weight: s.optional(s.float64()),
  templateUrl: s.optional(s.string()),
  _keysMap: {
    templateUrl: "__template_url",
  },
});
