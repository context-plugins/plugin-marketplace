import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort = {
  CreatedAt: "created_at",
  CreatedAt2: "-created_at",
  ModifiedAt: "modified_at",
  ModifiedAt2: "-modified_at",
  Random: "random",
} as const;
export type Sort = (typeof Sort)[keyof typeof Sort] | (string & {});

export const sortSchema: EnumSchema<Sort> = s.enumOf<Sort>(Sort);
