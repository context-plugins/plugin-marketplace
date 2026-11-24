import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The criterion to be used to list report groups shared with the current Amazon Web Services
 * account or user. Valid values include: ARN: List based on the ARN. MODIFIED_TIME: List based on
 * when information about the shared report group was last changed.
 */
export const SortBy3 = {
  Arn: "ARN",
  ModifiedTime: "MODIFIED_TIME",
} as const;
export type SortBy3 = (typeof SortBy3)[keyof typeof SortBy3] | (string & {});

export const sortBy3Schema: EnumSchema<SortBy3> = s.enumOf<SortBy3>(SortBy3);
