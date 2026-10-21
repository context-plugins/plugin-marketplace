import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvalidOperatorValueError = {
  /** The operator key that has an invalid value. */
  key?: string;
  /** The invalid operator value. */
  value?: string;
};

export const invalidOperatorValueErrorSchema: Schema<InvalidOperatorValueError> =
  s.object<InvalidOperatorValueError>({
    key: s.optional(s.string()),
    value: s.optional(s.string()),
  });
