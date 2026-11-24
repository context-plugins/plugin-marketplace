import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopResourceRequest = {
  /**
   * The Amazon Resource Name (ARN) that identifies the resource to stop. The supported ARNs are
   * DatasetImportJobArn, PredictorArn, PredictorBacktestExportJobArn, ForecastArn,
   * ForecastExportJobArn, ExplainabilityArn, and ExplainabilityExportArn.
   */
  resourceArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopResourceRequestSchema: Schema<StopResourceRequest> = s.object<StopResourceRequest>(
  {
    resourceArn: s.string(),
    _keysMap: {
      resourceArn: "ResourceArn",
    },
  },
  { additionalProperties: s.json() },
);
