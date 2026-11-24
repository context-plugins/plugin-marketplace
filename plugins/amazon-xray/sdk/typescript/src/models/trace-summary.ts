import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { availabilityZoneDetailSchema, type AvailabilityZoneDetail } from "./availability-zone-detail.js";
import { errorRootCauseSchema, type ErrorRootCause } from "./error-root-cause.js";
import { faultRootCauseSchema, type FaultRootCause } from "./fault-root-cause.js";
import { httpSchema, type Http } from "./http.js";
import { instanceIdDetailSchema, type InstanceIdDetail } from "./instance-id-detail.js";
import { resourceArnDetailSchema, type ResourceArnDetail } from "./resource-arn-detail.js";
import { responseTimeRootCauseSchema, type ResponseTimeRootCause } from "./response-time-root-cause.js";
import { serviceIdSchema, type ServiceId } from "./service-id.js";
import { traceUserSchema, type TraceUser } from "./trace-user.js";

export type TraceSummary = {
  /** The unique identifier for the request that generated the trace's segments and subsegments. */
  id?: string;
  /** The start time of a trace, based on the earliest trace segment start time. */
  startTime?: Date;
  /**
   * The length of time in seconds between the start time of the earliest segment that started and
   * the end time of the last segment that completed.
   */
  duration?: number;
  /**
   * The length of time in seconds between the start and end times of the root segment. If the
   * service performs work asynchronously, the response time measures the time before the response
   * is sent to the user, while the duration measures the amount of time before the last traced
   * activity completes.
   */
  responseTime?: number;
  /** The root segment document has a 500 series error. */
  hasFault?: boolean;
  /** The root segment document has a 400 series error. */
  hasError?: boolean;
  /** One or more of the segment documents has a 429 throttling error. */
  hasThrottle?: boolean;
  /** One or more of the segment documents is in progress. */
  isPartial?: boolean;
  http?: Http;
  /** Annotations from the trace's segment documents. */
  annotations?: Record<string, unknown>;
  /** Users from the trace's segment documents. */
  users?: TraceUser[];
  /** Service IDs from the trace's segment documents. */
  serviceIds?: ServiceId[];
  /** A list of resource ARNs for any resource corresponding to the trace segments. */
  resourceArNs?: ResourceArnDetail[];
  /** A list of EC2 instance IDs for any instance corresponding to the trace segments. */
  instanceIds?: InstanceIdDetail[];
  /** A list of Availability Zones for any zone corresponding to the trace segments. */
  availabilityZones?: AvailabilityZoneDetail[];
  entryPoint?: ServiceId;
  /** A collection of FaultRootCause structures corresponding to the trace segments. */
  faultRootCauses?: FaultRootCause[];
  /** A collection of ErrorRootCause structures corresponding to the trace segments. */
  errorRootCauses?: ErrorRootCause[];
  /** A collection of ResponseTimeRootCause structures corresponding to the trace segments. */
  responseTimeRootCauses?: ResponseTimeRootCause[];
  /** The revision number of a trace. */
  revision?: number;
  /** The matched time stamp of a defined event. */
  matchedEventTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceSummarySchema: Schema<TraceSummary> = s.object<TraceSummary>(
  {
    id: s.optional(s.string()),
    startTime: s.optional(s.dateTime()),
    duration: s.optional(s.float64()),
    responseTime: s.optional(s.float64()),
    hasFault: s.optional(s.boolean()),
    hasError: s.optional(s.boolean()),
    hasThrottle: s.optional(s.boolean()),
    isPartial: s.optional(s.boolean()),
    http: s.optional(s.lazy(() => httpSchema)),
    annotations: s.optional(s.record(s.string(), s.unknown())),
    users: s.optional(s.array(s.lazy(() => traceUserSchema))),
    serviceIds: s.optional(s.array(s.lazy(() => serviceIdSchema))),
    resourceArNs: s.optional(s.array(s.lazy(() => resourceArnDetailSchema))),
    instanceIds: s.optional(s.array(s.lazy(() => instanceIdDetailSchema))),
    availabilityZones: s.optional(s.array(s.lazy(() => availabilityZoneDetailSchema))),
    entryPoint: s.optional(s.lazy(() => serviceIdSchema)),
    faultRootCauses: s.optional(s.array(s.lazy(() => faultRootCauseSchema))),
    errorRootCauses: s.optional(s.array(s.lazy(() => errorRootCauseSchema))),
    responseTimeRootCauses: s.optional(s.array(s.lazy(() => responseTimeRootCauseSchema))),
    revision: s.optional(s.int()),
    matchedEventTime: s.optional(s.dateTime()),
    _keysMap: {
      id: "Id",
      startTime: "StartTime",
      duration: "Duration",
      responseTime: "ResponseTime",
      hasFault: "HasFault",
      hasError: "HasError",
      hasThrottle: "HasThrottle",
      isPartial: "IsPartial",
      http: "Http",
      annotations: "Annotations",
      users: "Users",
      serviceIds: "ServiceIds",
      resourceArNs: "ResourceARNs",
      instanceIds: "InstanceIds",
      availabilityZones: "AvailabilityZones",
      entryPoint: "EntryPoint",
      faultRootCauses: "FaultRootCauses",
      errorRootCauses: "ErrorRootCauses",
      responseTimeRootCauses: "ResponseTimeRootCauses",
      revision: "Revision",
      matchedEventTime: "MatchedEventTime",
    },
  },
  { additionalProperties: s.json() },
);
