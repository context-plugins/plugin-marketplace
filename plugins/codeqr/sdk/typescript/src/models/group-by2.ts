import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GroupBy2 = {
  UserId: "userId",
} as const;
export type GroupBy2 = (typeof GroupBy2)[keyof typeof GroupBy2] | (string & {});

export const groupBy2Schema: EnumSchema<GroupBy2> = s.enumOf<GroupBy2>(GroupBy2);
