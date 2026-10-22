import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded95Schema, type Embedded95 } from "./embedded95.js";
import { links37Schema, type Links37 } from "./links37.js";

export type MassPaymentsItemsResponse = {
  links?: Links37;
  embedded?: Embedded95;
  total?: number;
};

export const massPaymentsItemsResponseSchema: Schema<MassPaymentsItemsResponse> =
  s.object<MassPaymentsItemsResponse>({
    links: s.optional(s.lazy(() => links37Schema)),
    embedded: s.optional(s.lazy(() => embedded95Schema)),
    total: s.optional(s.int()),
    _keysMap: {
      links: "_links",
      embedded: "_embedded",
    },
  });
