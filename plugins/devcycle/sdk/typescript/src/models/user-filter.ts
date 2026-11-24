import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { comparatorSchema, type Comparator } from "./comparator.js";
import { subTypeSchema, type SubType } from "./sub-type.js";

export type UserFilter = {
  /** Sub type of this filter */
  subType: SubType;
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

export const userFilterSchema: Schema<UserFilter> = s.object<UserFilter>(
  {
    subType: subTypeSchema,
    comparator: comparatorSchema,
    values: s.optional(s.array(s.string())),
    type: s.defaulted(s.literal("user"), "user"),
  },
  { additionalProperties: s.json() },
);
