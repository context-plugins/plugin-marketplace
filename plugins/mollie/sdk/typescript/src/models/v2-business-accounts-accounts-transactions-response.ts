import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded39Schema, type Embedded39 } from "./embedded39.js";

export type V2BusinessAccountsAccountsTransactionsResponse = {
  /**
   * The number of items in this result set. If more items are available, a `_links.next` URL will
   * be present in the result as well.
   *
   * The maximum number of items per result set is controlled by the `limit` property provided in
   * the request. The default limit is 50 items.
   */
  count: number;
  embedded: Embedded39;
};

export const v2BusinessAccountsAccountsTransactionsResponseSchema: Schema<V2BusinessAccountsAccountsTransactionsResponse> =
  s.object<V2BusinessAccountsAccountsTransactionsResponse>({
    count: s.int(),
    embedded: embedded39Schema,
    _keysMap: {
      embedded: "_embedded",
    },
  });
