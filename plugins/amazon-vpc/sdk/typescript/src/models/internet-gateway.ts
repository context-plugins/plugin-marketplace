import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachmentSchema, type Attachment } from "./attachment.js";
import { tagSchema, type Tag } from "./tag.js";

/** Describes an internet gateway */
export type InternetGateway = {
  /** The ID of the internet gateway */
  internetGatewayId?: string;
  /** Any VPCs attached to the internet gateway */
  attachments?: Attachment[];
  /** The ID of the AWS account that owns the internet gateway */
  ownerId?: string;
  /** Any tags assigned to the internet gateway */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const internetGatewaySchema: Schema<InternetGateway> = s.object<InternetGateway>(
  {
    internetGatewayId: s.optional(s.string()),
    attachments: s.optional(s.array(s.lazy(() => attachmentSchema))),
    ownerId: s.optional(s.string()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
  },
  { additionalProperties: s.json() },
);
