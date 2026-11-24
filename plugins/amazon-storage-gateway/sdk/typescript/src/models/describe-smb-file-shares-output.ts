import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { smbFileShareInfoSchema, type SmbFileShareInfo } from "./smb-file-share-info.js";

export type DescribeSmbFileSharesOutput = {
  /** An array containing a description for each requested file share. */
  smbFileShareInfoList?: SmbFileShareInfo[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeSmbFileSharesOutputSchema: Schema<DescribeSmbFileSharesOutput> =
  s.object<DescribeSmbFileSharesOutput>(
    {
      smbFileShareInfoList: s.optional(s.array(s.lazy(() => smbFileShareInfoSchema))),
      _keysMap: {
        smbFileShareInfoList: "SMBFileShareInfoList",
      },
    },
    { additionalProperties: s.json() },
  );
