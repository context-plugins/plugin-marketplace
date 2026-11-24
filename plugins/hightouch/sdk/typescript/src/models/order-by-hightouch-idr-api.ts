import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderByHightouchIdrApi = {
  CreatedAt: "created_at",
  StartedAt: "started_at",
  FinishedAt: "finished_at",
} as const;
export type OrderByHightouchIdrApi =
  | (typeof OrderByHightouchIdrApi)[keyof typeof OrderByHightouchIdrApi]
  | (string & {});

export const orderByHightouchIdrApiSchema: EnumSchema<OrderByHightouchIdrApi> =
  s.enumOf<OrderByHightouchIdrApi>(OrderByHightouchIdrApi);
