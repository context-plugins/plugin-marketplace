import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dimensionsTypesSchema, type DimensionsTypes } from "./dimensions-types.js";
import { modeSchema, type Mode } from "./mode.js";

/**
 * To include or exclude certain values. When using allocation rules as a filter, both the type and
 * the ID must be "allocation_rule", and the values array contains the allocation rule IDs. When
 * using allocations as a filter, the type must be "allocation" and the ID is the actual allocation
 * group ID.
 */
export type ExternalConfigFilter = {
  /**
   * Dimension key to filter on. Must pair with `type` and match a dimension returned by `GET
   * /analytics/v1/dimensions` (for example, `service_description` with `type: fixed`). For
   * `allocation_rule`, use `allocation_rule`. For `allocation`, use the allocation group ID. See
   * `DimensionsTypes` for how each `type` uses `id`.
   */
  id: string;
  /**
   * Dimension filter type. Always pair `type` with `id` on scope filters. Discover valid `id` +
   * `type` pairs for your account with `GET /analytics/v1/dimensions`. `allocation_rule` replaces
   * `attribution`; `allocation` replaces `attribution_group`.
   */
  type: DimensionsTypes;
  /**
   * List of values to include or exclude. Must match exact strings from your billing or DataHub
   * data for the dimension (for example, `Amazon Simple Storage Service` for AWS S3 on
   * `service_description`). For `allocation_rule`, use allocation rule IDs.
   */
  values?: string[];
  /**
   * Controls how the dimension’s `values` are matched when the alert query runs. If mode is
   * omitted, behavior defaults to is.
   */
  mode?: Mode;
  /**
   * Set to `true` to exclude the set values. If inverse is omitted, behavior defaults to `false`.
   */
  inverse?: boolean;
  /**
   * If true, string matching is case-insensitive. Effective only for starts_with, ends_with, and
   * contains modes; ignored otherwise.
   *
   * @default false
   */
  caseInsensitive?: boolean;
  /**
   * Include rows where the dimension is null. If includeNull is omitted, behavior defaults to
   * `false`.
   *
   * @default false
   */
  includeNull?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalConfigFilterSchema: Schema<ExternalConfigFilter> = s.object<ExternalConfigFilter>(
  {
    id: s.string(),
    type: dimensionsTypesSchema,
    values: s.optional(s.array(s.string())),
    mode: s.optional(s.lazy(() => modeSchema)),
    inverse: s.optional(s.boolean()),
    caseInsensitive: s.defaulted(s.boolean(), false),
    includeNull: s.defaulted(s.boolean(), false),
  },
  { additionalProperties: s.json() },
);
