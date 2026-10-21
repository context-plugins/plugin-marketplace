import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded38Schema, type Embedded38 } from "./embedded38.js";

export type V2BusinessAccountsAccountsResponse = {
  /**
   * The number of items in this result set. If more items are available, a `_links.next` URL will
   * be present in the result as well.
   *
   * The maximum number of items per result set is controlled by the `limit` property provided in
   * the request. The default limit is 50 items.
   */
  count: number;
  embedded: Embedded38;
};

export const v2BusinessAccountsAccountsResponseSchema: Schema<V2BusinessAccountsAccountsResponse> =
  s.object<V2BusinessAccountsAccountsResponse>({
    count: s.int(),
    embedded: embedded38Schema,
    _keysMap: {
      embedded: "_embedded",
    },
  });
