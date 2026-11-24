import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  organizationExportRequestSchema,
  type OrganizationExportRequest,
} from "./organization-export-request.js";

export type OrganizationExportsRequest = {
  /**
   * An *organization_export* request starts a job to export the complete data of the given
   * Organization.
   */
  data?: OrganizationExportRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationExportsRequestSchema: Schema<OrganizationExportsRequest> =
  s.object<OrganizationExportsRequest>(
    {
      data: s.optional(s.lazy(() => organizationExportRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
