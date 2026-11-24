import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Details = {
  expectedVersion: number;
  currentVersion: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detailsSchema: Schema<Details> = s.object<Details>(
  {
    expectedVersion: s.float64(),
    currentVersion: s.float64(),
  },
  { additionalProperties: s.json() },
);
