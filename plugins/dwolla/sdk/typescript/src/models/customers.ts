import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded4Schema, type Embedded4 } from "./embedded4.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type Customers = {
  links?: Record<string, HalLink>;
  embedded?: Embedded4;
  total?: number;
};

export const customersSchema: Schema<Customers> = s.object<Customers>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => halLinkSchema),
    ),
  ),
  embedded: s.optional(s.lazy(() => embedded4Schema)),
  total: s.optional(s.int()),
  _keysMap: {
    links: "_links",
    embedded: "_embedded",
  },
});
