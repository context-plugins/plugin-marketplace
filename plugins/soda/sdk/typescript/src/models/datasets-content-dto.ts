import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataQualityStatusDtoSchema, type DataQualityStatusDto } from "./data-quality-status-dto.js";
import {
  datasetOwnerDtoSodaCloudApiV4DatasetsApiSchema,
  type DatasetOwnerDtoSodaCloudApiV4DatasetsApi,
} from "./dataset-owner-dto-soda-cloud-api-v4-datasets-api.js";
import {
  datasetPartitionColumnContentDtoSchema,
  type DatasetPartitionColumnContentDto,
} from "./dataset-partition-column-content-dto.js";
import { datasetTimePartitionDtoSchema, type DatasetTimePartitionDto } from "./dataset-time-partition-dto.js";
import { datasourcePropertiesDtoSchema, type DatasourcePropertiesDto } from "./datasource-properties-dto.js";

export type DatasetsContentDto = {
  attributes?: Record<string, unknown>;
  checks: number;
  cloudUrl: string;
  dataQualityStatus?: DataQualityStatusDto;
  datasetQualifiedName?: string;
  datasource?: DatasourcePropertiesDto;
  healthStatus: number;
  id: string;
  incidents: number;
  label?: string;
  lastUpdated?: Date;
  name: string;
  owners?: DatasetOwnerDtoSodaCloudApiV4DatasetsApi[];
  partitionColumn?: DatasetPartitionColumnContentDto;
  qualifiedName?: string;
  tags?: string[];
  timePartition?: DatasetTimePartitionDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetsContentDtoSchema: Schema<DatasetsContentDto> = s.object<DatasetsContentDto>(
  {
    attributes: s.optional(s.record(s.string(), s.unknown())),
    checks: s.int(),
    cloudUrl: s.string(),
    dataQualityStatus: s.optional(s.lazy(() => dataQualityStatusDtoSchema)),
    datasetQualifiedName: s.optional(s.string()),
    datasource: s.optional(s.lazy(() => datasourcePropertiesDtoSchema)),
    healthStatus: s.int(),
    id: s.string(),
    incidents: s.int(),
    label: s.optional(s.string()),
    lastUpdated: s.optional(s.dateTime()),
    name: s.string(),
    owners: s.optional(s.array(s.lazy(() => datasetOwnerDtoSodaCloudApiV4DatasetsApiSchema))),
    partitionColumn: s.optional(s.lazy(() => datasetPartitionColumnContentDtoSchema)),
    qualifiedName: s.optional(s.string()),
    tags: s.optional(s.array(s.string())),
    timePartition: s.optional(s.lazy(() => datasetTimePartitionDtoSchema)),
  },
  { additionalProperties: s.json() },
);
