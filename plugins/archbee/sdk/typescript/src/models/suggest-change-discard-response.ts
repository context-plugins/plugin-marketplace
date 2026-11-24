import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SuggestChangeDiscardResponse = {
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const suggestChangeDiscardResponseSchema: Schema<SuggestChangeDiscardResponse> =
  s.object<SuggestChangeDiscardResponse>(
    {
      status: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
