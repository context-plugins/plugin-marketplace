import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

/** Describes the class (type) of accounts. */
export type Class = {
  /** Account type */
  type: Type;
  /** Product name. */
  product: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classSchema: Schema<Class> = s.object<Class>(
  {
    type: typeSchema,
    product: s.string(),
  },
  { additionalProperties: s.json() },
);
