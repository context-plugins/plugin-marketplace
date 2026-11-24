import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type Requirement = {
  type: Type;
  code: string;
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requirementSchema: Schema<Requirement> = s.object<Requirement>(
  {
    type: typeSchema,
    code: s.string(),
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
