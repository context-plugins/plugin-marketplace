import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiKeyIdSchema, type ApiKeyId } from "./unions/api-key-id.js";
import { apiKeyNameSchema, type ApiKeyName } from "./unions/api-key-name.js";
import { hourlyRateSchema, type HourlyRate } from "./unions/hourly-rate.js";
import { terminatedAtSchema, type TerminatedAt } from "./unions/terminated-at.js";
import { userIdSchema, type UserId } from "./unions/user-id.js";
import { userNameSchema, type UserName } from "./unions/user-name.js";

export type EnvironmentUsageRow = {
  id: string;
  createdAt: Date;
  terminatedAt?: TerminatedAt;
  status: string;
  hourlyRate?: HourlyRate;
  userId?: UserId;
  userName?: UserName;
  apiKeyId?: ApiKeyId;
  apiKeyName?: ApiKeyName;
  /** @default 0 */
  durationHours?: number;
  /** @default 0 */
  cost?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentUsageRowSchema: Schema<EnvironmentUsageRow> = s.object<EnvironmentUsageRow>(
  {
    id: s.string(),
    createdAt: s.dateTime(),
    terminatedAt: s.optional(s.lazy(() => terminatedAtSchema)),
    status: s.string(),
    hourlyRate: s.optional(s.lazy(() => hourlyRateSchema)),
    userId: s.optional(s.lazy(() => userIdSchema)),
    userName: s.optional(s.lazy(() => userNameSchema)),
    apiKeyId: s.optional(s.lazy(() => apiKeyIdSchema)),
    apiKeyName: s.optional(s.lazy(() => apiKeyNameSchema)),
    durationHours: s.defaulted(s.float64(), 0),
    cost: s.defaulted(s.float64(), 0),
    _keysMap: {
      createdAt: "created_at",
      terminatedAt: "terminated_at",
      hourlyRate: "hourly_rate",
      userId: "user_id",
      userName: "user_name",
      apiKeyId: "api_key_id",
      apiKeyName: "api_key_name",
      durationHours: "duration_hours",
    },
  },
  { additionalProperties: s.json() },
);
