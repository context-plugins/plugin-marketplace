import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { comparator4Schema, type Comparator4 } from "./comparator4.js";
import { dataKeyTypeSchema, type DataKeyType } from "./data-key-type.js";

export type UserCustomFilter = {
  /** Comparator to use */
  comparator: Comparator4;
  /** Data Key used for custom data */
  dataKey: string;
  /** Data Key Type used for custom data */
  dataKeyType: DataKeyType;
  /**
   * An array of values is required for all filters except when the comparator is 'exist' or
   * '!exist'
   */
  values?: Record<string, unknown>;
  /** Filter type of this audience @default "user" */
  type?: "user";
  /** Sub type of this filter @default "customData" */
  subType?: "customData";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userCustomFilterProperties: s.Shape<UserCustomFilter> = {
  comparator: comparator4Schema,
  dataKey: s.string(),
  dataKeyType: dataKeyTypeSchema,
  values: s.optional(s.record(s.string(), s.unknown())),
  type: s.defaulted(s.literal("user"), "user"),
  subType: s.defaulted(s.literal("customData"), "customData"),
};

export const userCustomFilterInternalSchema: Schema<UserCustomFilter> = s.object<UserCustomFilter>(
  userCustomFilterProperties,
  { additionalProperties: s.json() },
);

export const userCustomFilterSchema: Schema<UserCustomFilter> = s.lazySchema(() =>
  s.object<UserCustomFilter>(
    {
      ...userCustomFilterProperties,
      dataKey: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
