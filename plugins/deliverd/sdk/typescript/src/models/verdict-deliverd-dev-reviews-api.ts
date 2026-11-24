import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  verdict1DeliverdDevReviewsApiSchema,
  type Verdict1DeliverdDevReviewsApi,
} from "./verdict1-deliverd-dev-reviews-api.js";

export type VerdictDeliverdDevReviewsApi = {
  verdict: Verdict1DeliverdDevReviewsApi;
  by: string;
  note: string | null;
  at: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const verdictDeliverdDevReviewsApiSchema: Schema<VerdictDeliverdDevReviewsApi> =
  s.object<VerdictDeliverdDevReviewsApi>(
    {
      verdict: verdict1DeliverdDevReviewsApiSchema,
      by: s.string(),
      note: s.nullable(s.string()),
      at: s.string(),
    },
    { additionalProperties: s.json() },
  );
