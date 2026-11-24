import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocumentClass = {
  /** The name of the class. */
  name?: string;
  /** The confidence score that Amazon Comprehend has this class correctly attributed. */
  score?: number;
  /**
   * Page number in the input document. This field is present in the response only if your request
   * includes the Byte parameter.
   */
  page?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentClassSchema: Schema<DocumentClass> = s.object<DocumentClass>(
  {
    name: s.optional(s.string()),
    score: s.optional(s.float64()),
    page: s.optional(s.int()),
    _keysMap: {
      name: "Name",
      score: "Score",
      page: "Page",
    },
  },
  { additionalProperties: s.json() },
);
