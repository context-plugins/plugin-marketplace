import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { featureFlagSchema, type FeatureFlag } from "./feature-flag.js";
import { linkSchema, type Link } from "./link.js";

export type FeatureFlags = {
  /** An array of feature flags */
  items: FeatureFlag[];
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** The total number of flags */
  totalCount?: number;
  /**
   * The number of flags that have differences between environments. Only shown when query parameter
   * <code>compare</code> is <code>true</code>.
   */
  totalCountWithDifferences?: number;
};

export const featureFlagsSchema: Schema<FeatureFlags> = s.object<FeatureFlags>({
  items: s.array(s.lazy(() => featureFlagSchema)),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  totalCount: s.optional(s.int()),
  totalCountWithDifferences: s.optional(s.int()),
  _keysMap: {
    links: "_links",
  },
});
