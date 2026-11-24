import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicApiIncidentWithRcaReportDtoSchema,
  type PublicApiIncidentWithRcaReportDto,
} from "./public-api-incident-with-rca-report-dto.js";

export type PublicApiIncidentsResponse = {
  content: PublicApiIncidentWithRcaReportDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiIncidentsResponseSchema: Schema<PublicApiIncidentsResponse> =
  s.object<PublicApiIncidentsResponse>(
    {
      content: s.array(s.lazy(() => publicApiIncidentWithRcaReportDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
