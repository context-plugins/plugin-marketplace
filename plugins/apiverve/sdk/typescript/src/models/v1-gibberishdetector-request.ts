import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1GibberishdetectorRequest = {
  /** Text to analyze (max 10,000 characters) */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1GibberishdetectorRequestSchema: Schema<V1GibberishdetectorRequest> =
  s.object<V1GibberishdetectorRequest>(
    {
      text: s.string(),
    },
    { additionalProperties: s.json() },
  );
