import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultConnectJobsApiSchema, type ResultConnectJobsApi } from "./result-connect-jobs-api.js";

export type Step = {
  title?: string;
  status?: string;
  result?: ResultConnectJobsApi | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stepSchema: Schema<Step> = s.object<Step>(
  {
    title: s.optional(s.string()),
    status: s.optional(s.string()),
    result: s.optionalNullable(s.lazy(() => resultConnectJobsApiSchema)),
  },
  { additionalProperties: s.json() },
);
