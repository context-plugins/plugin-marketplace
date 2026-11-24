import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createdAtSchema, type CreatedAt } from "./unions/created-at.js";
import { endTimeSchema, type EndTime } from "./unions/end-time.js";
import { environmentHourlyRateSchema, type EnvironmentHourlyRate } from "./unions/environment-hourly-rate.js";
import { environmentIdSchema, type EnvironmentId } from "./unions/environment-id.js";
import {
  environmentTotalRuntimeSecondsSchema,
  type EnvironmentTotalRuntimeSeconds,
} from "./unions/environment-total-runtime-seconds.js";
import {
  statusHudPlatformInstancesApiSchema,
  type StatusHudPlatformInstancesApi,
} from "./unions/status-hud-platform-instances-api.js";

export type TraceUsageBreakdown = {
  traceId: string;
  createdAt?: CreatedAt;
  endTime?: EndTime;
  status?: StatusHudPlatformInstancesApi;
  environmentId?: EnvironmentId;
  /** @default 0 */
  environmentCost?: number;
  /** @default 0 */
  environmentTransactions?: number;
  environmentHourlyRate?: EnvironmentHourlyRate;
  /** @default false */
  environmentStillRunning?: boolean;
  /** @default 0 */
  environmentBaselineCost?: number;
  /** @default 0 */
  environmentAdditionalCost?: number;
  /** @default 5 */
  environmentBaselineMinutes?: number;
  /** @default 0 */
  environmentAdditionalMinutes?: number;
  environmentTotalRuntimeSeconds?: EnvironmentTotalRuntimeSeconds;
  /** @default 0 */
  inferenceCost?: number;
  /** @default 0 */
  inferenceCalls?: number;
  /** @default false */
  inferenceCostIncomplete?: boolean;
  /** @default 0 */
  agentActions?: number;
  /** @default 0 */
  totalCost?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceUsageBreakdownSchema: Schema<TraceUsageBreakdown> = s.object<TraceUsageBreakdown>(
  {
    traceId: s.string(),
    createdAt: s.optional(s.lazy(() => createdAtSchema)),
    endTime: s.optional(s.lazy(() => endTimeSchema)),
    status: s.optional(s.lazy(() => statusHudPlatformInstancesApiSchema)),
    environmentId: s.optional(s.lazy(() => environmentIdSchema)),
    environmentCost: s.defaulted(s.float64(), 0),
    environmentTransactions: s.defaulted(s.int(), 0),
    environmentHourlyRate: s.optional(s.lazy(() => environmentHourlyRateSchema)),
    environmentStillRunning: s.defaulted(s.boolean(), false),
    environmentBaselineCost: s.defaulted(s.float64(), 0),
    environmentAdditionalCost: s.defaulted(s.float64(), 0),
    environmentBaselineMinutes: s.defaulted(s.int(), 5),
    environmentAdditionalMinutes: s.defaulted(s.int(), 0),
    environmentTotalRuntimeSeconds: s.optional(s.lazy(() => environmentTotalRuntimeSecondsSchema)),
    inferenceCost: s.defaulted(s.float64(), 0),
    inferenceCalls: s.defaulted(s.int(), 0),
    inferenceCostIncomplete: s.defaulted(s.boolean(), false),
    agentActions: s.defaulted(s.int(), 0),
    totalCost: s.defaulted(s.float64(), 0),
    _keysMap: {
      traceId: "trace_id",
      createdAt: "created_at",
      endTime: "end_time",
      environmentId: "environment_id",
      environmentCost: "environment_cost",
      environmentTransactions: "environment_transactions",
      environmentHourlyRate: "environment_hourly_rate",
      environmentStillRunning: "environment_still_running",
      environmentBaselineCost: "environment_baseline_cost",
      environmentAdditionalCost: "environment_additional_cost",
      environmentBaselineMinutes: "environment_baseline_minutes",
      environmentAdditionalMinutes: "environment_additional_minutes",
      environmentTotalRuntimeSeconds: "environment_total_runtime_seconds",
      inferenceCost: "inference_cost",
      inferenceCalls: "inference_calls",
      inferenceCostIncomplete: "inference_cost_incomplete",
      agentActions: "agent_actions",
      totalCost: "total_cost",
    },
  },
  { additionalProperties: s.json() },
);
