import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { incidentStatusDtoSchema, type IncidentStatusDto } from "./incident-status-dto.js";

export type IncidentSlimDto = {
  cloudUrl: string;
  id: string;
  name: string;
  number: number;
  status: IncidentStatusDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const incidentSlimDtoSchema: Schema<IncidentSlimDto> = s.object<IncidentSlimDto>(
  {
    cloudUrl: s.string(),
    id: s.string(),
    name: s.string(),
    number: s.int(),
    status: incidentStatusDtoSchema,
  },
  { additionalProperties: s.json() },
);
