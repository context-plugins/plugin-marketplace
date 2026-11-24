import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { columnMetricContentDtoSchema, type ColumnMetricContentDto } from "./column-metric-content-dto.js";

export type DatasetColumnProfilingContentDto = {
  id: string;
  metrics?: ColumnMetricContentDto;
  name: string;
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetColumnProfilingContentDtoSchema: Schema<DatasetColumnProfilingContentDto> =
  s.object<DatasetColumnProfilingContentDto>(
    {
      id: s.string(),
      metrics: s.optional(s.lazy(() => columnMetricContentDtoSchema)),
      name: s.string(),
      type: s.string(),
    },
    { additionalProperties: s.json() },
  );
