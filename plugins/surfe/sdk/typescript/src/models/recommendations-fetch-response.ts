import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companySchema, type Company } from "./company.js";

export type RecommendationsFetchResponse = {
  companies?: Company[];
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recommendationsFetchResponseSchema: Schema<RecommendationsFetchResponse> =
  s.object<RecommendationsFetchResponse>(
    {
      companies: s.optional(s.array(s.lazy(() => companySchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
