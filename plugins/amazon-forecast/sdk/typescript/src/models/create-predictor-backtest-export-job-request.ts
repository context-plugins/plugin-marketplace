import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataDestinationSchema, type DataDestination } from "./data-destination.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreatePredictorBacktestExportJobRequest = {
  /** The name for the backtest export job. */
  predictorBacktestExportJobName: string;
  /** The Amazon Resource Name (ARN) of the predictor that you want to export. */
  predictorArn: string;
  destination: DataDestination;
  /**
   * Optional metadata to help you categorize and organize your backtests. Each tag consists of a
   * key and an optional value, both of which you define. Tag keys and values are case sensitive.
   * The following restrictions apply to tags: For each resource, each tag key must be unique and
   * each tag key must have one value. Maximum number of tags per resource: 50. Maximum key length:
   * 128 Unicode characters in UTF-8. Maximum value length: 256 Unicode characters in UTF-8.
   * Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : /
   * \@. If your tagging schema is used across ot
   */
  tags?: Tag[];
  /** The format of the exported data, CSV or PARQUET. The default value is CSV. */
  format?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createPredictorBacktestExportJobRequestSchema: Schema<CreatePredictorBacktestExportJobRequest> =
  s.object<CreatePredictorBacktestExportJobRequest>(
    {
      predictorBacktestExportJobName: s.string(),
      predictorArn: s.string(),
      destination: dataDestinationSchema,
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      format: s.optional(s.string()),
      _keysMap: {
        predictorBacktestExportJobName: "PredictorBacktestExportJobName",
        predictorArn: "PredictorArn",
        destination: "Destination",
        tags: "Tags",
        format: "Format",
      },
    },
    { additionalProperties: s.json() },
  );
