import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RefreshCacheInput = {
  /** The Amazon Resource Name (ARN) of the file share you want to refresh. */
  fileShareArn: string;
  /**
   * A comma-separated list of the paths of folders to refresh in the cache. The default is ["/"].
   * The default refreshes objects and folders at the root of the Amazon S3 bucket. If Recursive is
   * set to true, the entire S3 bucket that the file share has access to is refreshed. Do not
   * include / when specifying folder names. For example, you would specify samplefolder rather than
   * samplefolder/.
   */
  folderList?: string[];
  /**
   * A value that specifies whether to recursively refresh folders in the cache. The refresh
   * includes folders that were in the cache the last time the gateway listed the folder's contents.
   * If this value set to true, each folder that is listed in FolderList is recursively updated.
   * Otherwise, subfolders listed in FolderList are not refreshed. Only objects that are in folders
   * listed directly under FolderList are found and used for the update. The default is true. Valid
   * Values: true | false
   */
  recursive?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const refreshCacheInputSchema: Schema<RefreshCacheInput> = s.object<RefreshCacheInput>(
  {
    fileShareArn: s.string(),
    folderList: s.optional(s.array(s.string())),
    recursive: s.optional(s.boolean()),
    _keysMap: {
      fileShareArn: "FileShareARN",
      folderList: "FolderList",
      recursive: "Recursive",
    },
  },
  { additionalProperties: s.json() },
);
