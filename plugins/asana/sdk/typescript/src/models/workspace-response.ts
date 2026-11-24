import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkspaceResponse = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The name of the workspace. */
  name?: string;
  /** The email domains that are associated with this workspace. */
  emailDomains?: string[];
  /** Whether the workspace is an *organization*. */
  isOrganization?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const workspaceResponseProperties: s.Shape<WorkspaceResponse> = {
  gid: s.optional(s.string()),
  resourceType: s.optional(s.string()),
  name: s.optional(s.string()),
  emailDomains: s.optional(s.array(s.string())),
  isOrganization: s.optional(s.boolean()),
  _keysMap: {
    resourceType: "resource_type",
    emailDomains: "email_domains",
    isOrganization: "is_organization",
  },
};

export const workspaceResponseInternalSchema: Schema<WorkspaceResponse> = s.object<WorkspaceResponse>(
  workspaceResponseProperties,
  { additionalProperties: s.json() },
);

export const workspaceResponseSchema: Schema<WorkspaceResponse> = s.lazySchema(() =>
  s.object<WorkspaceResponse>(
    {
      ...workspaceResponseProperties,
      emailDomains: s.optional(s.array(s.string().check(s.url()))),
    },
    { additionalProperties: s.json() },
  ),
);
