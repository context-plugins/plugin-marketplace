import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rcaAssetTypeDtoSchema, type RcaAssetTypeDto } from "./rca-asset-type-dto.js";
import { rcaConfidenceDtoSchema, type RcaConfidenceDto } from "./rca-confidence-dto.js";
import { rcaReportStatusDtoSchema, type RcaReportStatusDto } from "./rca-report-status-dto.js";

export type PublicApiRcaReportContentDto = {
  agentName?: string;
  blastRadiusAssetType?: RcaAssetTypeDto;
  blastRadiusCount?: number;
  confidence?: RcaConfidenceDto;
  durationSeconds?: number;
  generatedAt?: Date;
  id?: string;
  impactSummary?: string;
  incidentId?: string;
  publishedAt?: Date;
  rootCauseSummary?: string;
  status?: RcaReportStatusDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiRcaReportContentDtoSchema: Schema<PublicApiRcaReportContentDto> =
  s.object<PublicApiRcaReportContentDto>(
    {
      agentName: s.optional(s.string()),
      blastRadiusAssetType: s.optional(s.lazy(() => rcaAssetTypeDtoSchema)),
      blastRadiusCount: s.optional(s.int()),
      confidence: s.optional(s.lazy(() => rcaConfidenceDtoSchema)),
      durationSeconds: s.optional(s.int()),
      generatedAt: s.optional(s.dateTime()),
      id: s.optional(s.string()),
      impactSummary: s.optional(s.string()),
      incidentId: s.optional(s.string()),
      publishedAt: s.optional(s.dateTime()),
      rootCauseSummary: s.optional(s.string()),
      status: s.optional(s.lazy(() => rcaReportStatusDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
