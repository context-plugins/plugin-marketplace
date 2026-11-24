import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderByBundleSocialPostApi = {
  CreatedAt: "createdAt",
  UpdatedAt: "updatedAt",
  PostDate: "postDate",
  PostedDate: "postedDate",
  DeletedAt: "deletedAt",
} as const;
export type OrderByBundleSocialPostApi =
  | (typeof OrderByBundleSocialPostApi)[keyof typeof OrderByBundleSocialPostApi]
  | (string & {});

export const orderByBundleSocialPostApiSchema: EnumSchema<OrderByBundleSocialPostApi> =
  s.enumOf<OrderByBundleSocialPostApi>(OrderByBundleSocialPostApi);
