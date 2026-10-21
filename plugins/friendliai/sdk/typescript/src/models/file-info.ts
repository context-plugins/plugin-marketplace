import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountFileStatus1Schema, type AccountFileStatus1 } from "./account-file-status1.js";
import { expiresatSchema, type Expiresat } from "./unions/expiresat.js";

/** File information. */
export type FileInfo = {
  /** ID of the file. */
  id: string;
  /** Name of the file. */
  name: string;
  /** Size of the file in bytes. */
  size: number;
  /** SHA256 hash of the file. */
  digest: string;
  /** ID of the project the file belongs to. */
  projectId: string;
  /** ID of the creator of the file. */
  creatorId: string;
  /** Unix timestamp (in seconds) of when the file was created. */
  createdAt: Date;
  /** Unix timestamp (in seconds) of when the file will expire. */
  expiresAt: Expiresat;
  /** Status of the file upload. */
  status: AccountFileStatus1;
};

export const fileInfoSchema: Schema<FileInfo> = s.object<FileInfo>({
  id: s.string(),
  name: s.string(),
  size: s.int(),
  digest: s.string(),
  projectId: s.string(),
  creatorId: s.string(),
  createdAt: s.dateTime(),
  expiresAt: expiresatSchema,
  status: accountFileStatus1Schema,
});
