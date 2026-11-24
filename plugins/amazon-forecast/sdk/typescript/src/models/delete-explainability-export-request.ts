import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteExplainabilityExportRequest = {
  /** The Amazon Resource Name (ARN) of the Explainability export to delete. */
  explainabilityExportArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteExplainabilityExportRequestSchema: Schema<DeleteExplainabilityExportRequest> =
  s.object<DeleteExplainabilityExportRequest>(
    {
      explainabilityExportArn: s.string(),
      _keysMap: {
        explainabilityExportArn: "ExplainabilityExportArn",
      },
    },
    { additionalProperties: s.json() },
  );
