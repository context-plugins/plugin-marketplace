import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of operation */
export const Type = {
  Create: "create",
  Copy: "copy",
  Delete: "delete",
  SoftDelete: "softDelete",
  Recover: "recover",
  EnvironmentRename: "environmentRename",
  PitRestore: "pitRestore",
  EnvironmentAppInstall: "environmentAppInstall",
  EnvironmentAppUninstall: "environmentAppUninstall",
  EnvironmentAppUpdate: "environmentAppUpdate",
  EnvironmentAppHotfix: "environmentAppHotfix",
  Modify: "modify",
  Update: "update",
  Restart: "restart",
  MoveToAnotherAadTenant: "moveToAnotherAadTenant",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
