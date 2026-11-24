import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourcePropertySchema, type SourceProperty } from "./source-property.js";

/** Source object. */
export type SourceObject = {
  /**
   * Optional. Source properties. When unspecified as part of include objects, includes everything,
   * when unspecified as part of exclude objects, excludes nothing.
   */
  properties?: SourceProperty[];
  /** Required. The object name. */
  objectName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceObjectSchema: Schema<SourceObject> = s.object<SourceObject>(
  {
    properties: s.optional(s.array(s.lazy(() => sourcePropertySchema))),
    objectName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
