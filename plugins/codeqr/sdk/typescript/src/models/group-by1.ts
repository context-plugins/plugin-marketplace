import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GroupBy1 = {
  TagId: "tagId",
} as const;
export type GroupBy1 = (typeof GroupBy1)[keyof typeof GroupBy1] | (string & {});

export const groupBy1Schema: EnumSchema<GroupBy1> = s.enumOf<GroupBy1>(GroupBy1);
