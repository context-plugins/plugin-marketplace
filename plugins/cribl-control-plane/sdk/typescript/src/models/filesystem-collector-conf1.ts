import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pathExtractor1Schema, type PathExtractor1 } from "./path-extractor1.js";

/** Collector configuration */
export type FilesystemCollectorConf1 = {
  /** Select a predefined configuration (a Destination) to auto-populate Collector settings */
  outputName?: string;
  /**
   * The directory from which to collect data. Templating is supported, such as
   * /myDir/${datacenter}/${host}/${app}/. Time-based tokens are also supported, such as
   * /myOtherDir/${_time:%Y}/${_time:%m}/${_time:%d}/.
   */
  path: string;
  /**
   * Allows using template tokens as context for expressions that enrich discovery results. For
   * example, given a template /path/${epoch}, an extractor under key "epoch" with an expression
   * {date: new Date(+value*1000)}, will enrich discovery results with a human readable "date"
   * field.
   */
  extractors?: PathExtractor1[];
  /** Recurse through subdirectories */
  recurse?: boolean;
  /** Maximum number of metadata files to batch before recording as results */
  maxBatchSize?: number;
  /**
   * Binds 'path' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'path' at runtime.
   */
  templatePath?: string;
};

export const filesystemCollectorConf1Schema: Schema<FilesystemCollectorConf1> =
  s.object<FilesystemCollectorConf1>({
    outputName: s.optional(s.string()),
    path: s.string(),
    extractors: s.optional(s.array(s.lazy(() => pathExtractor1Schema))),
    recurse: s.optional(s.boolean()),
    maxBatchSize: s.optional(s.float64()),
    templatePath: s.optional(s.string()),
    _keysMap: {
      templatePath: "__template_path",
    },
  });
