import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GrammarSlotTypeSource = {
  /** The name of the Amazon S3 bucket that contains the grammar source. */
  s3BucketName: string;
  /** The path to the grammar in the Amazon S3 bucket. */
  s3ObjectKey: string;
  /** The KMS key required to decrypt the contents of the grammar, if any. */
  kmsKeyArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const grammarSlotTypeSourceSchema: Schema<GrammarSlotTypeSource> = s.object<GrammarSlotTypeSource>(
  {
    s3BucketName: s.string(),
    s3ObjectKey: s.string(),
    kmsKeyArn: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
