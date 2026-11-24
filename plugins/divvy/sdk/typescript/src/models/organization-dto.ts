import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Organization response. */
export type OrganizationDto = {
  /** BILL-generated ID of the organization. The value begins with `008`. */
  id?: string;
  /** Organization name */
  name?: string;
  /**
   * BILL-generated ID of the console organization. The value begins with `008`.
   *
   * When a console organization is available in the response, this indicates that the console
   * organization is a parent of the listed organization.
   */
  consoleOrganizationId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationDtoSchema: Schema<OrganizationDto> = s.object<OrganizationDto>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    consoleOrganizationId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
