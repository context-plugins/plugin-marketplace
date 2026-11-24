import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { roleDoiTConnectionsApiSchema, type RoleDoiTConnectionsApi } from "./role-doi-tconnections-api.js";

export type CloudflowCollaborator = {
  email?: string;
  role?: RoleDoiTConnectionsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cloudflowCollaboratorProperties: s.Shape<CloudflowCollaborator> = {
  email: s.optional(s.string()),
  role: s.optional(s.lazy(() => roleDoiTConnectionsApiSchema)),
};

export const cloudflowCollaboratorInternalSchema: Schema<CloudflowCollaborator> =
  s.object<CloudflowCollaborator>(cloudflowCollaboratorProperties, { additionalProperties: s.json() });

export const cloudflowCollaboratorSchema: Schema<CloudflowCollaborator> = s.lazySchema(() =>
  s.object<CloudflowCollaborator>(
    {
      ...cloudflowCollaboratorProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
