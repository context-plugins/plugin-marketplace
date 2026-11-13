import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BodyUpdateLogoApiV1WorkspacesLogoPost = {
  /** ID of the workspace. */
  workspaceId: number;
  /** Remove the current logo instead of uploading one. @default false */
  delete?: boolean;
  file: Uint8Array;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bodyUpdateLogoApiV1WorkspacesLogoPostProperties: s.Shape<BodyUpdateLogoApiV1WorkspacesLogoPost> = {
  workspaceId: s.int(),
  delete: s.defaulted(s.boolean(), false),
  file: s.bytes(),
  _keysMap: {
    workspaceId: "workspace_id",
  },
};

export const bodyUpdateLogoApiV1WorkspacesLogoPostInternalSchema: Schema<BodyUpdateLogoApiV1WorkspacesLogoPost> =
  s.object<BodyUpdateLogoApiV1WorkspacesLogoPost>(bodyUpdateLogoApiV1WorkspacesLogoPostProperties, {
    additionalProperties: s.json(),
  });

export const bodyUpdateLogoApiV1WorkspacesLogoPostSchema: Schema<BodyUpdateLogoApiV1WorkspacesLogoPost> =
  s.lazySchema(() =>
    s.object<BodyUpdateLogoApiV1WorkspacesLogoPost>(
      {
        ...bodyUpdateLogoApiV1WorkspacesLogoPostProperties,
        workspaceId: s.int().check(s.gte(0)),
      },
      { additionalProperties: s.json() },
    ),
  );
