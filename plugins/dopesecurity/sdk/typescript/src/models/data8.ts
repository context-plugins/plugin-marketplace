import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { custom3Schema, type Custom3 } from "./custom3.js";

export type Data8 = {
  custom: Custom3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data8Schema: Schema<Data8> = s.object<Data8>(
  {
    custom: custom3Schema,
  },
  { additionalProperties: s.json() },
);
