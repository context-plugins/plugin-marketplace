import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agreementSlimDtoSchema, type AgreementSlimDto } from "./agreement-slim-dto.js";
import { checkResultValueDtoSchema, type CheckResultValueDto } from "./check-result-value-dto.js";
import { checksContentDtoGroupSchema, type ChecksContentDtoGroup } from "./checks-content-dto-group.js";
import { datasetSlimDtoSchema, type DatasetSlimDto } from "./dataset-slim-dto.js";
import { evaluationStatusDtoSchema, type EvaluationStatusDto } from "./evaluation-status-dto.js";
import { incidentSlimDtoSchema, type IncidentSlimDto } from "./incident-slim-dto.js";
import { ownerDtoSchema, type OwnerDto } from "./owner-dto.js";

export type ChecksContentDto = {
  /**
   * @deprecated
   */
  agreements?: AgreementSlimDto[];
  attributes?: Record<string, unknown>;
  checkType?: string;
  cloudUrl?: string;
  column?: string;
  createdAt: Date;
  datasets: DatasetSlimDto[];
  definition?: string;
  description?: string;
  evaluationStatus: EvaluationStatusDto;
  group?: ChecksContentDtoGroup;
  id: string;
  incidents: IncidentSlimDto[];
  lastCheckResultValue?: CheckResultValueDto;
  /**
   * @deprecated
   */
  lastCheckRunTime?: Date;
  /**
   * @deprecated
   */
  lastUpdated?: Date;
  metricType?: string;
  name: string;
  owner?: OwnerDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checksContentDtoSchema: Schema<ChecksContentDto> = s.object<ChecksContentDto>(
  {
    agreements: s.optional(s.array(s.lazy(() => agreementSlimDtoSchema))),
    attributes: s.optional(s.record(s.string(), s.unknown())),
    checkType: s.optional(s.string()),
    cloudUrl: s.optional(s.string()),
    column: s.optional(s.string()),
    createdAt: s.dateTime(),
    datasets: s.array(s.lazy(() => datasetSlimDtoSchema)),
    definition: s.optional(s.string()),
    description: s.optional(s.string()),
    evaluationStatus: evaluationStatusDtoSchema,
    group: s.optional(s.lazy(() => checksContentDtoGroupSchema)),
    id: s.string(),
    incidents: s.array(s.lazy(() => incidentSlimDtoSchema)),
    lastCheckResultValue: s.optional(s.lazy(() => checkResultValueDtoSchema)),
    lastCheckRunTime: s.optional(s.dateTime()),
    lastUpdated: s.optional(s.dateTime()),
    metricType: s.optional(s.string()),
    name: s.string(),
    owner: s.optional(s.lazy(() => ownerDtoSchema)),
  },
  { additionalProperties: s.json() },
);
