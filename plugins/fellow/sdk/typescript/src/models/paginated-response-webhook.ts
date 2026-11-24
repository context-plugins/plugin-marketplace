import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pageInfoSchema, type PageInfo } from "./page-info.js";
import { webhookSchema, type Webhook } from "./webhook.js";

export type PaginatedResponseWebhook = {
  /** Information about a page returned in a paginated response. */
  pageInfo: PageInfo;
  data: Webhook[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedResponseWebhookSchema: Schema<PaginatedResponseWebhook> =
  s.object<PaginatedResponseWebhook>(
    {
      pageInfo: pageInfoSchema,
      data: s.array(s.lazy(() => webhookSchema)),
      _keysMap: {
        pageInfo: "page_info",
      },
    },
    { additionalProperties: s.json() },
  );
