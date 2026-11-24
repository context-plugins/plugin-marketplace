import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RequiredDocument = {
  /** Document type ID */
  type: number;
  /** Document type name */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requiredDocumentSchema: Schema<RequiredDocument> = s.object<RequiredDocument>(
  {
    type: s.int(),
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
