import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datasetColumnProfilingContentDtoSchema,
  type DatasetColumnProfilingContentDto,
} from "./dataset-column-profiling-content-dto.js";
import { datasetTimePartitionDtoSchema, type DatasetTimePartitionDto } from "./dataset-time-partition-dto.js";
import {
  profilingSamplingStrategyConfigurationDtoSchema,
  type ProfilingSamplingStrategyConfigurationDto,
} from "./profiling-sampling-strategy-configuration-dto.js";
import { zonedCronDtoSchema, type ZonedCronDto } from "./zoned-cron-dto.js";

export type PublicApiDatasetProfilingResponse = {
  columnCount?: number;
  columns: DatasetColumnProfilingContentDto[];
  datasetId: string;
  enabled?: boolean;
  /**
   * @deprecated
   */
  partitionColumn?: string;
  profilingTime?: Date;
  rowCount?: number;
  samplingStrategyConfiguration?: ProfilingSamplingStrategyConfigurationDto;
  scanSchedule?: ZonedCronDto;
  timePartition?: DatasetTimePartitionDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDatasetProfilingResponseSchema: Schema<PublicApiDatasetProfilingResponse> =
  s.object<PublicApiDatasetProfilingResponse>(
    {
      columnCount: s.optional(s.int()),
      columns: s.array(s.lazy(() => datasetColumnProfilingContentDtoSchema)),
      datasetId: s.string(),
      enabled: s.optional(s.boolean()),
      partitionColumn: s.optional(s.string()),
      profilingTime: s.optional(s.dateTime()),
      rowCount: s.optional(s.int()),
      samplingStrategyConfiguration: s.optional(
        s.lazy(() => profilingSamplingStrategyConfigurationDtoSchema),
      ),
      scanSchedule: s.optional(s.lazy(() => zonedCronDtoSchema)),
      timePartition: s.optional(s.lazy(() => datasetTimePartitionDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
