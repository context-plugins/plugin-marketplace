import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { consoleOrganizationSchema, type ConsoleOrganization } from "./console-organization.js";
import { organizationDtoSchema, type OrganizationDto } from "./organization-dto.js";

/** Get list of organizations response. */
export type AllOrganizationsResponseDto = {
  /**
   * List of organizations. When a console organization is available in the response, this indicates
   * that the console organization is a parent of the listed organization.
   */
  organizations?: OrganizationDto[];
  /** List of console organizations */
  consoleOrganizations?: ConsoleOrganization[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const allOrganizationsResponseDtoSchema: Schema<AllOrganizationsResponseDto> =
  s.object<AllOrganizationsResponseDto>(
    {
      organizations: s.optional(s.array(s.lazy(() => organizationDtoSchema))),
      consoleOrganizations: s.optional(s.array(s.lazy(() => consoleOrganizationSchema))),
    },
    { additionalProperties: s.json() },
  );
