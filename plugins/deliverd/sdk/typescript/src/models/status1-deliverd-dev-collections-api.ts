import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status1DeliverdDevCollectionsApi = {
  Pending: "pending",
  Submitted: "submitted",
} as const;
export type Status1DeliverdDevCollectionsApi =
  | (typeof Status1DeliverdDevCollectionsApi)[keyof typeof Status1DeliverdDevCollectionsApi]
  | (string & {});

export const status1DeliverdDevCollectionsApiSchema: EnumSchema<Status1DeliverdDevCollectionsApi> =
  s.enumOf<Status1DeliverdDevCollectionsApi>(Status1DeliverdDevCollectionsApi);
