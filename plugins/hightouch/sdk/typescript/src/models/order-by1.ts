import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderBy1 = {
  Id: "id",
  CreatedAt: "createdAt",
  StartedAt: "startedAt",
  FinishedAt: "finishedAt",
} as const;
export type OrderBy1 = (typeof OrderBy1)[keyof typeof OrderBy1] | (string & {});

export const orderBy1Schema: EnumSchema<OrderBy1> = s.enumOf<OrderBy1>(OrderBy1);
