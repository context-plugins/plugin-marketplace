import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { compression101Schema, type Compression101 } from "./compression101.js";

/** Disk Spooling */
export type DiskSpooling = {
  /** Spool events on disk for Cribl Edge and Search. Default is disabled. */
  enable?: boolean;
  /** Time period for grouping spooled events. Default is 10m. */
  timeWindow?: string;
  /**
   * Maximum disk space that can be consumed before older buckets are deleted. Examples: 420MB, 4GB.
   * Default is 1GB.
   */
  maxDataSize?: string;
  /**
   * Maximum amount of time to retain data before older buckets are deleted. Examples: 2h, 4d.
   * Default is 24h.
   */
  maxDataTime?: string;
  /** Data compression format. Default is gzip. */
  compress?: Compression101;
};

export const diskSpoolingSchema: Schema<DiskSpooling> = s.object<DiskSpooling>({
  enable: s.optional(s.boolean()),
  timeWindow: s.optional(s.string()),
  maxDataSize: s.optional(s.string()),
  maxDataTime: s.optional(s.string()),
  compress: s.optional(s.lazy(() => compression101Schema)),
});
