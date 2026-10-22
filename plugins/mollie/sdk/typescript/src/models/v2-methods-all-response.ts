import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded20Schema, type Embedded20 } from "./embedded20.js";
import { links70Schema, type Links70 } from "./links70.js";

export type V2MethodsAllResponse = {
  /** The number of payment method objects in this result set. Results are **not** paginated. */
  count: number;
  embedded: Embedded20;
  links: Links70;
};

export const v2MethodsAllResponseSchema: Schema<V2MethodsAllResponse> = s.object<V2MethodsAllResponse>({
  count: s.int(),
  embedded: embedded20Schema,
  links: links70Schema,
  _keysMap: {
    embedded: "_embedded",
    links: "_links",
  },
});
