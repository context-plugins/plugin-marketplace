import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteFileShareInput = {
  /** The Amazon Resource Name (ARN) of the file share to be deleted. */
  fileShareArn: string;
  /**
   * If this value is set to true, the operation deletes a file share immediately and aborts all
   * data uploads to Amazon Web Services. Otherwise, the file share is not deleted until all data is
   * uploaded to Amazon Web Services. This process aborts the data upload process, and the file
   * share enters the FORCE_DELETING status. Valid Values: true | false
   */
  forceDelete?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteFileShareInputSchema: Schema<DeleteFileShareInput> = s.object<DeleteFileShareInput>(
  {
    fileShareArn: s.string(),
    forceDelete: s.optional(s.boolean()),
    _keysMap: {
      fileShareArn: "FileShareARN",
      forceDelete: "ForceDelete",
    },
  },
  { additionalProperties: s.json() },
);
