import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  organizationExportResponseInternalSchema,
  organizationExportResponseSchema,
  type OrganizationExportResponse,
} from "./organization-export-response.js";

export type OrganizationExportsResponse = {
  data?: OrganizationExportResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const organizationExportsResponseProperties: s.Shape<OrganizationExportsResponse> = {
  data: s.optional(s.lazy(() => organizationExportResponseInternalSchema)),
};

export const organizationExportsResponseInternalSchema: Schema<OrganizationExportsResponse> =
  s.object<OrganizationExportsResponse>(organizationExportsResponseProperties, {
    additionalProperties: s.json(),
  });

export const organizationExportsResponseSchema: Schema<OrganizationExportsResponse> = s.lazySchema(() =>
  s.object<OrganizationExportsResponse>(
    {
      ...organizationExportsResponseProperties,
      data: s.optional(s.lazy(() => organizationExportResponseSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
