import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldTypeSchema, type CustomFieldType } from "./custom-field-type.js";

export type CustomFieldInfo = {
  id?: string;
  /** The type of value being stored in the custom field. */
  kind?: CustomFieldType;
  display?: string;
  created?: number;
  /** Array of option values. Only included when kind is "list". */
  options?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldInfoSchema: Schema<CustomFieldInfo> = s.object<CustomFieldInfo>(
  {
    id: s.optional(s.string()),
    kind: s.optional(s.lazy(() => customFieldTypeSchema)),
    display: s.optional(s.string()),
    created: s.optional(s.int()),
    options: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
