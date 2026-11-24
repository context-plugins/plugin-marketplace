import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type RemoveTagsFromCertificateRequest = {
  /**
   * String that contains the ARN of the ACM Certificate with one or more tags that you want to
   * remove. This must be of the form:
   * arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012 For more
   * information about ARNs, see Amazon Resource Names (ARNs).
   */
  certificateArn: string;
  /** The key-value pair that defines the tag to remove. */
  tags: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const removeTagsFromCertificateRequestSchema: Schema<RemoveTagsFromCertificateRequest> =
  s.object<RemoveTagsFromCertificateRequest>(
    {
      certificateArn: s.string(),
      tags: s.array(s.lazy(() => tagSchema)),
      _keysMap: {
        certificateArn: "CertificateArn",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
