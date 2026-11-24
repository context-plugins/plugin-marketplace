import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * What happens when every source is missing or empty on a matching row. "useFallback" (default)
 * emits the fallback value, which is required in that mode; "nextRule" lets the row fall through to
 * the next rule in the group.
 */
export const OnMissing = {
  UseFallback: "useFallback",
  NextRule: "nextRule",
} as const;
export type OnMissing = (typeof OnMissing)[keyof typeof OnMissing] | (string & {});

export const onMissingSchema: EnumSchema<OnMissing> = s.enumOf<OnMissing>(OnMissing);
