import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * true = add listedAt (the date Mercari shows as "Posted", ISO 8601 UTC) to each result. Slower:
 * each listing is looked up separately. null when a date cannot be read.
 */
export const IncludeListedAt = {
  True: "true",
  False: "false",
} as const;
export type IncludeListedAt = (typeof IncludeListedAt)[keyof typeof IncludeListedAt] | (string & {});

export const includeListedAtSchema: EnumSchema<IncludeListedAt> = s.enumOf<IncludeListedAt>(IncludeListedAt);
