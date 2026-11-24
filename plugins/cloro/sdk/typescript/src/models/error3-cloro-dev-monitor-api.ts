import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  code1CloroDevMonitorApiSchema,
  type Code1CloroDevMonitorApi,
} from "./code1-cloro-dev-monitor-api.js";

export type Error3CloroDevMonitorApi = {
  code?: Code1CloroDevMonitorApi;
  message?: string;
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error3CloroDevMonitorApiSchema: Schema<Error3CloroDevMonitorApi> =
  s.object<Error3CloroDevMonitorApi>(
    {
      code: s.optional(s.lazy(() => code1CloroDevMonitorApiSchema)),
      message: s.optional(s.string()),
      timestamp: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
