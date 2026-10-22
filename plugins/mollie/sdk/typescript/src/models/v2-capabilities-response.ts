import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded11Schema, type Embedded11 } from "./embedded11.js";
import { links69Schema, type Links69 } from "./links69.js";

export type V2CapabilitiesResponse = {
  /** The number of items in this result set. */
  count: number;
  embedded: Embedded11;
  links: Links69;
};

export const v2CapabilitiesResponseSchema: Schema<V2CapabilitiesResponse> = s.object<V2CapabilitiesResponse>({
  count: s.int(),
  embedded: embedded11Schema,
  links: links69Schema,
  _keysMap: {
    embedded: "_embedded",
    links: "_links",
  },
});
