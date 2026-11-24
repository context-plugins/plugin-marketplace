import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type AddTagsToCertificateRequest = {
  /**
   * String that contains the ARN of the ACM certificate to which the tag is to be applied. This
   * must be of the form:
   * arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012 For more
   * information about ARNs, see Amazon Resource Names (ARNs).
   */
  certificateArn: string;
  /** The key-value pair that defines the tag. The tag value is optional. */
  tags: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addTagsToCertificateRequestSchema: Schema<AddTagsToCertificateRequest> =
  s.object<AddTagsToCertificateRequest>(
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
