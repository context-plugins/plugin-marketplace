import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required for car insurance */
export type CarDetails = {
  manufacturer: string;
  model: string;
  year: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const carDetailsSchema: Schema<CarDetails> = s.object<CarDetails>(
  {
    manufacturer: s.string(),
    model: s.string(),
    year: s.string(),
  },
  { additionalProperties: s.json() },
);
