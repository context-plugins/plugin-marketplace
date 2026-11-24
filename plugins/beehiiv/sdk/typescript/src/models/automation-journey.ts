import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { automationJourneyStatusSchema, type AutomationJourneyStatus } from "./automation-journey-status.js";

/** A subscribers' journey through an automation flow. */
export type AutomationJourney = {
  /** The prefixed automation journey id */
  id: string;
  /** The prefixed automation id */
  automationId: string;
  /** The prefixed ID of the subscription. */
  subscriptionId?: string;
  email?: string;
  status: AutomationJourneyStatus;
  /**
   * The time that the subscriber started their flow through the automation. Measured in seconds
   * since the Unix epoch.
   */
  startedAt?: number;
  /**
   * The time that the subscriber finished their flow through the automation. Measured in seconds
   * since the Unix epoch.
   */
  completedAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automationJourneySchema: Schema<AutomationJourney> = s.object<AutomationJourney>(
  {
    id: s.string(),
    automationId: s.string(),
    subscriptionId: s.optional(s.string()),
    email: s.optional(s.string()),
    status: automationJourneyStatusSchema,
    startedAt: s.optional(s.int()),
    completedAt: s.optional(s.int()),
    _keysMap: {
      automationId: "automation_id",
      subscriptionId: "subscription_id",
      startedAt: "started_at",
      completedAt: "completed_at",
    },
  },
  { additionalProperties: s.json() },
);
