import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GroupBy3 = {
  FolderId: "folderId",
} as const;
export type GroupBy3 = (typeof GroupBy3)[keyof typeof GroupBy3] | (string & {});

export const groupBy3Schema: EnumSchema<GroupBy3> = s.enumOf<GroupBy3>(GroupBy3);
