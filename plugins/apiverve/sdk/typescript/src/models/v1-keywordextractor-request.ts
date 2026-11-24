import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1KeywordextractorRequest = {
  /** The text to extract keywords from */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1KeywordextractorRequestSchema: Schema<V1KeywordextractorRequest> =
  s.object<V1KeywordextractorRequest>(
    {
      text: s.string(),
    },
    { additionalProperties: s.json() },
  );
