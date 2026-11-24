import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { groupSchema, type Group } from "./group.js";

/** HAR-formatted log entry submitted by a ReadMe Metrics SDK. */
export type MetricsRequest = {
  id?: string;
  group?: Group;
  clientIpAddress?: string;
  development?: boolean;
  /** HAR request object */
  request?: Record<string, unknown>;
  /** HAR response object */
  response?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricsRequestSchema: Schema<MetricsRequest> = s.object<MetricsRequest>(
  {
    id: s.optional(s.string()),
    group: s.optional(s.lazy(() => groupSchema)),
    clientIpAddress: s.optional(s.string()),
    development: s.optional(s.boolean()),
    request: s.optional(s.record(s.string(), s.unknown())),
    response: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      id: "_id",
      clientIpAddress: "clientIPAddress",
    },
  },
  { additionalProperties: s.json() },
);
