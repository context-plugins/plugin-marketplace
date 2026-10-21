import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Property = {
  /** The key part. */
  key?: string;
  /** The value part. */
  value?: string;
  /**
   * The flag to indicate whether this property hidden from or visible to client applications. If
   * `true`, this property is hidden from client applications. Otherwise, this property is visible
   * to client applications.
   */
  hidden?: boolean;
};

export const propertySchema: Schema<Property> = s.object<Property>({
  key: s.optional(s.string()),
  value: s.optional(s.string()),
  hidden: s.optional(s.boolean()),
});
