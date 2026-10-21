import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { memberSummarySchema, type MemberSummary } from "./member-summary.js";
import { recentTriggerBodySchema, type RecentTriggerBody } from "./recent-trigger-body.js";

export type TriggerWorkflowRep = {
  id?: string;
  /** The flag trigger version */
  version?: number;
  creationDate?: number;
  /** The ID of the flag trigger maintainer */
  maintainerId?: string;
  maintainer?: MemberSummary;
  /** Whether the flag trigger is currently enabled */
  enabled?: boolean;
  /** The unique identifier of the integration for your trigger */
  integrationKey?: string;
  instructions?: Record<string, unknown>[];
  lastTriggeredAt?: number;
  /** Details on recent flag trigger requests. */
  recentTriggerBodies?: RecentTriggerBody[];
  /** Number of times the trigger has been executed */
  triggerCount?: number;
  /** The unguessable URL for this flag trigger */
  triggerUrl?: string;
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const triggerWorkflowRepSchema: Schema<TriggerWorkflowRep> = s.object<TriggerWorkflowRep>({
  id: s.optional(s.string()),
  version: s.optional(s.int()),
  creationDate: s.optional(s.int()),
  maintainerId: s.optional(s.string()),
  maintainer: s.optional(s.lazy(() => memberSummarySchema)),
  enabled: s.optional(s.boolean()),
  integrationKey: s.optional(s.string()),
  instructions: s.optional(s.array(s.record(s.string(), s.unknown()))),
  lastTriggeredAt: s.optional(s.int()),
  recentTriggerBodies: s.optional(s.array(s.lazy(() => recentTriggerBodySchema))),
  triggerCount: s.optional(s.int()),
  triggerUrl: s.optional(s.string()),
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  _keysMap: {
    id: "_id",
    version: "_version",
    creationDate: "_creationDate",
    maintainerId: "_maintainerId",
    maintainer: "_maintainer",
    integrationKey: "_integrationKey",
    lastTriggeredAt: "_lastTriggeredAt",
    recentTriggerBodies: "_recentTriggerBodies",
    triggerCount: "_triggerCount",
    triggerUrl: "triggerURL",
    links: "_links",
  },
});
