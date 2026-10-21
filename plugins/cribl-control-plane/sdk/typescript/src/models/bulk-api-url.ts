import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BulkApiUrl = {
  /** The URL to an Elastic node to send events to. Example: http://elastic:9200/_bulk */
  url: string;
  /** Assign a weight (>0) to each endpoint to indicate its traffic-handling capability */
  weight?: number;
  /**
   * Binds 'url' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'url' at runtime.
   */
  templateUrl?: string;
};

export const bulkApiUrlSchema: Schema<BulkApiUrl> = s.object<BulkApiUrl>({
  url: s.string(),
  weight: s.optional(s.float64()),
  templateUrl: s.optional(s.string()),
  _keysMap: {
    templateUrl: "__template_url",
  },
});
