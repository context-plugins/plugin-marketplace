import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { progressSourceSchema, type ProgressSource } from "./progress-source.js";
import {
  resourceSubtypeAsanaGoalsApiSchema,
  type ResourceSubtypeAsanaGoalsApi,
} from "./resource-subtype-asana-goals-api.js";
import { unitSchema, type Unit } from "./unit.js";

export type Metric = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /**
   * The subtype of this resource. Different subtypes retain many of the same fields and behavior,
   * but may render differently in Asana or represent resources with different semantic meaning.
   */
  resourceSubtype?: ResourceSubtypeAsanaGoalsApi;
  /**
   * *Conditional*. Only relevant for goal metrics of type ‘Number’. This field dictates the number
   * of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest
   * tenth, and so on. Must be between 0 and 6, inclusive. For percentage format, this may be
   * unintuitive, as a value of 0.25 has a precision of 0, while a value of 0.251 has a precision of
   * 1. This is due to 0.25 being displayed as 25%.
   */
  precision?: number;
  /** A supported unit of measure for the goal metric, or none. */
  unit?: Unit;
  /**
   * ISO 4217 currency code to format this custom field. This will be null if the `unit` is not
   * `currency`.
   */
  currencyCode?: string | null;
  /** This number is the start value of a goal metric of type number. */
  initialNumberValue?: number;
  /**
   * This number is the end value of a goal metric of type number. This number cannot equal
   * `initial_number_value`.
   */
  targetNumberValue?: number;
  /** This number is the current value of a goal metric of type number. */
  currentNumberValue?: number;
  /** This string is the current value of a goal metric of type string. */
  currentDisplayValue?: string;
  /**
   * This field defines how the progress value of a goal metric is being calculated. A goal's
   * progress can be provided manually by the user, calculated automatically from contributing
   * subgoals or projects, or managed by an integration with an external data source, such as
   * Salesforce.
   */
  progressSource?: ProgressSource;
  /**
   * *Conditional*. Only relevant for `progress_source` of type `external`. This boolean indicates
   * whether the requester has the ability to update the current value of this metric. This returns
   * `true` if the external metric was created by the requester, `false` otherwise.
   */
  canManage?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricSchema: Schema<Metric> = s.object<Metric>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    resourceSubtype: s.optional(s.lazy(() => resourceSubtypeAsanaGoalsApiSchema)),
    precision: s.optional(s.int()),
    unit: s.optional(s.lazy(() => unitSchema)),
    currencyCode: s.optionalNullable(s.string()),
    initialNumberValue: s.optional(s.float64()),
    targetNumberValue: s.optional(s.float64()),
    currentNumberValue: s.optional(s.float64()),
    currentDisplayValue: s.optional(s.string()),
    progressSource: s.optional(s.lazy(() => progressSourceSchema)),
    canManage: s.optional(s.boolean()),
    _keysMap: {
      resourceType: "resource_type",
      resourceSubtype: "resource_subtype",
      currencyCode: "currency_code",
      initialNumberValue: "initial_number_value",
      targetNumberValue: "target_number_value",
      currentNumberValue: "current_number_value",
      currentDisplayValue: "current_display_value",
      progressSource: "progress_source",
      canManage: "can_manage",
    },
  },
  { additionalProperties: s.json() },
);
