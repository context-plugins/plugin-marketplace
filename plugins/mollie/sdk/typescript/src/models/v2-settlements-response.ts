import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded3Schema, type Embedded3 } from "./embedded3.js";
import { listLinksSchema, type ListLinks } from "./list-links.js";

export type V2SettlementsResponse = {
  /**
   * The number of items in this result set. If more items are available, a `_links.next` URL will
   * be present in the result as well.
   *
   * The maximum number of items per result set is controlled by the `limit` property provided in
   * the request. The default limit is 50 items.
   */
  count: number;
  embedded: Embedded3;
  /**
   * Links to help navigate through the lists of items. Every URL object will contain an `href` and
   * a `type` field.
   */
  links: ListLinks;
};

export const v2SettlementsResponseSchema: Schema<V2SettlementsResponse> = s.object<V2SettlementsResponse>({
  count: s.int(),
  embedded: embedded3Schema,
  links: listLinksSchema,
  _keysMap: {
    embedded: "_embedded",
    links: "_links",
  },
});
