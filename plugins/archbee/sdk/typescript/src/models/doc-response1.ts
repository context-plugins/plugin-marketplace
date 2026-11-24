import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocResponse1 = {
  /** The content of the document in the specified format. */
  content?: string;
  /** The format of the returned document. */
  format?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docResponse1Schema: Schema<DocResponse1> = s.object<DocResponse1>(
  {
    content: s.optional(s.string()),
    format: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
