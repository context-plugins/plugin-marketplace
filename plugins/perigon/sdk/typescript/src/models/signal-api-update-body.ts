import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { classificationType1Schema, type ClassificationType1 } from "./classification-type1.js";
import { complexAllEndpointQuerySchema, type ComplexAllEndpointQuery } from "./complex-all-endpoint-query.js";
import { entityGroupSchema, type EntityGroup } from "./entity-group.js";
import {
  signalMonitoringPlanDataSchemaSchema,
  type SignalMonitoringPlanDataSchema,
} from "./signal-monitoring-plan-data-schema.js";
import {
  signalMonitoringPlanNewsletterConfigSchema,
  type SignalMonitoringPlanNewsletterConfig,
} from "./signal-monitoring-plan-newsletter-config.js";
import {
  signalSchedulePolicyInternalSchema,
  signalSchedulePolicySchema,
  type SignalSchedulePolicy,
} from "./signal-schedule-policy.js";
import { signalXQuerySchema, type SignalXQuery } from "./signal-xquery.js";

export type SignalApiUpdateBody = {
  /** New display name for the monitor. Must be non-blank and at most 256 characters. */
  name: string;
  /** New classification behavior. Accepts EVENT, MENTIONS, or TOPIC. */
  classificationType: ClassificationType1;
  /** New plain-language monitoring objective. Must be non-blank and at most 4,096 characters. */
  monitoringObjective: string;
  /**
   * New instructions used to guide monitor processing. Limited to 8,192 characters and may be
   * cleared with null.
   */
  prompt?: string | null;
  /** Schema for the structured data extracted into each matching event. */
  dataSchema: SignalMonitoringPlanDataSchema;
  newsletterConfig?: SignalMonitoringPlanNewsletterConfig;
  /** Replacement entity groups for the monitor. Send an empty list to remove all groups. */
  entityGroups: EntityGroup[];
  /** Article search filters that determine which content the monitor evaluates. */
  query: ComplexAllEndpointQuery;
  schedulePolicy?: SignalSchedulePolicy;
  /**
   * Numeric ID of a visible watchlist in the monitor's organization to associate with the monitor.
   */
  watchlistId?: number | null;
  /**
   * Replacement UUIDs of verified, non-archived contact points. Send an empty list to remove all
   * contact points.
   */
  contactPointIds: string[];
  xQuery?: SignalXQuery;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signalApiUpdateBodyProperties: s.Shape<SignalApiUpdateBody> = {
  name: s.string(),
  classificationType: classificationType1Schema,
  monitoringObjective: s.string(),
  prompt: s.optionalNullable(s.string()),
  dataSchema: signalMonitoringPlanDataSchemaSchema,
  newsletterConfig: s.optional(s.lazy(() => signalMonitoringPlanNewsletterConfigSchema)),
  entityGroups: s.array(s.lazy(() => entityGroupSchema)),
  query: complexAllEndpointQuerySchema,
  schedulePolicy: s.optional(s.lazy(() => signalSchedulePolicyInternalSchema)),
  watchlistId: s.optionalNullable(s.int()),
  contactPointIds: s.array(s.string()),
  xQuery: s.optional(s.lazy(() => signalXQuerySchema)),
};

export const signalApiUpdateBodyInternalSchema: Schema<SignalApiUpdateBody> = s.object<SignalApiUpdateBody>(
  signalApiUpdateBodyProperties,
  { additionalProperties: s.json() },
);

export const signalApiUpdateBodySchema: Schema<SignalApiUpdateBody> = s.lazySchema(() =>
  s.object<SignalApiUpdateBody>(
    {
      ...signalApiUpdateBodyProperties,
      name: s.string().check(s.minLength(0), s.maxLength(256)),
      monitoringObjective: s.string().check(s.minLength(0), s.maxLength(4096)),
      prompt: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(8192))),
      schedulePolicy: s.optional(s.lazy(() => signalSchedulePolicySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
