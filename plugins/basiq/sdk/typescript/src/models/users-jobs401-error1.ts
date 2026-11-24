import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum1ConnectJobsApiSchema, type Datum1ConnectJobsApi } from "./datum1-connect-jobs-api.js";

export type UsersJobs401Error1 = {
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum1ConnectJobsApi[];
  /** Always "list". */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersJobs401Error1Schema: Schema<UsersJobs401Error1> = s.object<UsersJobs401Error1>(
  {
    correlationId: s.string(),
    data: s.array(s.lazy(() => datum1ConnectJobsApiSchema)),
    type: s.string(),
  },
  { additionalProperties: s.json() },
);
