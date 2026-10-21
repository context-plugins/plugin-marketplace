import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** AccountFile status. */
export const AccountFileStatus = {
  Uploading: "UPLOADING",
  Uploaded: "UPLOADED",
  Failed: "FAILED",
  Deleted: "DELETED",
} as const;
export type AccountFileStatus = (typeof AccountFileStatus)[keyof typeof AccountFileStatus] | (string & {});

export const accountFileStatusSchema: EnumSchema<AccountFileStatus> =
  s.enumOf<AccountFileStatus>(AccountFileStatus);
