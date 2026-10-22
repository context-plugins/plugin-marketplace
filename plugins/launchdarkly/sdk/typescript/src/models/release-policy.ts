import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { guardedReleaseConfigSchema, type GuardedReleaseConfig } from "./guarded-release-config.js";
import {
  progressiveReleaseConfigSchema,
  type ProgressiveReleaseConfig,
} from "./progressive-release-config.js";
import { releaseMethodSchema, type ReleaseMethod } from "./release-method.js";
import { releasePoliciesAccessSchema, type ReleasePoliciesAccess } from "./release-policies-access.js";
import { releasePolicyScopeSchema, type ReleasePolicyScope } from "./release-policy-scope.js";

export type ReleasePolicy = {
  access?: ReleasePoliciesAccess;
  /** The unique identifier of the release policy */
  id: string;
  scope?: ReleasePolicyScope;
  /** The rank/priority of the release policy */
  rank: number;
  /** The release method for this policy */
  releaseMethod: ReleaseMethod;
  /** Configuration for guarded releases */
  guardedReleaseConfig?: GuardedReleaseConfig;
  /** Configuration for progressive releases */
  progressiveReleaseConfig?: ProgressiveReleaseConfig;
  /** The name of the release policy */
  name: string;
  /** The human-readable key of the release policy */
  key: string;
};

export const releasePolicySchema: Schema<ReleasePolicy> = s.object<ReleasePolicy>({
  access: s.optional(s.lazy(() => releasePoliciesAccessSchema)),
  id: s.string(),
  scope: s.optional(s.lazy(() => releasePolicyScopeSchema)),
  rank: s.int(),
  releaseMethod: releaseMethodSchema,
  guardedReleaseConfig: s.optional(s.lazy(() => guardedReleaseConfigSchema)),
  progressiveReleaseConfig: s.optional(s.lazy(() => progressiveReleaseConfigSchema)),
  name: s.string(),
  key: s.string(),
  _keysMap: {
    access: "_access",
    id: "_id",
  },
});
