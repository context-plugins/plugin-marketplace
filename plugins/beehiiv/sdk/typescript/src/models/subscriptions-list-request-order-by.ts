import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionsListRequestOrderBy = {
  Created: "created",
} as const;
export type SubscriptionsListRequestOrderBy =
  | (typeof SubscriptionsListRequestOrderBy)[keyof typeof SubscriptionsListRequestOrderBy]
  | (string & {});

export const subscriptionsListRequestOrderBySchema: EnumSchema<SubscriptionsListRequestOrderBy> =
  s.enumOf<SubscriptionsListRequestOrderBy>(SubscriptionsListRequestOrderBy);
