import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  releasePoliciesAccessDeniedReasonSchema,
  type ReleasePoliciesAccessDeniedReason,
} from "./release-policies-access-denied-reason.js";

export type ReleasePoliciesAccessDenied = {
  action: string;
  reason: ReleasePoliciesAccessDeniedReason;
};

export const releasePoliciesAccessDeniedSchema: Schema<ReleasePoliciesAccessDenied> =
  s.object<ReleasePoliciesAccessDenied>({
    action: s.string(),
    reason: releasePoliciesAccessDeniedReasonSchema,
  });
