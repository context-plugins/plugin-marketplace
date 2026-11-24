import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderByHightouchEventsApi = {
  Id: "id",
  Name: "name",
  CreatedAt: "createdAt",
  UpdatedAt: "updatedAt",
} as const;
export type OrderByHightouchEventsApi =
  | (typeof OrderByHightouchEventsApi)[keyof typeof OrderByHightouchEventsApi]
  | (string & {});

export const orderByHightouchEventsApiSchema: EnumSchema<OrderByHightouchEventsApi> =
  s.enumOf<OrderByHightouchEventsApi>(OrderByHightouchEventsApi);
