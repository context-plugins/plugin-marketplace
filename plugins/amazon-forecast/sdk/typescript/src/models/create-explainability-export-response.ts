import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateExplainabilityExportResponse = {
  /** The Amazon Resource Name (ARN) of the export. */
  explainabilityExportArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createExplainabilityExportResponseSchema: Schema<CreateExplainabilityExportResponse> =
  s.object<CreateExplainabilityExportResponse>(
    {
      explainabilityExportArn: s.optional(s.string()),
      _keysMap: {
        explainabilityExportArn: "ExplainabilityExportArn",
      },
    },
    { additionalProperties: s.json() },
  );
