import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { automationStatsSchema, type AutomationStats } from "./automation-stats.js";
import { automationStatusSchema, type AutomationStatus } from "./automation-status.js";
import { automationTriggerEventSchema, type AutomationTriggerEvent } from "./automation-trigger-event.js";

export type Automation = {
  /** A unique prefixed id of the automation */
  id: string;
  status: AutomationStatus;
  name: string;
  /** The types of events that can trigger the automation. */
  triggerEvents: AutomationTriggerEvent[];
  description?: string;
  /**
   * Optional statistics for an automation. Retrievable by including `expand: [stats]` in the
   * automation request.
   */
  stats?: AutomationStats;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automationSchema: Schema<Automation> = s.object<Automation>(
  {
    id: s.string(),
    status: automationStatusSchema,
    name: s.string(),
    triggerEvents: s.array(s.lazy(() => automationTriggerEventSchema)),
    description: s.optional(s.string()),
    stats: s.optional(s.lazy(() => automationStatsSchema)),
    _keysMap: {
      triggerEvents: "trigger_events",
    },
  },
  { additionalProperties: s.json() },
);
