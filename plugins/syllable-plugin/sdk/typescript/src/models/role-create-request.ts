import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { description28Schema, type Description28 } from "./unions/description28.js";

/** Request model to create a role. */
export type RoleCreateRequest = {
  /** The name of the role. */
  name: string;
  /** The description of the role. */
  description?: Description28;
  /**
   * The permissions associated with the role. Available permissions can be found by calling `GET
   * /permissions`.
   */
  permissions: string[];
};

export const roleCreateRequestSchema: Schema<RoleCreateRequest> = s.object<RoleCreateRequest>({
  name: s.string(),
  description: s.optional(s.lazy(() => description28Schema)),
  permissions: s.array(s.string()),
});
