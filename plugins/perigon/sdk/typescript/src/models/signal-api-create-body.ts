import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { classificationType2Schema, type ClassificationType2 } from "./classification-type2.js";
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
import {
  status1PerigonMonitorsApiSchema,
  type Status1PerigonMonitorsApi,
} from "./status1-perigon-monitors-api.js";

export type SignalApiCreateBody = {
  /** Display name for the monitor. Must be non-blank and at most 256 characters. */
  name: string;
  /** Required initial monitor status. Accepts ACTIVE or DRAFT. */
  status?: Status1PerigonMonitorsApi | null;
  /** How matching content is classified. Accepts EVENT, MENTIONS, or TOPIC. */
  classificationType: ClassificationType2;
  /**
   * Plain-language objective that defines what the monitor tracks. Must be non-blank and at most
   * 4,096 characters.
   */
  monitoringObjective: string;
  /** Optional instructions used to guide monitor processing. Limited to 8,192 characters. */
  prompt?: string | null;
  /** Schema for the structured data extracted into each matching event. */
  dataSchema: SignalMonitoringPlanDataSchema;
  newsletterConfig?: SignalMonitoringPlanNewsletterConfig;
  /**
   * Entity groups the monitor should identify in matching content. Null is treated as an empty
   * list.
   */
  entityGroups?: EntityGroup[] | null;
  /** Article search filters that determine which content the monitor evaluates. */
  query: ComplexAllEndpointQuery;
  schedulePolicy?: SignalSchedulePolicy;
  /**
   * Numeric ID of a visible watchlist in the monitor's organization to associate with the monitor.
   */
  watchlistId?: number | null;
  /** UUIDs of verified, non-archived contact points that receive monitor notifications. */
  contactPointIds?: string[] | null;
  xQuery?: SignalXQuery;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signalApiCreateBodyProperties: s.Shape<SignalApiCreateBody> = {
  name: s.string(),
  status: s.optionalNullable(s.lazy(() => status1PerigonMonitorsApiSchema)),
  classificationType: classificationType2Schema,
  monitoringObjective: s.string(),
  prompt: s.optionalNullable(s.string()),
  dataSchema: signalMonitoringPlanDataSchemaSchema,
  newsletterConfig: s.optional(s.lazy(() => signalMonitoringPlanNewsletterConfigSchema)),
  entityGroups: s.optionalNullable(s.array(s.lazy(() => entityGroupSchema))),
  query: complexAllEndpointQuerySchema,
  schedulePolicy: s.optional(s.lazy(() => signalSchedulePolicyInternalSchema)),
  watchlistId: s.optionalNullable(s.int()),
  contactPointIds: s.optionalNullable(s.array(s.string())),
  xQuery: s.optional(s.lazy(() => signalXQuerySchema)),
};

export const signalApiCreateBodyInternalSchema: Schema<SignalApiCreateBody> = s.object<SignalApiCreateBody>(
  signalApiCreateBodyProperties,
  { additionalProperties: s.json() },
);

export const signalApiCreateBodySchema: Schema<SignalApiCreateBody> = s.lazySchema(() =>
  s.object<SignalApiCreateBody>(
    {
      ...signalApiCreateBodyProperties,
      name: s.string().check(s.minLength(0), s.maxLength(256)),
      monitoringObjective: s.string().check(s.minLength(0), s.maxLength(4096)),
      prompt: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(8192))),
      schedulePolicy: s.optional(s.lazy(() => signalSchedulePolicySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
