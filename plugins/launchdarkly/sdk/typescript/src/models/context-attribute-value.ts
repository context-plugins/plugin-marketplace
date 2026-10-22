import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContextAttributeValue = {
  /** A value for a context attribute. */
  name: Record<string, unknown>;
  /**
   * A relative estimate of the number of contexts seen recently that have a matching value for a
   * given attribute.
   */
  weight: number;
};

export const contextAttributeValueSchema: Schema<ContextAttributeValue> = s.object<ContextAttributeValue>({
  name: s.record(s.string(), s.unknown()),
  weight: s.int(),
});
