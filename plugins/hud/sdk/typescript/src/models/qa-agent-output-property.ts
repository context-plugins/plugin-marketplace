import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { enumValuesSchema, type EnumValues } from "./unions/enum-values.js";

export type QaAgentOutputProperty = {
  name: string;
  type: string;
  description?: Description;
  enumValues?: EnumValues;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qaAgentOutputPropertySchema: Schema<QaAgentOutputProperty> = s.object<QaAgentOutputProperty>(
  {
    name: s.string(),
    type: s.string(),
    description: s.optional(s.lazy(() => descriptionSchema)),
    enumValues: s.optional(s.lazy(() => enumValuesSchema)),
    _keysMap: {
      enumValues: "enum_values",
    },
  },
  { additionalProperties: s.json() },
);
