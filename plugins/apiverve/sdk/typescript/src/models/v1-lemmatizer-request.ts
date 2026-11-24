import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1LemmatizerRequest = {
  /** The text to lemmatize */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1LemmatizerRequestSchema: Schema<V1LemmatizerRequest> = s.object<V1LemmatizerRequest>(
  {
    text: s.string(),
  },
  { additionalProperties: s.json() },
);
