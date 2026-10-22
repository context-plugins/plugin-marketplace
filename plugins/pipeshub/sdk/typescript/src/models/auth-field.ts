import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fieldTypeSchema, type FieldType } from "./field-type.js";
import { usageSchema, type Usage } from "./usage.js";
import { validationSchema, type Validation } from "./validation.js";

export type AuthField = {
  name: string;
  displayName: string;
  placeholder: string;
  description: string;
  fieldType: FieldType;
  required: boolean;
  usage: Usage;
  defaultValue: string;
  validation: Validation;
  isSecret: boolean;
  /** Present on SELECT fields */
  options?: string[];
};

export const authFieldSchema: Schema<AuthField> = s.object<AuthField>({
  name: s.string(),
  displayName: s.string(),
  placeholder: s.string(),
  description: s.string(),
  fieldType: fieldTypeSchema,
  required: s.boolean(),
  usage: usageSchema,
  defaultValue: s.string(),
  validation: validationSchema,
  isSecret: s.boolean(),
  options: s.optional(s.array(s.string())),
});
