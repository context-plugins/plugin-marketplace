import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LabelSyncView = {
  id: string;
  name: string;
  color: string;
  itemOrder: number;
  orderKey: string | null;
  isFavorite: boolean;
  isDeleted: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const labelSyncViewSchema: Schema<LabelSyncView> = s.object<LabelSyncView>(
  {
    id: s.string(),
    name: s.string(),
    color: s.string(),
    itemOrder: s.int(),
    orderKey: s.nullable(s.string()),
    isFavorite: s.boolean(),
    isDeleted: s.boolean(),
    _keysMap: {
      itemOrder: "item_order",
      orderKey: "order_key",
      isFavorite: "is_favorite",
      isDeleted: "is_deleted",
    },
  },
  { additionalProperties: s.json() },
);
