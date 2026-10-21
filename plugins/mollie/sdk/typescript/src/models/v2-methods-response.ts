import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded19Schema, type Embedded19 } from "./embedded19.js";
import { links70Schema, type Links70 } from "./links70.js";

export type V2MethodsResponse = {
  /** The number of payment method objects in this result set. Results are **not** paginated. */
  count: number;
  embedded: Embedded19;
  links: Links70;
};

export const v2MethodsResponseSchema: Schema<V2MethodsResponse> = s.object<V2MethodsResponse>({
  count: s.int(),
  embedded: embedded19Schema,
  links: links70Schema,
  _keysMap: {
    embedded: "_embedded",
    links: "_links",
  },
});
