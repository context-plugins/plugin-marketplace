import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncidentSeverityDto = {
  Minor: "minor",
  Major: "major",
  Critical: "critical",
} as const;
export type IncidentSeverityDto =
  | (typeof IncidentSeverityDto)[keyof typeof IncidentSeverityDto]
  | (string & {});

export const incidentSeverityDtoSchema: EnumSchema<IncidentSeverityDto> =
  s.enumOf<IncidentSeverityDto>(IncidentSeverityDto);
