import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopTrainingDocumentClassifierRequest = {
  /**
   * The Amazon Resource Name (ARN) that identifies the document classifier currently being trained.
   */
  documentClassifierArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopTrainingDocumentClassifierRequestSchema: Schema<StopTrainingDocumentClassifierRequest> =
  s.object<StopTrainingDocumentClassifierRequest>(
    {
      documentClassifierArn: s.string(),
      _keysMap: {
        documentClassifierArn: "DocumentClassifierArn",
      },
    },
    { additionalProperties: s.json() },
  );
