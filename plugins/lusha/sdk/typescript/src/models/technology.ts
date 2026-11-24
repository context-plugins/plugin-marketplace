import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Technology = {
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const technologySchema: Schema<Technology> = s.object<Technology>(
  {
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
