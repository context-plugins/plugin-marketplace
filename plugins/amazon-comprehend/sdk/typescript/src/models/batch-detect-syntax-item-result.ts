import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { syntaxTokenSchema, type SyntaxToken } from "./syntax-token.js";

export type BatchDetectSyntaxItemResult = {
  /** The zero-based index of the document in the input list. */
  index?: number;
  /** The syntax tokens for the words in the document, one token for each word. */
  syntaxTokens?: SyntaxToken[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchDetectSyntaxItemResultSchema: Schema<BatchDetectSyntaxItemResult> =
  s.object<BatchDetectSyntaxItemResult>(
    {
      index: s.optional(s.int()),
      syntaxTokens: s.optional(s.array(s.lazy(() => syntaxTokenSchema))),
      _keysMap: {
        index: "Index",
        syntaxTokens: "SyntaxTokens",
      },
    },
    { additionalProperties: s.json() },
  );
