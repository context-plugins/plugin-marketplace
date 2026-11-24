import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeExplainabilityExportRequest = {
  /** The Amazon Resource Name (ARN) of the Explainability export. */
  explainabilityExportArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeExplainabilityExportRequestSchema: Schema<DescribeExplainabilityExportRequest> =
  s.object<DescribeExplainabilityExportRequest>(
    {
      explainabilityExportArn: s.string(),
      _keysMap: {
        explainabilityExportArn: "ExplainabilityExportArn",
      },
    },
    { additionalProperties: s.json() },
  );
