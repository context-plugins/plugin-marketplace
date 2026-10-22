import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the file upload. */
export const AccountFileStatus1 = {
  Uploading: "UPLOADING",
  Uploaded: "UPLOADED",
  Failed: "FAILED",
  Deleted: "DELETED",
} as const;
export type AccountFileStatus1 = (typeof AccountFileStatus1)[keyof typeof AccountFileStatus1] | (string & {});

export const accountFileStatus1Schema: EnumSchema<AccountFileStatus1> =
  s.enumOf<AccountFileStatus1>(AccountFileStatus1);
