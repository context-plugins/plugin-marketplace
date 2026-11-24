import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The version waiting on an approver, if one is. */
export type PendingApproval = {
  id: string;
  versionNumber: number;
  since: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pendingApprovalSchema: Schema<PendingApproval> = s.object<PendingApproval>(
  {
    id: s.string(),
    versionNumber: s.float64(),
    since: s.string(),
  },
  { additionalProperties: s.json() },
);
