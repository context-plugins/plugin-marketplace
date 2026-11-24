import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncidentStatusDto = {
  Reported: "reported",
  Investigating: "investigating",
  Fixing: "fixing",
  Resolved: "resolved",
} as const;
export type IncidentStatusDto = (typeof IncidentStatusDto)[keyof typeof IncidentStatusDto] | (string & {});

export const incidentStatusDtoSchema: EnumSchema<IncidentStatusDto> =
  s.enumOf<IncidentStatusDto>(IncidentStatusDto);
