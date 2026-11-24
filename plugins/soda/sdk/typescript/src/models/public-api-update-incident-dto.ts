import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { incidentSeverityDtoSchema, type IncidentSeverityDto } from "./incident-severity-dto.js";
import { incidentStatusDtoSchema, type IncidentStatusDto } from "./incident-status-dto.js";

export type PublicApiUpdateIncidentDto = {
  description?: string;
  resolutionNotes?: string;
  severity?: IncidentSeverityDto;
  status?: IncidentStatusDto;
  title?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUpdateIncidentDtoSchema: Schema<PublicApiUpdateIncidentDto> =
  s.object<PublicApiUpdateIncidentDto>(
    {
      description: s.optional(s.string()),
      resolutionNotes: s.optional(s.string()),
      severity: s.optional(s.lazy(() => incidentSeverityDtoSchema)),
      status: s.optional(s.lazy(() => incidentStatusDtoSchema)),
      title: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
