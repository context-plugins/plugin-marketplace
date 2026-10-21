import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { releasePolicySchema, type ReleasePolicy } from "./release-policy.js";

export type ReleasePoliciesResponse = {
  /** List of release policies */
  items: ReleasePolicy[];
  /** Total number of release policies */
  totalCount: number;
};

export const releasePoliciesResponseSchema: Schema<ReleasePoliciesResponse> =
  s.object<ReleasePoliciesResponse>({
    items: s.array(s.lazy(() => releasePolicySchema)),
    totalCount: s.int(),
  });
