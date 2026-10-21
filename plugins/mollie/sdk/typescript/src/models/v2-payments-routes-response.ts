import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded30Schema, type Embedded30 } from "./embedded30.js";
import { links73Schema, type Links73 } from "./links73.js";

export type V2PaymentsRoutesResponse = {
  /**
   * The number of items in this result set. If more items are available, a `_links.next` URL will
   * be present in the result as well.
   *
   * The maximum number of items per result set is controlled by the `limit` property provided in
   * the request. The default limit is 50 items.
   */
  count: number;
  embedded: Embedded30;
  /**
   * Links to help navigate through the lists of items. Every URL object will contain an `href` and
   * a `type` field.
   */
  links: Links73;
};

export const v2PaymentsRoutesResponseSchema: Schema<V2PaymentsRoutesResponse> =
  s.object<V2PaymentsRoutesResponse>({
    count: s.int(),
    embedded: embedded30Schema,
    links: links73Schema,
    _keysMap: {
      embedded: "_embedded",
      links: "_links",
    },
  });
