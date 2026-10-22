import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the custom properties of the object. */
export type CustomProperty = {
  name?: string;
  /**
   * Must be a string, a number (for INT properties), or an array of strings. A boolean is not
   * valid. When OpenAPI Generator supports `oneOf`, we can semantically enforce this.
   */
  value?: Record<string, unknown>;
};

export const customPropertySchema: Schema<CustomProperty> = s.object<CustomProperty>({
  name: s.optional(s.string()),
  value: s.optional(s.record(s.string(), s.unknown())),
});
