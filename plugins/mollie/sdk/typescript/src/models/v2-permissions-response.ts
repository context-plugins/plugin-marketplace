import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded9Schema, type Embedded9 } from "./embedded9.js";
import { links67Schema, type Links67 } from "./links67.js";

export type V2PermissionsResponse = {
  /**
   * The number of items in this result set. If more items are available, a `_links.next` URL will
   * be present in the result as well.
   *
   * The maximum number of items per result set is controlled by the `limit` property provided in
   * the request. The default limit is 50 items.
   */
  count: number;
  embedded: Embedded9;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links67;
};

export const v2PermissionsResponseSchema: Schema<V2PermissionsResponse> = s.object<V2PermissionsResponse>({
  count: s.int(),
  embedded: embedded9Schema,
  links: links67Schema,
  _keysMap: {
    embedded: "_embedded",
    links: "_links",
  },
});
