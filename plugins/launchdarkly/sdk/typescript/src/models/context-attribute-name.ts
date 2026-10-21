import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContextAttributeName = {
  /** A context attribute's name. */
  name: string;
  /**
   * A relative estimate of the number of contexts seen recently that have an attribute with the
   * associated name.
   */
  weight: number;
  /** Whether or not the attribute has one or more redacted values. */
  redacted?: boolean;
};

export const contextAttributeNameSchema: Schema<ContextAttributeName> = s.object<ContextAttributeName>({
  name: s.string(),
  weight: s.int(),
  redacted: s.optional(s.boolean()),
});
