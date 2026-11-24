import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataDestinationSchema, type DataDestination } from "./data-destination.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateForecastExportJobRequest = {
  /** The name for the forecast export job. */
  forecastExportJobName: string;
  /** The Amazon Resource Name (ARN) of the forecast that you want to export. */
  forecastArn: string;
  destination: DataDestination;
  /**
   * The optional metadata that you apply to the forecast export job to help you categorize and
   * organize them. Each tag consists of a key and an optional value, both of which you define. The
   * following basic restrictions apply to tags: Maximum number of tags per resource - 50. For each
   * resource, each tag key must be unique, and each tag key can have only one value. Maximum key
   * length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in
   * UTF-8. If your tagging schema is used across multiple services and resources, remember that
   * other services may have restrictions on all
   */
  tags?: Tag[];
  /** The format of the exported data, CSV or PARQUET. The default value is CSV. */
  format?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createForecastExportJobRequestSchema: Schema<CreateForecastExportJobRequest> =
  s.object<CreateForecastExportJobRequest>(
    {
      forecastExportJobName: s.string(),
      forecastArn: s.string(),
      destination: dataDestinationSchema,
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      format: s.optional(s.string()),
      _keysMap: {
        forecastExportJobName: "ForecastExportJobName",
        forecastArn: "ForecastArn",
        destination: "Destination",
        tags: "Tags",
        format: "Format",
      },
    },
    { additionalProperties: s.json() },
  );
