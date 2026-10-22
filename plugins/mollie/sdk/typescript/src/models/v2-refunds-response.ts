import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded21Schema, type Embedded21 } from "./embedded21.js";
import { listLinksSchema, type ListLinks } from "./list-links.js";

export type V2RefundsResponse = {
  /**
   * The number of items in this result set. If more items are available, a `_links.next` URL will
   * be present in the result as well.
   *
   * The maximum number of items per result set is controlled by the `limit` property provided in
   * the request. The default limit is 50 items.
   */
  count: number;
  embedded: Embedded21;
  /**
   * Links to help navigate through the lists of items. Every URL object will contain an `href` and
   * a `type` field.
   */
  links: ListLinks;
};

export const v2RefundsResponseSchema: Schema<V2RefundsResponse> = s.object<V2RefundsResponse>({
  count: s.int(),
  embedded: embedded21Schema,
  links: listLinksSchema,
  _keysMap: {
    embedded: "_embedded",
    links: "_links",
  },
});
