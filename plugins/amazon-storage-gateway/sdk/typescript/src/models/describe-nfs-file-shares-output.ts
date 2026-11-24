import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { nfsFileShareInfoSchema, type NfsFileShareInfo } from "./nfs-file-share-info.js";

export type DescribeNfsFileSharesOutput = {
  /** An array containing a description for each requested file share. */
  nfsFileShareInfoList?: NfsFileShareInfo[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeNfsFileSharesOutputSchema: Schema<DescribeNfsFileSharesOutput> =
  s.object<DescribeNfsFileSharesOutput>(
    {
      nfsFileShareInfoList: s.optional(s.array(s.lazy(() => nfsFileShareInfoSchema))),
      _keysMap: {
        nfsFileShareInfoList: "NFSFileShareInfoList",
      },
    },
    { additionalProperties: s.json() },
  );
