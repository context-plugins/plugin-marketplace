import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The criterion to be used to list build projects shared with the current Amazon Web Services
 * account or user. Valid values include: ARN: List based on the ARN. MODIFIED_TIME: List based on
 * when information about the shared project was last changed.
 */
export const SortBy2 = {
  Arn: "ARN",
  ModifiedTime: "MODIFIED_TIME",
} as const;
export type SortBy2 = (typeof SortBy2)[keyof typeof SortBy2] | (string & {});

export const sortBy2Schema: EnumSchema<SortBy2> = s.enumOf<SortBy2>(SortBy2);
