import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  directConnectGatewayAttachmentSchema,
  type DirectConnectGatewayAttachment,
} from "./direct-connect-gateway-attachment.js";

export type DescribeDirectConnectGatewayAttachmentsResult = {
  /** The attachments. */
  directConnectGatewayAttachments?: DirectConnectGatewayAttachment[];
  /** The token to retrieve the next page. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeDirectConnectGatewayAttachmentsResultSchema: Schema<DescribeDirectConnectGatewayAttachmentsResult> =
  s.object<DescribeDirectConnectGatewayAttachmentsResult>(
    {
      directConnectGatewayAttachments: s.optional(
        s.array(s.lazy(() => directConnectGatewayAttachmentSchema)),
      ),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
