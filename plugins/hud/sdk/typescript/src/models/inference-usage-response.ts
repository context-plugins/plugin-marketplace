import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inferenceUsageLogSchema, type InferenceUsageLog } from "./inference-usage-log.js";

/**
 * Raw log listing for the request table.
 *
 * Aggregates (totals, group-bys) live on ``GET /v2/usage/inference``.
 */
export type InferenceUsageResponse = {
  logs: InferenceUsageLog[];
  totalCount: number;
  teamId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inferenceUsageResponseSchema: Schema<InferenceUsageResponse> = s.object<InferenceUsageResponse>(
  {
    logs: s.array(s.lazy(() => inferenceUsageLogSchema)),
    totalCount: s.int(),
    teamId: s.string(),
    _keysMap: {
      totalCount: "total_count",
      teamId: "team_id",
    },
  },
  { additionalProperties: s.json() },
);
