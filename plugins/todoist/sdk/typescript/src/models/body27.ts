import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  templateContentInternalSchema,
  templateContentSchema,
  type TemplateContent,
} from "./template-content.js";
import { apiColorId2Schema, type ApiColorId2 } from "./unions/api-color-id2.js";

export type Body27 = {
  /** Saved template name, up to 255 characters. */
  name?: string | null;
  /** Saved template description, up to 1,000 characters. */
  description?: string | null;
  /** Replace content by exporting this project. Mutually exclusive with content. */
  projectId?: string | null;
  /** Template color. Omit to keep it unchanged. */
  color?: ApiColorId2 | null;
  /**
   * Associate a personal template with this workspace, keeping its ID. Workspace templates cannot
   * move to another workspace.
   */
  workspaceId?: string | null;
  /**
   * Share or unshare with workspace members. Only the author can change this setting. Omit to keep
   * it unchanged.
   */
  sharedWithWorkspaceMembers?: boolean | null;
  /**
   * Full replacement graph. Uses the supported writable fields of a raw preview, including optional
   * calendar defaults. IDs refer only to nodes in this payload. Mutually exclusive with project_id.
   * Omit to keep the content unchanged.
   */
  content?: TemplateContent | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body27Properties: s.Shape<Body27> = {
  name: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  projectId: s.optionalNullable(s.string()),
  color: s.optionalNullable(s.lazy(() => apiColorId2Schema)),
  workspaceId: s.optionalNullable(s.string()),
  sharedWithWorkspaceMembers: s.optionalNullable(s.boolean()),
  content: s.optionalNullable(s.lazy(() => templateContentInternalSchema)),
  _keysMap: {
    projectId: "project_id",
    workspaceId: "workspace_id",
    sharedWithWorkspaceMembers: "shared_with_workspace_members",
  },
};

export const body27InternalSchema: Schema<Body27> = s.object<Body27>(body27Properties, {
  additionalProperties: s.json(),
});

export const body27Schema: Schema<Body27> = s.lazySchema(() =>
  s.object<Body27>(
    {
      ...body27Properties,
      name: s.optionalNullable(s.string().check(s.maxLength(255))),
      description: s.optionalNullable(s.string().check(s.maxLength(1000))),
      content: s.optionalNullable(s.lazy(() => templateContentSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
