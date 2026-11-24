import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  errorDeliverdDevPoliciesApiSchema,
  type ErrorDeliverdDevPoliciesApi,
} from "./error-deliverd-dev-policies-api.js";

export type ApiV1PoliciesVersions400Error = {
  error: ErrorDeliverdDevPoliciesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PoliciesVersions400ErrorSchema: Schema<ApiV1PoliciesVersions400Error> =
  s.object<ApiV1PoliciesVersions400Error>(
    {
      error: errorDeliverdDevPoliciesApiSchema,
    },
    { additionalProperties: s.json() },
  );
