import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Annotatated property value. */
export type ValueInfo = {
  /** Property value. */
  value?: string;
  /** Annotation, comment or explanation why the property was set. */
  annotation?: string;
  /** Optional. Value which was replaced by the corresponding component. */
  overriddenValue?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueInfoSchema: Schema<ValueInfo> = s.object<ValueInfo>(
  {
    value: s.optional(s.string()),
    annotation: s.optional(s.string()),
    overriddenValue: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
