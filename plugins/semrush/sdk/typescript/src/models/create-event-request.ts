import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventAttachmentSchema, type EventAttachment } from "./event-attachment.js";

export type CreateEventRequest = {
  /** type of event */
  type?: string;
  /** UUID, global event identifier, idempotency key; we suggest using V4 UUIDs */
  id?: string;
  /** Semrush's user ID */
  userId?: number;
  data?: string;
  /** Additional files */
  attachments?: EventAttachment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createEventRequestSchema: Schema<CreateEventRequest> = s.object<CreateEventRequest>(
  {
    type: s.optional(s.string()),
    id: s.optional(s.string()),
    userId: s.optional(s.int()),
    data: s.optional(s.string()),
    attachments: s.optional(s.array(s.lazy(() => eventAttachmentSchema))),
    _keysMap: {
      userId: "user_id",
    },
  },
  { additionalProperties: s.json() },
);
