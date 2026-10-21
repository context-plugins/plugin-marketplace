import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded29Schema, type Embedded29 } from "./embedded29.js";
import { listLinksSchema, type ListLinks } from "./list-links.js";

export type V2TerminalsPairingCodesResponse = {
  /**
   * The number of items in this result set. If more items are available, a `_links.next` URL will
   * be present in the result as well.
   *
   * The maximum number of items per result set is controlled by the `limit` property provided in
   * the request. The default limit is 50 items.
   */
  count?: number;
  embedded?: Embedded29;
  /**
   * Links to help navigate through the lists of items. Every URL object will contain an `href` and
   * a `type` field.
   */
  links?: ListLinks;
};

export const v2TerminalsPairingCodesResponseSchema: Schema<V2TerminalsPairingCodesResponse> =
  s.object<V2TerminalsPairingCodesResponse>({
    count: s.optional(s.int()),
    embedded: s.optional(s.lazy(() => embedded29Schema)),
    links: s.optional(s.lazy(() => listLinksSchema)),
    _keysMap: {
      embedded: "_embedded",
      links: "_links",
    },
  });
