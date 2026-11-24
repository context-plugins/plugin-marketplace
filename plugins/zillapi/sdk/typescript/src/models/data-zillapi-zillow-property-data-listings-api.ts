import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DataZillapiZillowPropertyDataListingsApi = {
  jobId?: string;
  status?: string;
  /** Present on chained jobs (e.g. "search"). */
  stage?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataZillapiZillowPropertyDataListingsApiSchema: Schema<DataZillapiZillowPropertyDataListingsApi> =
  s.object<DataZillapiZillowPropertyDataListingsApi>(
    {
      jobId: s.optional(s.string()),
      status: s.optional(s.string()),
      stage: s.optionalNullable(s.string()),
      _keysMap: {
        jobId: "job_id",
      },
    },
    { additionalProperties: s.json() },
  );
