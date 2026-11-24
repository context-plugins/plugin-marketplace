import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeSmbFileSharesInput = {
  /** An array containing the Amazon Resource Name (ARN) of each file share to be described. */
  fileShareArnList: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeSmbFileSharesInputSchema: Schema<DescribeSmbFileSharesInput> =
  s.object<DescribeSmbFileSharesInput>(
    {
      fileShareArnList: s.array(s.string()),
      _keysMap: {
        fileShareArnList: "FileShareARNList",
      },
    },
    { additionalProperties: s.json() },
  );
