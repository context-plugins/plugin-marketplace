import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activitySchema, type Activity } from "./activity.js";
import { decision1Schema, type Decision1 } from "./decision1.js";
import { reasonJidVerifyApiSchema, type ReasonJidVerifyApi } from "./reason-jid-verify-api.js";

export type Decision = {
  decision?: Decision1;
  activity?: Activity;
  jurisdiction?: string | null;
  amount?: number | null;
  currency?: string | null;
  reasons?: ReasonJidVerifyApi[];
  notes?: string[];
  rulesVersion?: string;
  rulesUrl?: string;
  notLegalAdvice?: string;
  receiptId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const decisionSchema: Schema<Decision> = s.object<Decision>(
  {
    decision: s.optional(s.lazy(() => decision1Schema)),
    activity: s.optional(s.lazy(() => activitySchema)),
    jurisdiction: s.optionalNullable(s.string()),
    amount: s.optionalNullable(s.float64()),
    currency: s.optionalNullable(s.string()),
    reasons: s.optional(s.array(s.lazy(() => reasonJidVerifyApiSchema))),
    notes: s.optional(s.array(s.string())),
    rulesVersion: s.optional(s.string()),
    rulesUrl: s.optional(s.string()),
    notLegalAdvice: s.optional(s.string()),
    receiptId: s.optional(s.string()),
    _keysMap: {
      rulesVersion: "rules_version",
      rulesUrl: "rules_url",
      notLegalAdvice: "not_legal_advice",
      receiptId: "receipt_id",
    },
  },
  { additionalProperties: s.json() },
);
