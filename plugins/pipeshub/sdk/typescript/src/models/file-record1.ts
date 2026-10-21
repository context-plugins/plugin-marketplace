import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FileRecord1 = {
  id: string;
  orgId: string;
  name: string;
  extension: string;
  etag?: string | null;
  ctag?: string | null;
  md5Checksum?: string | null;
  quickXorHash?: string | null;
  crc32Hash?: string | null;
  sha1Hash?: string | null;
  sha256Hash?: string | null;
  mimeType?: string | null;
  sizeInBytes?: number | null;
  isFile: boolean;
  webUrl?: string | null;
  path?: string | null;
  localFsRelativePath?: string | null;
};

export const fileRecord1Schema: Schema<FileRecord1> = s.object<FileRecord1>({
  id: s.string(),
  orgId: s.string(),
  name: s.string(),
  extension: s.string(),
  etag: s.optionalNullable(s.string()),
  ctag: s.optionalNullable(s.string()),
  md5Checksum: s.optionalNullable(s.string()),
  quickXorHash: s.optionalNullable(s.string()),
  crc32Hash: s.optionalNullable(s.string()),
  sha1Hash: s.optionalNullable(s.string()),
  sha256Hash: s.optionalNullable(s.string()),
  mimeType: s.optionalNullable(s.string()),
  sizeInBytes: s.optionalNullable(s.int()),
  isFile: s.boolean(),
  webUrl: s.optionalNullable(s.string()),
  path: s.optionalNullable(s.string()),
  localFsRelativePath: s.optionalNullable(s.string()),
});
