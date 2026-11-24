import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  errorDeliverdDevPoliciesApiSchema,
  type ErrorDeliverdDevPoliciesApi,
} from "./error-deliverd-dev-policies-api.js";

export type ApiV1Policies400Error1 = {
  error: ErrorDeliverdDevPoliciesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1Policies400Error1Schema: Schema<ApiV1Policies400Error1> = s.object<ApiV1Policies400Error1>(
  {
    error: errorDeliverdDevPoliciesApiSchema,
  },
  { additionalProperties: s.json() },
);
