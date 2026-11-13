import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Which records to update if multiple records are found to match `require`.
 *   * `first` - the first matching record (default)
 *   * `none` - do not update anything
 *   * `all` - update all matches
 */
export const Onmany = {
  First: "first",
  None: "none",
  All: "all",
} as const;
export type Onmany = (typeof Onmany)[keyof typeof Onmany] | (string & {});

export const onmanySchema: EnumSchema<Onmany> = s.enumOf<Onmany>(Onmany);
