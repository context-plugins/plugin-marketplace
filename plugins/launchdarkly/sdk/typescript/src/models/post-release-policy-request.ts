import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { guardedReleaseConfigSchema, type GuardedReleaseConfig } from "./guarded-release-config.js";
import {
  progressiveReleaseConfigSchema,
  type ProgressiveReleaseConfig,
} from "./progressive-release-config.js";
import { releaseMethodSchema, type ReleaseMethod } from "./release-method.js";
import { releasePolicyScopeSchema, type ReleasePolicyScope } from "./release-policy-scope.js";

export type PostReleasePolicyRequest = {
  scope?: ReleasePolicyScope;
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

export const postReleasePolicyRequestSchema: Schema<PostReleasePolicyRequest> =
  s.object<PostReleasePolicyRequest>({
    scope: s.optional(s.lazy(() => releasePolicyScopeSchema)),
    releaseMethod: releaseMethodSchema,
    guardedReleaseConfig: s.optional(s.lazy(() => guardedReleaseConfigSchema)),
    progressiveReleaseConfig: s.optional(s.lazy(() => progressiveReleaseConfigSchema)),
    name: s.string(),
    key: s.string(),
  });
