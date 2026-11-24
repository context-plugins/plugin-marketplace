import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { custom1Schema, type Custom1 } from "./custom1.js";

export type Data6 = {
  custom: Custom1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data6Schema: Schema<Data6> = s.object<Data6>(
  {
    custom: custom1Schema,
  },
  { additionalProperties: s.json() },
);
