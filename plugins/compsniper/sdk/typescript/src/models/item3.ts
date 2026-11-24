import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { population1Schema, type Population1 } from "./population1.js";

export type Item3 = {
  specId?: string;
  cardNumber?: string | null;
  name?: string;
  variety?: string | null;
  population?: Population1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const item3Schema: Schema<Item3> = s.object<Item3>(
  {
    specId: s.optional(s.string()),
    cardNumber: s.optionalNullable(s.string()),
    name: s.optional(s.string()),
    variety: s.optionalNullable(s.string()),
    population: s.optional(s.lazy(() => population1Schema)),
  },
  { additionalProperties: s.json() },
);
