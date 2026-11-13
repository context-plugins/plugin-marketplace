import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UsageGroupResponse = {
  /**
   * The automation this usage belongs to. Null for usage recorded before runs carried their
   * automation, such as the runs of an automation deleted since, and for test runs of a draft that
   * was never published. Those group by `description` instead.
   */
  automationId: string | null;
  /**
   * The label of the newest usage in the group, so a renamed automation shows its current name.
   * Prefer the client's own name for a known `automation_id`.
   */
  description: string | null;
  /** How many usage events settled in the group. */
  usageCount: number;
  /**
   * Units the group took off the balance, as a positive number. Display `charged_amount` instead.
   */
  chargedUnits: number;
  /** `charged_units` in money, in microdollars. */
  chargedAmount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageGroupResponseSchema: Schema<UsageGroupResponse> = s.object<UsageGroupResponse>(
  {
    automationId: s.nullable(s.string()),
    description: s.nullable(s.string()),
    usageCount: s.int(),
    chargedUnits: s.int(),
    chargedAmount: s.int(),
    _keysMap: {
      automationId: "automation_id",
      usageCount: "usage_count",
      chargedUnits: "charged_units",
      chargedAmount: "charged_amount",
    },
  },
  { additionalProperties: s.json() },
);
