import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type Referrer = {
  /** Referrer type. */
  type: Type1;
  /** ID of referrer. */
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const referrerSchema: Schema<Referrer> = s.object<Referrer>(
  {
    type: type1Schema,
    value: s.string(),
  },
  { additionalProperties: s.json() },
);
