import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const KindDeliverdDevReviewsApi = {
  User: "user",
  Guest: "guest",
} as const;
export type KindDeliverdDevReviewsApi =
  | (typeof KindDeliverdDevReviewsApi)[keyof typeof KindDeliverdDevReviewsApi]
  | (string & {});

export const kindDeliverdDevReviewsApiSchema: EnumSchema<KindDeliverdDevReviewsApi> =
  s.enumOf<KindDeliverdDevReviewsApi>(KindDeliverdDevReviewsApi);
