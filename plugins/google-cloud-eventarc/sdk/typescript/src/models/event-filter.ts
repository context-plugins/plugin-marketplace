import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Filters events based on exact matches on the CloudEvents attributes. */
export type EventFilter = {
  /**
   * Required. The name of a CloudEvents attribute. Currently, only a subset of attributes are
   * supported for filtering. You can [retrieve a specific provider's supported event
   * types](/eventarc/docs/list-providers#describe-provider). All triggers MUST provide a filter for
   * the 'type' attribute.
   */
  attribute?: string;
  /**
   * Optional. The operator used for matching the events with the value of the filter. If not
   * specified, only events that have an exact key-value pair specified in the filter are matched.
   * The allowed values are `path_pattern` and `match-path-pattern`. `path_pattern` is only allowed
   * for GCFv1 triggers.
   */
  operator?: string;
  /** Required. The value for the attribute. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventFilterSchema: Schema<EventFilter> = s.object<EventFilter>(
  {
    attribute: s.optional(s.string()),
    operator: s.optional(s.string()),
    value: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
