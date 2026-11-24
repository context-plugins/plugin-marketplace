import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderByHightouchDestinationsApi = {
  Id: "id",
  Name: "name",
  Slug: "slug",
  CreatedAt: "createdAt",
  UpdatedAt: "updatedAt",
} as const;
export type OrderByHightouchDestinationsApi =
  | (typeof OrderByHightouchDestinationsApi)[keyof typeof OrderByHightouchDestinationsApi]
  | (string & {});

export const orderByHightouchDestinationsApiSchema: EnumSchema<OrderByHightouchDestinationsApi> =
  s.enumOf<OrderByHightouchDestinationsApi>(OrderByHightouchDestinationsApi);
