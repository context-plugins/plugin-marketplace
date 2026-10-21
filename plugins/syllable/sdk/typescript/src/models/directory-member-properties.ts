import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DirectoryMemberProperties = {
  Id: "id",
  Name: "name",
  NameExact: "name_exact",
  Type: "type",
  Extensions: "extensions",
  ContactTags: "contact_tags",
  CreatedAt: "created_at",
  UpdatedAt: "updated_at",
  DeletedAt: "deleted_at",
  CreatedBy: "created_by",
} as const;
export type DirectoryMemberProperties =
  | (typeof DirectoryMemberProperties)[keyof typeof DirectoryMemberProperties]
  | (string & {});

export const directoryMemberPropertiesSchema: EnumSchema<DirectoryMemberProperties> =
  s.enumOf<DirectoryMemberProperties>(DirectoryMemberProperties);
