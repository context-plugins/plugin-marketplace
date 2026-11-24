import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateDocumentClassifierResponse = {
  /** The Amazon Resource Name (ARN) that identifies the document classifier. */
  documentClassifierArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createDocumentClassifierResponseSchema: Schema<CreateDocumentClassifierResponse> =
  s.object<CreateDocumentClassifierResponse>(
    {
      documentClassifierArn: s.optional(s.string()),
      _keysMap: {
        documentClassifierArn: "DocumentClassifierArn",
      },
    },
    { additionalProperties: s.json() },
  );
