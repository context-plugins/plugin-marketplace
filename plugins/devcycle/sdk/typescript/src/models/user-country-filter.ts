import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { comparatorSchema, type Comparator } from "./comparator.js";

export type UserCountryFilter = {
  /** Sub type of this filter @default "country" */
  subType?: "country";
  /** Comparator to use */
  comparator: Comparator;
  /**
   * An array of values is required for all filters except when the comparator is 'exist' or
   * '!exist'
   */
  values?: string[];
  /** Filter type of this audience @default "user" */
  type?: "user";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userCountryFilterSchema: Schema<UserCountryFilter> = s.object<UserCountryFilter>(
  {
    subType: s.defaulted(s.literal("country"), "country"),
    comparator: comparatorSchema,
    values: s.optional(s.array(s.string())),
    type: s.defaulted(s.literal("user"), "user"),
  },
  { additionalProperties: s.json() },
);
