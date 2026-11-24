import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocumentLabel = {
  /** The name of the label. */
  name?: string;
  /** The confidence score that Amazon Comprehend has this label correctly attributed. */
  score?: number;
  /**
   * Page number where the label occurs. This field is present in the response only if your request
   * includes the Byte parameter.
   */
  page?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentLabelSchema: Schema<DocumentLabel> = s.object<DocumentLabel>(
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
