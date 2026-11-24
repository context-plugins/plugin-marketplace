import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Verdict1DeliverdDevReviewsApi = {
  Approved: "approved",
  ChangesRequested: "changes_requested",
} as const;
export type Verdict1DeliverdDevReviewsApi =
  | (typeof Verdict1DeliverdDevReviewsApi)[keyof typeof Verdict1DeliverdDevReviewsApi]
  | (string & {});

export const verdict1DeliverdDevReviewsApiSchema: EnumSchema<Verdict1DeliverdDevReviewsApi> =
  s.enumOf<Verdict1DeliverdDevReviewsApi>(Verdict1DeliverdDevReviewsApi);
