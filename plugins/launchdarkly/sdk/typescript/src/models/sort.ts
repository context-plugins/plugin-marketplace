import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort = {
  Key: "key",
  Name: "name",
  UpdatedAt: "updatedAt",
} as const;
export type Sort = (typeof Sort)[keyof typeof Sort] | (string & {});

export const sortSchema: EnumSchema<Sort> = s.enumOf<Sort>(Sort);
