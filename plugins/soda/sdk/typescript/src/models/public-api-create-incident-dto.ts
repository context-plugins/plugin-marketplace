import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { incidentSeverityDtoSchema, type IncidentSeverityDto } from "./incident-severity-dto.js";
import { incidentStatusDtoSchema, type IncidentStatusDto } from "./incident-status-dto.js";

export type PublicApiCreateIncidentDto = {
  description: string;
  leadId?: string;
  monitorResultIds: string[];
  resolutionNotes?: string;
  severity: IncidentSeverityDto;
  status?: IncidentStatusDto;
  title: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiCreateIncidentDtoSchema: Schema<PublicApiCreateIncidentDto> =
  s.object<PublicApiCreateIncidentDto>(
    {
      description: s.string(),
      leadId: s.optional(s.string()),
      monitorResultIds: s.array(s.string()),
      resolutionNotes: s.optional(s.string()),
      severity: incidentSeverityDtoSchema,
      status: s.optional(s.lazy(() => incidentStatusDtoSchema)),
      title: s.string(),
    },
    { additionalProperties: s.json() },
  );
