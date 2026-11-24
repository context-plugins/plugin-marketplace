import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscRedditPostRequirementsResponse = {
  isFlairRequired: boolean;
  isFlairEnabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscRedditPostRequirementsResponseSchema: Schema<ApiV1MiscRedditPostRequirementsResponse> =
  s.object<ApiV1MiscRedditPostRequirementsResponse>(
    {
      isFlairRequired: s.boolean(),
      isFlairEnabled: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
