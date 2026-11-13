import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A class with fields representing a Filter which will be returned to clients in a sync (or
 * sync-like) response.
 */
export type FilterSyncView = {
  /** String ID of the filter. */
  id: string;
  /** Name of the filter. */
  name: string;
  /**
   * Query the filter searches for. See the [introduction to
   * filters](https://www.todoist.com/help/articles/introduction-to-filters-V98wIH) for examples.
   */
  query: string;
  /** Description of the filter, as markdown. Empty when the filter has none. */
  description: string;
  /**
   * Name of the filter icon color. Refer to the `name` column in the [Colors](#tag/Colors) guide.
   */
  color: string;
  /** Position of the filter in the filter list; the smallest value sorts first. */
  itemOrder: number;
  /**
   * Fractional-indexing order key; filters sort by comparing keys lexicographically. `null` for
   * accounts not yet migrated.
   */
  orderKey: string | null;
  /** Whether the filter is marked as deleted. */
  isDeleted: boolean;
  /** Whether the filter is a favorite. */
  isFavorite: boolean;
  /** Whether the filter is read-only because it belongs to a canceled subscription. */
  isFrozen: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filterSyncViewSchema: Schema<FilterSyncView> = s.object<FilterSyncView>(
  {
    id: s.string(),
    name: s.string(),
    query: s.string(),
    description: s.string(),
    color: s.string(),
    itemOrder: s.int(),
    orderKey: s.nullable(s.string()),
    isDeleted: s.boolean(),
    isFavorite: s.boolean(),
    isFrozen: s.boolean(),
    _keysMap: {
      itemOrder: "item_order",
      orderKey: "order_key",
      isDeleted: "is_deleted",
      isFavorite: "is_favorite",
      isFrozen: "is_frozen",
    },
  },
  { additionalProperties: s.json() },
);
