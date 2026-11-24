import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { optionSchema, type Option } from "./option.js";
import { typeSchema, type Type } from "./type.js";

export type Property = {
  property: string;
  label: string;
  type: Type;
  fieldType: string;
  groupName?: string;
  options: Option[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const propertySchema: Schema<Property> = s.object<Property>(
  {
    property: s.string(),
    label: s.string(),
    type: typeSchema,
    fieldType: s.string(),
    groupName: s.optional(s.string()),
    options: s.array(s.lazy(() => optionSchema)),
  },
  { additionalProperties: s.json() },
);
