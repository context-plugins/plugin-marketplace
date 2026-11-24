import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { syntaxTokenSchema, type SyntaxToken } from "./syntax-token.js";

export type DetectSyntaxResponse = {
  /**
   * A collection of syntax tokens describing the text. For each token, the response provides the
   * text, the token type, where the text begins and ends, and the level of confidence that Amazon
   * Comprehend has that the token is correct. For a list of token types, see Syntax in the
   * Comprehend Developer Guide.
   */
  syntaxTokens?: SyntaxToken[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectSyntaxResponseSchema: Schema<DetectSyntaxResponse> = s.object<DetectSyntaxResponse>(
  {
    syntaxTokens: s.optional(s.array(s.lazy(() => syntaxTokenSchema))),
    _keysMap: {
      syntaxTokens: "SyntaxTokens",
    },
  },
  { additionalProperties: s.json() },
);
