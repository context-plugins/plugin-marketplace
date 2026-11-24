import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  errorDeliverdDevReportsApiSchema,
  type ErrorDeliverdDevReportsApi,
} from "./error-deliverd-dev-reports-api.js";

export type ApiV1ReportsVersions409Error1 = {
  error: ErrorDeliverdDevReportsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportsVersions409Error1Schema: Schema<ApiV1ReportsVersions409Error1> =
  s.object<ApiV1ReportsVersions409Error1>(
    {
      error: errorDeliverdDevReportsApiSchema,
    },
    { additionalProperties: s.json() },
  );
