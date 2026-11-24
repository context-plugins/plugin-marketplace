import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PortfolioAddItemRequest = {
  /** The item to add to the portfolio. */
  item: string;
  /**
   * An id of an item in this portfolio. The new item will be added before the one specified here.
   * `insert_before` and `insert_after` parameters cannot both be specified.
   */
  insertBefore?: string;
  /**
   * An id of an item in this portfolio. The new item will be added after the one specified here.
   * `insert_before` and `insert_after` parameters cannot both be specified.
   */
  insertAfter?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfolioAddItemRequestSchema: Schema<PortfolioAddItemRequest> =
  s.object<PortfolioAddItemRequest>(
    {
      item: s.string(),
      insertBefore: s.optional(s.string()),
      insertAfter: s.optional(s.string()),
      _keysMap: {
        insertBefore: "insert_before",
        insertAfter: "insert_after",
      },
    },
    { additionalProperties: s.json() },
  );
