import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1ProfanityfilterRequest = {
  /** The text to filter profanity words from */
  text: string;
  /** The mask to replace the profanity words with. Should be a Single Character (e.g., *) */
  mask?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1ProfanityfilterRequestSchema: Schema<V1ProfanityfilterRequest> =
  s.object<V1ProfanityfilterRequest>(
    {
      text: s.string(),
      mask: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
