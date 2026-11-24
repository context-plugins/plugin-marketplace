import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachmentSchema, type Attachment } from "./attachment.js";
import {
  personOrttoTransactionalApiSchema,
  type PersonOrttoTransactionalApi,
} from "./person-ortto-transactional-api.js";

export type TransactionalSendRequest = {
  /** ID of the transactional email asset to send. */
  emailId?: string;
  /** When true, the message is sent as a marketing email. */
  nonTransactional?: boolean;
  mergeBy?: string[];
  people?: PersonOrttoTransactionalApi[];
  htmlBody?: string;
  subject?: string;
  attachments?: Attachment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transactionalSendRequestProperties: s.Shape<TransactionalSendRequest> = {
  emailId: s.optional(s.string()),
  nonTransactional: s.optional(s.boolean()),
  mergeBy: s.optional(s.array(s.string())),
  people: s.optional(s.array(s.lazy(() => personOrttoTransactionalApiSchema))),
  htmlBody: s.optional(s.string()),
  subject: s.optional(s.string()),
  attachments: s.optional(s.array(s.lazy(() => attachmentSchema))),
  _keysMap: {
    emailId: "email_id",
    nonTransactional: "non_transactional",
    mergeBy: "merge_by",
    htmlBody: "html_body",
  },
};

export const transactionalSendRequestInternalSchema: Schema<TransactionalSendRequest> =
  s.object<TransactionalSendRequest>(transactionalSendRequestProperties, { additionalProperties: s.json() });

export const transactionalSendRequestSchema: Schema<TransactionalSendRequest> = s.lazySchema(() =>
  s.object<TransactionalSendRequest>(
    {
      ...transactionalSendRequestProperties,
      attachments: s.optional(s.array(s.lazy(() => attachmentSchema)).check(s.maxLength(5))),
    },
    { additionalProperties: s.json() },
  ),
);
