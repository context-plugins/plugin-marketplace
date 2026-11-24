import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Used to specify the order to sort the list of returned report groups. Valid values are ASCENDING
 * and DESCENDING.
 */
export const SortOrder4 = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
export type SortOrder4 = (typeof SortOrder4)[keyof typeof SortOrder4] | (string & {});

export const sortOrder4Schema: EnumSchema<SortOrder4> = s.enumOf<SortOrder4>(SortOrder4);
