import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request model to restore directory member. */
export type DirectoryMemberRestore = {
  /** Comment stored in version history for this restore @default "Restored" */
  comments?: string;
};

export const directoryMemberRestoreSchema: Schema<DirectoryMemberRestore> = s.object<DirectoryMemberRestore>({
  comments: s.defaulted(s.string(), "Restored"),
});
