import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiEvaluateDataStandardScopeResponse = {
  dataStandardId?: string;
  datasetIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiEvaluateDataStandardScopeResponseSchema: Schema<PublicApiEvaluateDataStandardScopeResponse> =
  s.object<PublicApiEvaluateDataStandardScopeResponse>(
    {
      dataStandardId: s.optional(s.string()),
      datasetIds: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
