import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusBrowserStackAutomateRestSessionsApiSchema,
  type StatusBrowserStackAutomateRestSessionsApi,
} from "./status-browser-stack-automate-rest-sessions-api.js";

export type AutomateSessionsJsonRequest = {
  status?: StatusBrowserStackAutomateRestSessionsApi;
  reason?: string;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automateSessionsJsonRequestSchema: Schema<AutomateSessionsJsonRequest> =
  s.object<AutomateSessionsJsonRequest>(
    {
      status: s.optional(s.lazy(() => statusBrowserStackAutomateRestSessionsApiSchema)),
      reason: s.optional(s.string()),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
