import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A representation of the FilteringAttribute resource. Filtering attributes are per event type. */
export type FilteringAttribute = {
  /**
   * Output only. If true, the attribute accepts matching expressions in the Eventarc PathPattern
   * format.
   */
  pathPatternSupported?: boolean;
  /**
   * Output only. If true, the triggers for this provider should always specify a filter on these
   * attributes. Trigger creation will fail otherwise.
   */
  required?: boolean;
  /** Output only. Attribute used for filtering the event type. */
  attribute?: string;
  /** Output only. Description of the purpose of the attribute. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filteringAttributeSchema: Schema<FilteringAttribute> = s.object<FilteringAttribute>(
  {
    pathPatternSupported: s.optional(s.boolean()),
    required: s.optional(s.boolean()),
    attribute: s.optional(s.string()),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
