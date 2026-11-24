import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicApiRcaInvestigationStepDtoSchema,
  type PublicApiRcaInvestigationStepDto,
} from "./public-api-rca-investigation-step-dto.js";
import { publicApiRcaLineageDtoSchema, type PublicApiRcaLineageDto } from "./public-api-rca-lineage-dto.js";
import {
  publicApiRcaRemediationItemDtoSchema,
  type PublicApiRcaRemediationItemDto,
} from "./public-api-rca-remediation-item-dto.js";
import {
  publicApiRcaResourceRefDtoSchema,
  type PublicApiRcaResourceRefDto,
} from "./public-api-rca-resource-ref-dto.js";
import { rcaConfidenceDtoSchema, type RcaConfidenceDto } from "./rca-confidence-dto.js";
import { rcaReportStatusDtoSchema, type RcaReportStatusDto } from "./rca-report-status-dto.js";

export type PublicApiRootCauseAnalysisDto = {
  confidence: RcaConfidenceDto;
  durationSeconds?: number;
  generatedAt: Date;
  investigation?: PublicApiRcaInvestigationStepDto[];
  lineage?: PublicApiRcaLineageDto;
  remediation?: PublicApiRcaRemediationItemDto[];
  rootCauseResource?: PublicApiRcaResourceRefDto;
  status: RcaReportStatusDto;
  summary: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiRootCauseAnalysisDtoSchema: Schema<PublicApiRootCauseAnalysisDto> =
  s.object<PublicApiRootCauseAnalysisDto>(
    {
      confidence: rcaConfidenceDtoSchema,
      durationSeconds: s.optional(s.int()),
      generatedAt: s.dateTime(),
      investigation: s.optional(s.array(s.lazy(() => publicApiRcaInvestigationStepDtoSchema))),
      lineage: s.optional(s.lazy(() => publicApiRcaLineageDtoSchema)),
      remediation: s.optional(s.array(s.lazy(() => publicApiRcaRemediationItemDtoSchema))),
      rootCauseResource: s.optional(s.lazy(() => publicApiRcaResourceRefDtoSchema)),
      status: rcaReportStatusDtoSchema,
      summary: s.string(),
    },
    { additionalProperties: s.json() },
  );
