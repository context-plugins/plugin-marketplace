import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  releasePoliciesAccessAllowedReasonSchema,
  type ReleasePoliciesAccessAllowedReason,
} from "./release-policies-access-allowed-reason.js";

export type ReleasePoliciesAccessAllowedRep = {
  action: string;
  reason: ReleasePoliciesAccessAllowedReason;
};

export const releasePoliciesAccessAllowedRepSchema: Schema<ReleasePoliciesAccessAllowedRep> =
  s.object<ReleasePoliciesAccessAllowedRep>({
    action: s.string(),
    reason: releasePoliciesAccessAllowedReasonSchema,
  });
