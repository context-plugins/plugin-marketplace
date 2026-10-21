import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { operationSchema, type Operation } from "./operation.js";
import { principalSchema, type Principal } from "./principal.js";

export type AssignFolderRolesRequest = {
  /** The user, group, or API key whose role assignments are being modified. */
  principal: Principal;
  /**
   * The operation to perform on the principal’s role assignments. `add` grants the specified roles;
   * `remove` revokes them.
   */
  operation: Operation;
  /** The role IDs to add or remove. */
  roles: string[];
};

export const assignFolderRolesRequestSchema: Schema<AssignFolderRolesRequest> =
  s.object<AssignFolderRolesRequest>({
    principal: principalSchema,
    operation: operationSchema,
    roles: s.array(s.string()),
  });
