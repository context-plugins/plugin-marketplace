import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * An *organization_export* request starts a job to export the complete data of the given
 * Organization.
 */
export type OrganizationExportRequest = {
  /** Globally unique identifier for the workspace or organization. */
  organization?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationExportRequestSchema: Schema<OrganizationExportRequest> =
  s.object<OrganizationExportRequest>(
    {
      organization: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
