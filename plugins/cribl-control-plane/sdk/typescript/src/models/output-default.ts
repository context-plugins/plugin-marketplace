import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OutputDefault = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "default" */
  type?: "default";
  /** Pipeline to process data before sending out to this output */
  pipeline?: string;
  /** Fields to automatically add to events, such as cribl_pipe. Supports wildcards. */
  systemFields?: string[];
  /**
   * Optionally, enable this config only on a specified Git branch. If empty, will be enabled
   * everywhere.
   */
  environment?: string;
  /** Metadata tags used for categorization and filtering. */
  streamtags?: string[];
  /**
   * ID of the default output. This will be used whenever a nonexistent/deleted output is
   * referenced.
   */
  defaultId: string | null;
  /**
   * Binds 'streamtags' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'streamtags' at
   * runtime.
   */
  templateStreamtags?: string;
};

export const outputDefaultSchema: Schema<OutputDefault> = s.object<OutputDefault>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("default"), "default"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  defaultId: s.nullable(s.string()),
  templateStreamtags: s.optional(s.string()),
  _keysMap: {
    templateStreamtags: "__template_streamtags",
  },
});
