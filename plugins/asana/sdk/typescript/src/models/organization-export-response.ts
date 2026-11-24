import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";
import { workspaceCompactSchema, type WorkspaceCompact } from "./workspace-compact.js";

export type OrganizationExportResponse = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The time at which this resource was created. */
  createdAt?: Date;
  /**
   * Download this URL to retreive the full export of the organization in JSON format. It will be
   * compressed in a gzip (.gz) container.
   *
   * *Note: May be null if the export is still in progress or failed. If present, this URL may only
   * be valid for 1 hour from the time of retrieval. You should avoid persisting this URL somewhere
   * and rather refresh on demand to ensure you do not keep stale URLs.*
   */
  downloadUrl?: string | null;
  /** The current state of the export. */
  state?: State;
  organization?: WorkspaceCompact;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const organizationExportResponseProperties: s.Shape<OrganizationExportResponse> = {
  gid: s.optional(s.string()),
  resourceType: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  downloadUrl: s.optionalNullable(s.string()),
  state: s.optional(s.lazy(() => stateSchema)),
  organization: s.optional(s.lazy(() => workspaceCompactSchema)),
  _keysMap: {
    resourceType: "resource_type",
    createdAt: "created_at",
    downloadUrl: "download_url",
  },
};

export const organizationExportResponseInternalSchema: Schema<OrganizationExportResponse> =
  s.object<OrganizationExportResponse>(organizationExportResponseProperties, {
    additionalProperties: s.json(),
  });

export const organizationExportResponseSchema: Schema<OrganizationExportResponse> = s.lazySchema(() =>
  s.object<OrganizationExportResponse>(
    {
      ...organizationExportResponseProperties,
      downloadUrl: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
