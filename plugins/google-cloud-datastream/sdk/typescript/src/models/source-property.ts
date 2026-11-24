import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Source property. */
export type SourceProperty = {
  /** Required. The property name. */
  propertyName?: string;
  /** Optional. Whether or not the property is a primary key. */
  primaryKey?: boolean;
  /**
   * Optional. Source properties. When specified, it means that the current property contains nested
   * properties of its own. When unspecified as part of include objects, includes everything, when
   * unspecified as part of exclude objects, excludes nothing.
   */
  properties?: SourceProperty[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourcePropertySchema: Schema<SourceProperty> = s.object<SourceProperty>(
  {
    propertyName: s.optional(s.string()),
    primaryKey: s.optional(s.boolean()),
    properties: s.optional(s.array(s.lazy(() => sourcePropertySchema))),
  },
  { additionalProperties: s.json() },
);
