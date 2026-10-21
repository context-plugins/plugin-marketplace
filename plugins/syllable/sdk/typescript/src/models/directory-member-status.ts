import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DirectoryMemberStatus = {
  All: "all",
  Active: "active",
  Deleted: "deleted",
} as const;
export type DirectoryMemberStatus =
  | (typeof DirectoryMemberStatus)[keyof typeof DirectoryMemberStatus]
  | (string & {});

export const directoryMemberStatusSchema: EnumSchema<DirectoryMemberStatus> =
  s.enumOf<DirectoryMemberStatus>(DirectoryMemberStatus);
