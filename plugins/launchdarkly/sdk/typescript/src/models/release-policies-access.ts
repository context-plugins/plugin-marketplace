import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  releasePoliciesAccessAllowedRepSchema,
  type ReleasePoliciesAccessAllowedRep,
} from "./release-policies-access-allowed-rep.js";
import {
  releasePoliciesAccessDeniedSchema,
  type ReleasePoliciesAccessDenied,
} from "./release-policies-access-denied.js";

export type ReleasePoliciesAccess = {
  denied: ReleasePoliciesAccessDenied[];
  allowed: ReleasePoliciesAccessAllowedRep[];
};

export const releasePoliciesAccessSchema: Schema<ReleasePoliciesAccess> = s.object<ReleasePoliciesAccess>({
  denied: s.array(s.lazy(() => releasePoliciesAccessDeniedSchema)),
  allowed: s.array(s.lazy(() => releasePoliciesAccessAllowedRepSchema)),
});
