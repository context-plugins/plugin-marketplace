import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { classificationTypeSchema, type ClassificationType } from "./classification-type.js";
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
  statusPerigonMonitorsApiSchema,
  type StatusPerigonMonitorsApi,
} from "./status-perigon-monitors-api.js";

/** Monitor payload. */
export type SignalApiDto = {
  /** Unique identifier for the monitor. */
  uuid?: string | null;
  /** Display name of the monitor. */
  name?: string | null;
  /** Date and time the monitor was created, in ISO 8601 format. */
  createdAt?: Date | null;
  /** Date and time the monitor was last updated, in ISO 8601 format. */
  updatedAt?: Date | null;
  /** Current lifecycle status: DRAFT, ACTIVE, STOPPED, or ARCHIVED. */
  status?: StatusPerigonMonitorsApi | null;
  /** How matching content is classified: EVENT, MENTIONS, or TOPIC. */
  classificationType?: ClassificationType | null;
  /** Plain-language objective that defines what the monitor tracks. */
  monitoringObjective?: string | null;
  /** Optional instructions used to guide monitor processing. */
  prompt?: string | null;
  dataSchema?: SignalMonitoringPlanDataSchema;
  newsletterConfig?: SignalMonitoringPlanNewsletterConfig;
  /** Entity groups the monitor identifies in matching content. */
  entityGroups?: EntityGroup[] | null;
  query?: ComplexAllEndpointQuery;
  schedulePolicy?: SignalSchedulePolicy;
  /** Numeric ID of the watchlist associated with the monitor, if any. */
  watchlistId?: number | null;
  /** UUIDs of contact points configured to receive monitor notifications. */
  contactPointIds?: string[] | null;
  xQuery?: SignalXQuery;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signalApiDtoProperties: s.Shape<SignalApiDto> = {
  uuid: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  createdAt: s.optionalNullable(s.dateTime()),
  updatedAt: s.optionalNullable(s.dateTime()),
  status: s.optionalNullable(s.lazy(() => statusPerigonMonitorsApiSchema)),
  classificationType: s.optionalNullable(s.lazy(() => classificationTypeSchema)),
  monitoringObjective: s.optionalNullable(s.string()),
  prompt: s.optionalNullable(s.string()),
  dataSchema: s.optional(s.lazy(() => signalMonitoringPlanDataSchemaSchema)),
  newsletterConfig: s.optional(s.lazy(() => signalMonitoringPlanNewsletterConfigSchema)),
  entityGroups: s.optionalNullable(s.array(s.lazy(() => entityGroupSchema))),
  query: s.optional(s.lazy(() => complexAllEndpointQuerySchema)),
  schedulePolicy: s.optional(s.lazy(() => signalSchedulePolicyInternalSchema)),
  watchlistId: s.optionalNullable(s.int()),
  contactPointIds: s.optionalNullable(s.array(s.string())),
  xQuery: s.optional(s.lazy(() => signalXQuerySchema)),
};

export const signalApiDtoInternalSchema: Schema<SignalApiDto> = s.object<SignalApiDto>(
  signalApiDtoProperties,
  { additionalProperties: s.json() },
);

export const signalApiDtoSchema: Schema<SignalApiDto> = s.lazySchema(() =>
  s.object<SignalApiDto>(
    {
      ...signalApiDtoProperties,
      schedulePolicy: s.optional(s.lazy(() => signalSchedulePolicySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
