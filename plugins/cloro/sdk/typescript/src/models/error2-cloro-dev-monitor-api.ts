import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  details1CloroDevMonitorApiSchema,
  type Details1CloroDevMonitorApi,
} from "./details1-cloro-dev-monitor-api.js";

export type Error2CloroDevMonitorApi = {
  code?: string;
  message?: string;
  details?: Details1CloroDevMonitorApi;
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error2CloroDevMonitorApiSchema: Schema<Error2CloroDevMonitorApi> =
  s.object<Error2CloroDevMonitorApi>(
    {
      code: s.optional(s.string()),
      message: s.optional(s.string()),
      details: s.optional(s.lazy(() => details1CloroDevMonitorApiSchema)),
      timestamp: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
