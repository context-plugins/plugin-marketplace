import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { automationEmailStatsSchema, type AutomationEmailStats } from "./automation-email-stats.js";

/** An email message within an automation. */
export type AutomationEmail = {
  /** The unique ID of the email message */
  id: string;
  /** The unique ID of the automation step this email belongs to */
  automationStepId: string;
  /** The email subject line */
  subjectLine: string;
  /** The email preview text */
  previewText: string;
  /**
   * The status of the email message. `active` - The email is active and will be sent. `inactive` -
   * The email is inactive.
   */
  status: string;
  /** The time the email was first sent. Measured in seconds since the Unix epoch */
  firstSentAt?: number;
  /** The time the email was last sent. Measured in seconds since the Unix epoch */
  lastSentAt?: number;
  /** The time the email was created. Measured in seconds since the Unix epoch */
  createdAt: number;
  /** Statistics for an automation email message. */
  stats?: AutomationEmailStats;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automationEmailSchema: Schema<AutomationEmail> = s.object<AutomationEmail>(
  {
    id: s.string(),
    automationStepId: s.string(),
    subjectLine: s.string(),
    previewText: s.string(),
    status: s.string(),
    firstSentAt: s.optional(s.int()),
    lastSentAt: s.optional(s.int()),
    createdAt: s.int(),
    stats: s.optional(s.lazy(() => automationEmailStatsSchema)),
    _keysMap: {
      automationStepId: "automation_step_id",
      subjectLine: "subject_line",
      previewText: "preview_text",
      firstSentAt: "first_sent_at",
      lastSentAt: "last_sent_at",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
