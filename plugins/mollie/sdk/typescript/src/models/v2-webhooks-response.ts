import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded15Schema, type Embedded15 } from "./embedded15.js";
import { listLinksSchema, type ListLinks } from "./list-links.js";

export type V2WebhooksResponse = {
  /**
   * The number of items in this result set. If more items are available, a `_links.next` URL will
   * be present in the result as well.
   *
   * The maximum number of items per result set is controlled by the `limit` property provided in
   * the request. The default limit is 50 items.
   */
  count: number;
  embedded: Embedded15;
  /**
   * Links to help navigate through the lists of items. Every URL object will contain an `href` and
   * a `type` field.
   */
  links: ListLinks;
};

export const v2WebhooksResponseSchema: Schema<V2WebhooksResponse> = s.object<V2WebhooksResponse>({
  count: s.int(),
  embedded: embedded15Schema,
  links: listLinksSchema,
  _keysMap: {
    embedded: "_embedded",
    links: "_links",
  },
});
