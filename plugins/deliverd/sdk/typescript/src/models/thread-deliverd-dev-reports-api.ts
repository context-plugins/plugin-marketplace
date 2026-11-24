import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachmentSchema, type Attachment } from "./attachment.js";
import { contextSchema, type Context } from "./context.js";
import { messageSchema, type Message } from "./message.js";
import { status13Schema, type Status13 } from "./status13.js";

export type ThreadDeliverdDevReportsApi = {
  threadId: string;
  status: Status13;
  anchorStatus: string;
  createdOnVersion: number | null;
  currentVersion: number | null;
  quote: string | null;
  context: Context;
  messages: Message[];
  attachments: Attachment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const threadDeliverdDevReportsApiSchema: Schema<ThreadDeliverdDevReportsApi> =
  s.object<ThreadDeliverdDevReportsApi>(
    {
      threadId: s.string(),
      status: status13Schema,
      anchorStatus: s.string(),
      createdOnVersion: s.nullable(s.float64()),
      currentVersion: s.nullable(s.float64()),
      quote: s.nullable(s.string()),
      context: contextSchema,
      messages: s.array(s.lazy(() => messageSchema)),
      attachments: s.array(s.lazy(() => attachmentSchema)),
    },
    { additionalProperties: s.json() },
  );
