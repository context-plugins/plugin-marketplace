import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rule1Schema, type Rule1 } from "./rule1.js";

export type OutputRouter = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "router" */
  type?: "router";
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
   * Report per-rule event counts and percentages as internal metrics (router.out_events,
   * router.out_events_pct, router.in_events, router.unmatched_events, router.unmatched_events_pct).
   * Adds metric series per rule.
   */
  reportBranchMetrics?: boolean;
  /** Event routing rules */
  rules: Rule1[];
  /** Optional description for this configuration. */
  description?: string;
  /**
   * Binds 'streamtags' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'streamtags' at
   * runtime.
   */
  templateStreamtags?: string;
};

export const outputRouterSchema: Schema<OutputRouter> = s.object<OutputRouter>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("router"), "router"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  reportBranchMetrics: s.optional(s.boolean()),
  rules: s.array(s.lazy(() => rule1Schema)),
  description: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  _keysMap: {
    templateStreamtags: "__template_streamtags",
  },
});
