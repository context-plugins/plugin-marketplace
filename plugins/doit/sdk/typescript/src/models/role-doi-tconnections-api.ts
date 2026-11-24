import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RoleDoiTConnectionsApi = {
  Owner: "owner",
  Editor: "editor",
  User: "user",
} as const;
export type RoleDoiTConnectionsApi =
  | (typeof RoleDoiTConnectionsApi)[keyof typeof RoleDoiTConnectionsApi]
  | (string & {});

export const roleDoiTConnectionsApiSchema: EnumSchema<RoleDoiTConnectionsApi> =
  s.enumOf<RoleDoiTConnectionsApi>(RoleDoiTConnectionsApi);
