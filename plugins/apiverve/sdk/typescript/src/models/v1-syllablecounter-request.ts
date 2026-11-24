import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1SyllablecounterRequest = {
  /** The text to count syllables in (max 500 characters) */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1SyllablecounterRequestSchema: Schema<V1SyllablecounterRequest> =
  s.object<V1SyllablecounterRequest>(
    {
      text: s.string(),
    },
    { additionalProperties: s.json() },
  );
