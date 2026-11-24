import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageTypeSchema, type MessageType } from "./message-type.js";
import {
  statusCallnodeIoMessagingApiSchema,
  type StatusCallnodeIoMessagingApi,
} from "./status-callnode-io-messaging-api.js";

export type Message = {
  id?: string;
  status?: StatusCallnodeIoMessagingApi;
  /** Plus sign followed by 7–15 digits. */
  from?: string;
  /** Plus sign followed by 7–15 digits. */
  to?: string;
  messageType?: MessageType;
  segments?: number;
  cost?: number;
  errorCode?: string | null;
  errorMessage?: string | null;
  deliveredAt?: Date | null;
  createdAt?: Date;
  metadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const messageProperties: s.Shape<Message> = {
  id: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusCallnodeIoMessagingApiSchema)),
  from: s.optional(s.string()),
  to: s.optional(s.string()),
  messageType: s.optional(s.lazy(() => messageTypeSchema)),
  segments: s.optional(s.int()),
  cost: s.optional(s.float64()),
  errorCode: s.optionalNullable(s.string()),
  errorMessage: s.optionalNullable(s.string()),
  deliveredAt: s.optionalNullable(s.dateTime()),
  createdAt: s.optional(s.dateTime()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
};

export const messageInternalSchema: Schema<Message> = s.object<Message>(messageProperties, {
  additionalProperties: s.json(),
});

export const messageSchema: Schema<Message> = s.lazySchema(() =>
  s.object<Message>(
    {
      ...messageProperties,
      from: s.optional(s.string().check(s.pattern("^\\+[1-9]\\d{6,14}$"))),
      to: s.optional(s.string().check(s.pattern("^\\+[1-9]\\d{6,14}$"))),
    },
    { additionalProperties: s.json() },
  ),
);
