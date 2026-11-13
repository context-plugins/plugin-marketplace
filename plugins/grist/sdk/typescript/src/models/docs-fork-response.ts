import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocsForkResponse = {
  /** The unique identifier for this fork */
  forkId: string;
  /** The full document ID of the fork */
  docId: string;
  /** The URL-friendly ID of the fork */
  urlId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsForkResponseSchema: Schema<DocsForkResponse> = s.object<DocsForkResponse>(
  {
    forkId: s.string(),
    docId: s.string(),
    urlId: s.string(),
  },
  { additionalProperties: s.json() },
);
