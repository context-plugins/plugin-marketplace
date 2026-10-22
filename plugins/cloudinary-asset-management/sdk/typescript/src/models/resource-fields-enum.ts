import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Valid field names for selective resource responses. */
export const ResourceFieldsEnum = {
  PublicId: "public_id",
  AssetId: "asset_id",
  AssetFolder: "asset_folder",
  Folder: "folder",
  DisplayName: "display_name",
  Format: "format",
  Version: "version",
  ResourceType: "resource_type",
  Type: "type",
  CreatedAt: "created_at",
  Bytes: "bytes",
  Width: "width",
  Height: "height",
  Backup: "backup",
  AccessControl: "access_control",
  AccessMode: "access_mode",
  Url: "url",
  SecureUrl: "secure_url",
  Tags: "tags",
  Context: "context",
  Metadata: "metadata",
  ModerationKind: "moderation_kind",
  ModerationStatus: "moderation_status",
  Placeholder: "placeholder",
  Regions: "regions",
  IsAudio: "is_audio",
} as const;
export type ResourceFieldsEnum = (typeof ResourceFieldsEnum)[keyof typeof ResourceFieldsEnum] | (string & {});

export const resourceFieldsEnumSchema: EnumSchema<ResourceFieldsEnum> =
  s.enumOf<ResourceFieldsEnum>(ResourceFieldsEnum);
