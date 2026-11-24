import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  details2CloroDevMonitorApiSchema,
  type Details2CloroDevMonitorApi,
} from "./details2-cloro-dev-monitor-api.js";

export type Error4CloroDevMonitorApi = {
  code?: string;
  message?: string;
  /** One entry per invalid field. Sent on request-body validation errors. */
  details?: Details2CloroDevMonitorApi[];
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error4CloroDevMonitorApiSchema: Schema<Error4CloroDevMonitorApi> =
  s.object<Error4CloroDevMonitorApi>(
    {
      code: s.optional(s.string()),
      message: s.optional(s.string()),
      details: s.optional(s.array(s.lazy(() => details2CloroDevMonitorApiSchema))),
      timestamp: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
