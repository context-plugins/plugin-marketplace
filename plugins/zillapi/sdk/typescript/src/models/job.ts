import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chainStageSchema, type ChainStage } from "./chain-stage.js";
import {
  statusZillapiZillowPropertyDataJobsApiSchema,
  type StatusZillapiZillowPropertyDataJobsApi,
} from "./status-zillapi-zillow-property-data-jobs-api.js";
import { typeSchema, type Type } from "./type.js";

export type Job = {
  id?: string;
  type?: Type;
  status?: StatusZillapiZillowPropertyDataJobsApi;
  resultCount?: number | null;
  error?: string | null;
  /** search or detail for chained jobs, null otherwise. */
  chainStage?: ChainStage | null;
  createdAt?: Date;
  startedAt?: Date | null;
  completedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobSchema: Schema<Job> = s.object<Job>(
  {
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => typeSchema)),
    status: s.optional(s.lazy(() => statusZillapiZillowPropertyDataJobsApiSchema)),
    resultCount: s.optionalNullable(s.int()),
    error: s.optionalNullable(s.string()),
    chainStage: s.optionalNullable(s.lazy(() => chainStageSchema)),
    createdAt: s.optional(s.dateTime()),
    startedAt: s.optionalNullable(s.dateTime()),
    completedAt: s.optionalNullable(s.dateTime()),
    _keysMap: {
      resultCount: "result_count",
      chainStage: "chain_stage",
      createdAt: "created_at",
      startedAt: "started_at",
      completedAt: "completed_at",
    },
  },
  { additionalProperties: s.json() },
);
