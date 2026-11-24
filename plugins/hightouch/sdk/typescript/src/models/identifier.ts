import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Identifier = {
  value: string;
  identifier: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const identifierSchema: Schema<Identifier> = s.object<Identifier>(
  {
    value: s.string(),
    identifier: s.string(),
  },
  { additionalProperties: s.json() },
);
