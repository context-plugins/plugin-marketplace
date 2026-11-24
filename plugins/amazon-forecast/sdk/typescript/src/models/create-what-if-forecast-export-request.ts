import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataDestinationSchema, type DataDestination } from "./data-destination.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateWhatIfForecastExportRequest = {
  /** The name of the what-if forecast to export. */
  whatIfForecastExportName: string;
  /** The list of what-if forecast Amazon Resource Names (ARNs) to export. */
  whatIfForecastArns: string[];
  destination: DataDestination;
  /** A list of tags to apply to the what if forecast. */
  tags?: Tag[];
  /** The format of the exported data, CSV or PARQUET. */
  format?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createWhatIfForecastExportRequestSchema: Schema<CreateWhatIfForecastExportRequest> =
  s.object<CreateWhatIfForecastExportRequest>(
    {
      whatIfForecastExportName: s.string(),
      whatIfForecastArns: s.array(s.string()),
      destination: dataDestinationSchema,
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      format: s.optional(s.string()),
      _keysMap: {
        whatIfForecastExportName: "WhatIfForecastExportName",
        whatIfForecastArns: "WhatIfForecastArns",
        destination: "Destination",
        tags: "Tags",
        format: "Format",
      },
    },
    { additionalProperties: s.json() },
  );
