import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiKeySchema, type ApiKey } from "./unions/api-key.js";
import { timeoutMinutesSchema, type TimeoutMinutes } from "./unions/timeout-minutes.js";

export type InstanceRequest = {
  /** Optional API key for authentication */
  apiKey?: ApiKey;
  /** Timeout in minutes before instance auto-termination */
  timeoutMinutes?: TimeoutMinutes;
};

export const instanceRequestSchema: Schema<InstanceRequest> = s.object<InstanceRequest>({
  apiKey: s.optional(s.lazy(() => apiKeySchema)),
  timeoutMinutes: s.optional(s.lazy(() => timeoutMinutesSchema)),
  _keysMap: {
    apiKey: "api_key",
    timeoutMinutes: "timeout_minutes",
  },
});
