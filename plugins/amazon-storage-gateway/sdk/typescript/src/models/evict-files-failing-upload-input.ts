import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EvictFilesFailingUploadInput = {
  /**
   * The Amazon Resource Name (ARN) of the file share for which you want to start the cache clean
   * operation.
   */
  fileShareArn: string;
  /**
   * Specifies whether cache entries with full or partial file data currently stored on the gateway
   * will be forcibly removed by the cache clean operation. Valid arguments: False - The cache clean
   * operation skips cache entries failing upload if they are associated with data currently stored
   * on the gateway. This preserves the cached data. True - The cache clean operation removes cache
   * entries failing upload even if they are associated with data currently stored on the gateway.
   * This deletes the cached data. If ForceRemove is set to True, the cache clean operation will
   * delete file data from the gateway
   */
  forceRemove?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const evictFilesFailingUploadInputSchema: Schema<EvictFilesFailingUploadInput> =
  s.object<EvictFilesFailingUploadInput>(
    {
      fileShareArn: s.string(),
      forceRemove: s.optional(s.boolean()),
      _keysMap: {
        fileShareArn: "FileShareARN",
        forceRemove: "ForceRemove",
      },
    },
    { additionalProperties: s.json() },
  );
