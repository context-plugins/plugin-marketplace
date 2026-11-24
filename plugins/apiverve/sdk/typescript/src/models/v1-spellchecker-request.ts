import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1SpellcheckerRequest = {
  /** The text to check the spelling of */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1SpellcheckerRequestSchema: Schema<V1SpellcheckerRequest> = s.object<V1SpellcheckerRequest>(
  {
    text: s.string(),
  },
  { additionalProperties: s.json() },
);
