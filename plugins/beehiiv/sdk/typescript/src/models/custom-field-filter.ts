import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A single custom field filter condition. */
export type CustomFieldFilter = {
  /**
   * The display name of the custom field (case-insensitive match). Must be an existing custom field
   * on the publication.
   */
  name: string;
  /**
   * The comparison operator for the filter (e.g., `equal`, `not_equal`, `contains`, `exists`,
   * `does_not_exist`). Available operators depend on the custom field's type.
   */
  operator: string;
  /**
   * The value to compare against. Required for all operators except `exists` and `does_not_exist`.
   */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldFilterSchema: Schema<CustomFieldFilter> = s.object<CustomFieldFilter>(
  {
    name: s.string(),
    operator: s.string(),
    value: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
