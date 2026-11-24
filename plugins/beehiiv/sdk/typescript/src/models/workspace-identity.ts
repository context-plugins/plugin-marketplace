import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkspaceIdentity = {
  /** The prefixed ID of the workspace. */
  id: string;
  /** The name of the workspace. */
  name: string;
  /** The email of the owner of the workspace. */
  ownerEmail: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceIdentitySchema: Schema<WorkspaceIdentity> = s.object<WorkspaceIdentity>(
  {
    id: s.string(),
    name: s.string(),
    ownerEmail: s.string(),
    _keysMap: {
      ownerEmail: "owner_email",
    },
  },
  { additionalProperties: s.json() },
);
