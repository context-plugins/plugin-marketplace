import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { featureFlagStatusSchema, type FeatureFlagStatus } from "./feature-flag-status.js";
import { linkSchema, type Link } from "./link.js";

export type FeatureFlagStatusAcrossEnvironments = {
  /** Flag status for environment. */
  environments: Record<string, FeatureFlagStatus>;
  /** feature flag key */
  key: string;
  links: Record<string, Link>;
};

export const featureFlagStatusAcrossEnvironmentsSchema: Schema<FeatureFlagStatusAcrossEnvironments> =
  s.object<FeatureFlagStatusAcrossEnvironments>({
    environments: s.record(
      s.string(),
      s.lazy(() => featureFlagStatusSchema),
    ),
    key: s.string(),
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    _keysMap: {
      links: "_links",
    },
  });
