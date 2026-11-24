import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionItemSchema, type ActionItem } from "./action-item.js";
import { pageInfoSchema, type PageInfo } from "./page-info.js";

export type PaginatedResponseActionItem = {
  /** Information about a page returned in a paginated response. */
  pageInfo: PageInfo;
  data: ActionItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedResponseActionItemSchema: Schema<PaginatedResponseActionItem> =
  s.object<PaginatedResponseActionItem>(
    {
      pageInfo: pageInfoSchema,
      data: s.array(s.lazy(() => actionItemSchema)),
      _keysMap: {
        pageInfo: "page_info",
      },
    },
    { additionalProperties: s.json() },
  );
