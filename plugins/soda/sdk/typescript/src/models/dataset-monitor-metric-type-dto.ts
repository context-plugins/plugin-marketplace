import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DatasetMonitorMetricTypeDto = {
  RowCount: "rowCount",
  Freshness: "freshness",
  Schema: "schema",
  RowsInserted: "rowsInserted",
  TotalRowCountChange: "totalRowCountChange",
  Timeliness: "timeliness",
  RecordAnomalyScore: "recordAnomalyScore",
} as const;
export type DatasetMonitorMetricTypeDto =
  | (typeof DatasetMonitorMetricTypeDto)[keyof typeof DatasetMonitorMetricTypeDto]
  | (string & {});

export const datasetMonitorMetricTypeDtoSchema: EnumSchema<DatasetMonitorMetricTypeDto> =
  s.enumOf<DatasetMonitorMetricTypeDto>(DatasetMonitorMetricTypeDto);
