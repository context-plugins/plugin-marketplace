import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paginatedResponseActionItemSchema,
  type PaginatedResponseActionItem,
} from "./paginated-response-action-item.js";

/** Response containing a paginated list of action items. */
export type ActionItemsListResponse = {
  actionItems: PaginatedResponseActionItem;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const actionItemsListResponseSchema: Schema<ActionItemsListResponse> =
  s.object<ActionItemsListResponse>(
    {
      actionItems: paginatedResponseActionItemSchema,
      _keysMap: {
        actionItems: "action_items",
      },
    },
    { additionalProperties: s.json() },
  );
