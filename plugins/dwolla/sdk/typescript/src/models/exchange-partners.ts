import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded92Schema, type Embedded92 } from "./embedded92.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type ExchangePartners = {
  links?: Record<string, HalLink>;
  embedded?: Embedded92;
  total?: number;
};

export const exchangePartnersSchema: Schema<ExchangePartners> = s.object<ExchangePartners>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => halLinkSchema),
    ),
  ),
  embedded: s.optional(s.lazy(() => embedded92Schema)),
  total: s.optional(s.int()),
  _keysMap: {
    links: "_links",
    embedded: "_embedded",
  },
});
