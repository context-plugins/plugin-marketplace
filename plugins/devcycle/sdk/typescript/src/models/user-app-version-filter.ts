import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { comparator2Schema, type Comparator2 } from "./comparator2.js";

export type UserAppVersionFilter = {
  /** Comparator to use */
  comparator: Comparator2;
  /**
   * An array of values is required for all filters except when the comparator is 'exist' or
   * '!exist'
   */
  values?: string[];
  /** Filter type of this audience @default "user" */
  type?: "user";
  /** Sub type of this filter @default "appVersion" */
  subType?: "appVersion";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userAppVersionFilterSchema: Schema<UserAppVersionFilter> = s.object<UserAppVersionFilter>(
  {
    comparator: comparator2Schema,
    values: s.optional(s.array(s.string())),
    type: s.defaulted(s.literal("user"), "user"),
    subType: s.defaulted(s.literal("appVersion"), "appVersion"),
  },
  { additionalProperties: s.json() },
);
