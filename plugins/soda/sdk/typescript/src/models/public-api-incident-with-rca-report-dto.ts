import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { incidentSeverityDtoSchema, type IncidentSeverityDto } from "./incident-severity-dto.js";
import { incidentStatusDtoSchema, type IncidentStatusDto } from "./incident-status-dto.js";

export type PublicApiIncidentWithRcaReportDto = {
  hasRcaReport?: boolean;
  description: string;
  resolutionNotes?: string;
  severity: IncidentSeverityDto;
  cloudUrl: string;
  id: string;
  name: string;
  number: number;
  status: IncidentStatusDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiIncidentWithRcaReportDtoSchema: Schema<PublicApiIncidentWithRcaReportDto> =
  s.object<PublicApiIncidentWithRcaReportDto>(
    {
      hasRcaReport: s.optional(s.boolean()),
      description: s.string(),
      resolutionNotes: s.optional(s.string()),
      severity: incidentSeverityDtoSchema,
      cloudUrl: s.string(),
      id: s.string(),
      name: s.string(),
      number: s.int(),
      status: incidentStatusDtoSchema,
    },
    { additionalProperties: s.json() },
  );
