import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  detailsCloroDevMonitorApiSchema,
  type DetailsCloroDevMonitorApi,
} from "./details-cloro-dev-monitor-api.js";

export type ErrorCloroDevMonitorApi = {
  code?: string;
  message?: string;
  details?: DetailsCloroDevMonitorApi;
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorCloroDevMonitorApiSchema: Schema<ErrorCloroDevMonitorApi> =
  s.object<ErrorCloroDevMonitorApi>(
    {
      code: s.optional(s.string()),
      message: s.optional(s.string()),
      details: s.optional(s.lazy(() => detailsCloroDevMonitorApiSchema)),
      timestamp: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
