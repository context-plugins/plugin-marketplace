import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationSchema, type Pagination } from "./pagination.js";
import { webhookLogSchema, type WebhookLog } from "./webhook-log.js";

export type WebhooksLogsResponse = {
  data?: WebhookLog[];
  meta?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhooksLogsResponseSchema: Schema<WebhooksLogsResponse> = s.object<WebhooksLogsResponse>(
  {
    data: s.optional(s.array(s.lazy(() => webhookLogSchema))),
    meta: s.optional(s.lazy(() => paginationSchema)),
  },
  { additionalProperties: s.json() },
);
