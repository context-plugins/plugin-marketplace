import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  kindDeliverdDevReviewsApiSchema,
  type KindDeliverdDevReviewsApi,
} from "./kind-deliverd-dev-reviews-api.js";

export type Reviewer = {
  kind: KindDeliverdDevReviewsApi;
  id: string;
  label: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reviewerSchema: Schema<Reviewer> = s.object<Reviewer>(
  {
    kind: kindDeliverdDevReviewsApiSchema,
    id: s.string(),
    label: s.string(),
  },
  { additionalProperties: s.json() },
);
