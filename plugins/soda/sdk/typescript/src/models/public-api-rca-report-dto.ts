import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicApiImpactAssessmentDtoSchema,
  type PublicApiImpactAssessmentDto,
} from "./public-api-impact-assessment-dto.js";
import { publicApiRcaAgentDtoSchema, type PublicApiRcaAgentDto } from "./public-api-rca-agent-dto.js";
import {
  publicApiRootCauseAnalysisDtoSchema,
  type PublicApiRootCauseAnalysisDto,
} from "./public-api-root-cause-analysis-dto.js";

export type PublicApiRcaReportDto = {
  agent: PublicApiRcaAgentDto;
  impactAssessment?: PublicApiImpactAssessmentDto;
  rootCauseAnalysis: PublicApiRootCauseAnalysisDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiRcaReportDtoSchema: Schema<PublicApiRcaReportDto> = s.object<PublicApiRcaReportDto>(
  {
    agent: publicApiRcaAgentDtoSchema,
    impactAssessment: s.optional(s.lazy(() => publicApiImpactAssessmentDtoSchema)),
    rootCauseAnalysis: publicApiRootCauseAnalysisDtoSchema,
  },
  { additionalProperties: s.json() },
);
