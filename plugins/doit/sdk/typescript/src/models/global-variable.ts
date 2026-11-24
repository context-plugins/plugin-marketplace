import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GlobalVariable = {
  key: string;
  name: string;
  description?: string;
  type: string;
  elementType?: string;
  /** Present unless the export stripped variable values. */
  value?: string;
  usedByNodes?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const globalVariableSchema: Schema<GlobalVariable> = s.object<GlobalVariable>(
  {
    key: s.string(),
    name: s.string(),
    description: s.optional(s.string()),
    type: s.string(),
    elementType: s.optional(s.string()),
    value: s.optional(s.string()),
    usedByNodes: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
