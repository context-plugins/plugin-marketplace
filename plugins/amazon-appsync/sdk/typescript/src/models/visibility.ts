import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Sets the value of the GraphQL API to public (GLOBAL) or private (PRIVATE). If no value is
 * provided, the visibility will be set to GLOBAL by default. This value cannot be changed once the
 * API has been created.
 */
export const Visibility = {
  Global: "GLOBAL",
  Private: "PRIVATE",
} as const;
export type Visibility = (typeof Visibility)[keyof typeof Visibility] | (string & {});

export const visibilitySchema: EnumSchema<Visibility> = s.enumOf<Visibility>(Visibility);
