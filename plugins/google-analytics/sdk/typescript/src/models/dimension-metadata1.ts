import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The dimension metadata contains the API name for this compatibility information. The dimension
 * metadata also contains other helpful information like the UI name and description.
 */
export type DimensionMetadata1 = {
  /**
   * The display name of the category that this dimension belongs to. Similar dimensions and metrics
   * are categorized together.
   */
  category?: string;
  /**
   * Still usable but deprecated names for this dimension. If populated, this dimension is available
   * by either `apiName` or one of `deprecatedApiNames` for a period of time. After the deprecation
   * period, the dimension will be available only by `apiName`.
   */
  deprecatedApiNames?: string[];
  /**
   * This dimension's name within the Google Analytics user interface. For example, `Event name`.
   */
  uiName?: string;
  /**
   * True if the dimension is custom to this property. This includes user, event, & item scoped
   * custom dimensions; to learn more about custom dimensions, see
   * https://support.google.com/analytics/answer/14240153. This also include custom channel groups;
   * to learn more about custom channel groups, see
   * https://support.google.com/analytics/answer/13051316.
   */
  customDefinition?: boolean;
  /**
   * This dimension's name. Useable in [Dimension](#Dimension)'s `name`. For example, `eventName`.
   */
  apiName?: string;
  /** Description of how this dimension is used and calculated. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dimensionMetadata1Schema: Schema<DimensionMetadata1> = s.object<DimensionMetadata1>(
  {
    category: s.optional(s.string()),
    deprecatedApiNames: s.optional(s.array(s.string())),
    uiName: s.optional(s.string()),
    customDefinition: s.optional(s.boolean()),
    apiName: s.optional(s.string()),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
