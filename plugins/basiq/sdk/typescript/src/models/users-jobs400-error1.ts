import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datumConnectJobsApiSchema, type DatumConnectJobsApi } from "./datum-connect-jobs-api.js";

export type UsersJobs400Error1 = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: DatumConnectJobsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersJobs400Error1Schema: Schema<UsersJobs400Error1> = s.object<UsersJobs400Error1>(
  {
    type: s.string(),
    correlationId: s.string(),
    data: s.array(s.lazy(() => datumConnectJobsApiSchema)),
  },
  { additionalProperties: s.json() },
);
