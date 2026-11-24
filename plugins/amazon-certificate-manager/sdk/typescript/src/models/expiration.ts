import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type Expiration = {
  /** The numeric value of the expiration. */
  value: number;
  /** The time unit for the expiration value. */
  type: Type;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const expirationSchema: Schema<Expiration> = s.object<Expiration>(
  {
    value: s.int(),
    type: typeSchema,
    _keysMap: {
      value: "Value",
      type: "Type",
    },
  },
  { additionalProperties: s.json() },
);
