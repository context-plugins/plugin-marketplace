import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { groups1Schema, type Groups1 } from "./groups1.js";
import { pipelineFunctionConfSchema, type PipelineFunctionConf } from "./unions/pipeline-function-conf.js";

/** Configuration for the Pipeline, including functions and settings. */
export type Conf6 = {
  /** Timeout (in milliseconds) for asynchronous Pipeline functions. */
  asyncFuncTimeout?: number;
  /** The output destination for events processed by this Pipeline. */
  output?: string;
  /** Brief description of the Pipeline. */
  description?: string;
  /** Metadata tags used for categorization and filtering. */
  streamtags?: string[];
  /** List of Functions to pass data through the Pipeline. */
  functions?: PipelineFunctionConf[];
  /** Named groups of Pipeline functions for organizational display in the UI. */
  groups?: Record<string, Groups1>;
  /**
   * Binds 'streamtags' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'streamtags' at
   * runtime.
   */
  templateStreamtags?: string;
};

export const conf6Schema: Schema<Conf6> = s.object<Conf6>({
  asyncFuncTimeout: s.optional(s.int()),
  output: s.optional(s.string()),
  description: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  functions: s.optional(s.array(s.lazy(() => pipelineFunctionConfSchema))),
  groups: s.optional(
    s.record(
      s.string(),
      s.lazy(() => groups1Schema),
    ),
  ),
  templateStreamtags: s.optional(s.string()),
  _keysMap: {
    templateStreamtags: "__template_streamtags",
  },
});
