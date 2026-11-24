import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1GrammarcheckRequest = {
  /** The text you want to check for grammatical and spelling errors */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1GrammarcheckRequestSchema: Schema<V1GrammarcheckRequest> = s.object<V1GrammarcheckRequest>(
  {
    text: s.string(),
  },
  { additionalProperties: s.json() },
);
