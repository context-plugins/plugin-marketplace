import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sourceEnvSchema, type SourceEnv } from "./source-env.js";

export type EnvironmentPost = {
  /** A human-friendly name for the new environment */
  name: string;
  /** A project-unique key for the new environment */
  key: string;
  /** A color to indicate this environment in the UI */
  color: string;
  /** The default time (in minutes) that the PHP SDK can cache feature flag rules locally */
  defaultTtl?: number;
  /**
   * Ensures that one end user of the client-side SDK cannot inspect the variations for another end
   * user
   */
  secureMode?: boolean;
  /** Enables tracking detailed information for new flags by default */
  defaultTrackEvents?: boolean;
  /** Requires confirmation for all flag and segment changes via the UI in this environment */
  confirmChanges?: boolean;
  /** Requires comments for all flag and segment changes via the UI in this environment */
  requireComments?: boolean;
  /** Tags to apply to the new environment */
  tags?: string[];
  source?: SourceEnv;
  /** Whether the environment is critical */
  critical?: boolean;
};

export const environmentPostSchema: Schema<EnvironmentPost> = s.object<EnvironmentPost>({
  name: s.string(),
  key: s.string(),
  color: s.string(),
  defaultTtl: s.optional(s.int()),
  secureMode: s.optional(s.boolean()),
  defaultTrackEvents: s.optional(s.boolean()),
  confirmChanges: s.optional(s.boolean()),
  requireComments: s.optional(s.boolean()),
  tags: s.optional(s.array(s.string())),
  source: s.optional(s.lazy(() => sourceEnvSchema)),
  critical: s.optional(s.boolean()),
});
