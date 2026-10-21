import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  featureFlagScheduledChangeSchema,
  type FeatureFlagScheduledChange,
} from "./feature-flag-scheduled-change.js";
import { linkSchema, type Link } from "./link.js";

export type FeatureFlagScheduledChanges = {
  /** Array of scheduled changes */
  items: FeatureFlagScheduledChange[];
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const featureFlagScheduledChangesSchema: Schema<FeatureFlagScheduledChanges> =
  s.object<FeatureFlagScheduledChanges>({
    items: s.array(s.lazy(() => featureFlagScheduledChangeSchema)),
    links: s.optional(
      s.record(
        s.string(),
        s.lazy(() => linkSchema),
      ),
    ),
    _keysMap: {
      links: "_links",
    },
  });
