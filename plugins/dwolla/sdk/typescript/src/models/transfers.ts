import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded2Schema, type Embedded2 } from "./embedded2.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type Transfers = {
  links?: Record<string, HalLink>;
  embedded?: Embedded2;
  total?: number;
};

export const transfersSchema: Schema<Transfers> = s.object<Transfers>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => halLinkSchema),
    ),
  ),
  embedded: s.optional(s.lazy(() => embedded2Schema)),
  total: s.optional(s.int()),
  _keysMap: {
    links: "_links",
    embedded: "_embedded",
  },
});
