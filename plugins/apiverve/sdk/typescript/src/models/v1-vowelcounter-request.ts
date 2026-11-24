import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1VowelcounterRequest = {
  /** Text to analyze (max 50,000 characters) */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1VowelcounterRequestSchema: Schema<V1VowelcounterRequest> = s.object<V1VowelcounterRequest>(
  {
    text: s.string(),
  },
  { additionalProperties: s.json() },
);
