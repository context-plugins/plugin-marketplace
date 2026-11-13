import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ProductApp, productAppSchema } from "./product-app.js";
import { workspaceRoleSchema, type WorkspaceRole } from "./workspace-role.js";

export type WorkspaceInvitationView = {
  /** ID of the user user who sent the invitation */
  inviterId: string;
  /** The invited person's email. */
  userEmail: string;
  /** ID of the workspace */
  workspaceId: string;
  /** Workspace role granted by the invitation. */
  role: WorkspaceRole;
  /** The ID of the invitation @default "0" */
  id?: string;
  /** Product the invitation was sent from. @default ProductApp.Todoist */
  app?: ProductApp;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceInvitationViewSchema: Schema<WorkspaceInvitationView> =
  s.object<WorkspaceInvitationView>(
    {
      inviterId: s.string(),
      userEmail: s.string(),
      workspaceId: s.string(),
      role: workspaceRoleSchema,
      id: s.defaulted(s.string(), "0"),
      app: s.defaulted(productAppSchema, ProductApp.Todoist),
      _keysMap: {
        inviterId: "inviter_id",
        userEmail: "user_email",
        workspaceId: "workspace_id",
      },
    },
    { additionalProperties: s.json() },
  );
