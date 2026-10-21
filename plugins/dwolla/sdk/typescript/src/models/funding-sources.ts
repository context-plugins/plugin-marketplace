import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded1Schema, type Embedded1 } from "./embedded1.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type FundingSources = {
  links?: Record<string, HalLink>;
  embedded?: Embedded1;
  total?: number;
};

export const fundingSourcesSchema: Schema<FundingSources> = s.object<FundingSources>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => halLinkSchema),
    ),
  ),
  embedded: s.optional(s.lazy(() => embedded1Schema)),
  total: s.optional(s.int()),
  _keysMap: {
    links: "_links",
    embedded: "_embedded",
  },
});
