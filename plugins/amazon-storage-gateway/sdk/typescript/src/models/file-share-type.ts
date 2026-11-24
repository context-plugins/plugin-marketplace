import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FileShareType = {
  Nfs: "NFS",
  Smb: "SMB",
} as const;
export type FileShareType = (typeof FileShareType)[keyof typeof FileShareType] | (string & {});

export const fileShareTypeSchema: EnumSchema<FileShareType> = s.enumOf<FileShareType>(FileShareType);
