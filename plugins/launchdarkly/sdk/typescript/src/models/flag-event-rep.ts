import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  flagEventExperimentCollectionSchema,
  type FlagEventExperimentCollection,
} from "./flag-event-experiment-collection.js";
import { flagEventImpactRepSchema, type FlagEventImpactRep } from "./flag-event-impact-rep.js";
import { flagEventMemberRepSchema, type FlagEventMemberRep } from "./flag-event-member-rep.js";

export type FlagEventRep = {
  /** The flag event ID */
  id: string;
  /** The project ID */
  projectId: string;
  /** The project key */
  projectKey: string;
  /** The environment ID */
  environmentId?: string;
  /** The environment key */
  environmentKey?: string;
  /** The flag key */
  flagKey: string;
  eventType: string;
  eventTime: number;
  /** The event description */
  description: string;
  /** The audit log entry ID */
  auditLogEntryId?: string;
  member?: FlagEventMemberRep;
  /** The resource actions */
  actions?: string[];
  impact: FlagEventImpactRep;
  experiments?: FlagEventExperimentCollection;
};

export const flagEventRepSchema: Schema<FlagEventRep> = s.object<FlagEventRep>({
  id: s.string(),
  projectId: s.string(),
  projectKey: s.string(),
  environmentId: s.optional(s.string()),
  environmentKey: s.optional(s.string()),
  flagKey: s.string(),
  eventType: s.string(),
  eventTime: s.int(),
  description: s.string(),
  auditLogEntryId: s.optional(s.string()),
  member: s.optional(s.lazy(() => flagEventMemberRepSchema)),
  actions: s.optional(s.array(s.string())),
  impact: flagEventImpactRepSchema,
  experiments: s.optional(s.lazy(() => flagEventExperimentCollectionSchema)),
});
