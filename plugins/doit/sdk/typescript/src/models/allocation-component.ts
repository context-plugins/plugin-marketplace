import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  allocationDimensionsTypesSchema,
  type AllocationDimensionsTypes,
} from "./allocation-dimensions-types.js";
import { modeDoiTAllocationsApiSchema, type ModeDoiTAllocationsApi } from "./mode-doi-tallocations-api.js";

/**
 * A filter component used inside allocation rules. When the type is "allocation_rule", the
 * component references existing allocation rules (nested allocation rules). A maximum nesting depth
 * of 3 levels is supported, and circular references are not allowed.
 */
export type AllocationComponent = {
  /**
   * Key of an existing dimension. Examples: "billing_account_id", "country". When type is
   * "allocation_rule", the key must be set to "allocation_rule". Use `GET /analytics/v1/dimensions`
   * to retrieve all available dimensions.
   */
  key: string;
  /**
   * Dimension filter type for allocation rule components. See `DimensionsTypes` for per-value
   * meanings. Allocation components do not support `allocation`, `attribution`, or
   * `attribution_group` types.
   */
  type: AllocationDimensionsTypes;
  /**
   * Values to filter on. When type is "allocation_rule", the values are IDs of existing allocation
   * rules.
   */
  values: string[];
  /** If true, all selected values will be excluded. @default false */
  inverse?: boolean;
  /** Include null values. @default false */
  includeNull?: boolean;
  /**
   * If true, string matching is case-insensitive. Effective only for starts_with, ends_with, and
   * contains modes; rejected otherwise.
   *
   * @default false
   */
  caseInsensitive?: boolean;
  /**
   * Filter mode to apply. When type is "allocation_rule", only "is" and "contains" modes are
   * supported.
   */
  mode: ModeDoiTAllocationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const allocationComponentSchema: Schema<AllocationComponent> = s.object<AllocationComponent>(
  {
    key: s.string(),
    type: allocationDimensionsTypesSchema,
    values: s.array(s.string()),
    inverse: s.defaulted(s.boolean(), false),
    includeNull: s.defaulted(s.boolean(), false),
    caseInsensitive: s.defaulted(s.boolean(), false),
    mode: modeDoiTAllocationsApiSchema,
  },
  { additionalProperties: s.json() },
);
