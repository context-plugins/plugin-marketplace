import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CriblLakeCollectorConf = {
  /** Storage location for the Lake Dataset */
  storageLocationId?: string;
  /** Lake dataset to collect data from. */
  dataset: string;
  /**
   * Binds 'dataset' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'dataset' at runtime.
   */
  templateDataset?: string;
};

export const criblLakeCollectorConfSchema: Schema<CriblLakeCollectorConf> = s.object<CriblLakeCollectorConf>({
  storageLocationId: s.optional(s.string()),
  dataset: s.string(),
  templateDataset: s.optional(s.string()),
  _keysMap: {
    templateDataset: "__template_dataset",
  },
});
