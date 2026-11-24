import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UniversalCreditUsageByAction = {
  /**
   * The credit action being tracked. One of `PersonSearch`, `CompanySearch`,
   * `ProfessionalEmailEnrichment`, `PersonalEmailEnrichment`, `PhoneEnrichment`,
   * `PersonEnrichment`, `CompanyEnrichment`, `HealthcareEnrichment`
   */
  creditAction?: string;
  /** Number of attempted credit actions */
  attemptedCount?: number;
  /** Number of successful credit actions */
  succeededCount?: number;
  /** Total credits used by this credit action */
  creditsUsed?: number;
  /** Timestamp of the last sync of the user credit usage by action data */
  lastSynced?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const universalCreditUsageByActionSchema: Schema<UniversalCreditUsageByAction> =
  s.object<UniversalCreditUsageByAction>(
    {
      creditAction: s.optional(s.string()),
      attemptedCount: s.optional(s.int()),
      succeededCount: s.optional(s.int()),
      creditsUsed: s.optional(s.int()),
      lastSynced: s.optional(s.dateTime()),
      _keysMap: {
        creditAction: "credit_action",
        attemptedCount: "attempted_count",
        succeededCount: "succeeded_count",
        creditsUsed: "credits_used",
        lastSynced: "last_synced",
      },
    },
    { additionalProperties: s.json() },
  );
