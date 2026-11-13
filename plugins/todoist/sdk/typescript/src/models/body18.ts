import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body18 = {
  /** ID of the workspace containing the invitation. */
  workspaceId: number;
  /** Email address of the invited user. */
  userEmail: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body18Schema: Schema<Body18> = s.object<Body18>(
  {
    workspaceId: s.int(),
    userEmail: s.string(),
    _keysMap: {
      workspaceId: "workspace_id",
      userEmail: "user_email",
    },
  },
  { additionalProperties: s.json() },
);
