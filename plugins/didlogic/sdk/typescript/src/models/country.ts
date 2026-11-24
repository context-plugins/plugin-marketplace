import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Country = {
  /** Country name, as documents_create takes it in `document[country]` */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const countrySchema: Schema<Country> = s.object<Country>(
  {
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
