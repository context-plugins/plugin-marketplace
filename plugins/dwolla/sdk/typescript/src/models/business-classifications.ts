import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded6Schema, type Embedded6 } from "./embedded6.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type BusinessClassifications = {
  links?: Record<string, HalLink>;
  embedded?: Embedded6;
  total?: number;
};

export const businessClassificationsSchema: Schema<BusinessClassifications> =
  s.object<BusinessClassifications>({
    links: s.optional(
      s.record(
        s.string(),
        s.lazy(() => halLinkSchema),
      ),
    ),
    embedded: s.optional(s.lazy(() => embedded6Schema)),
    total: s.optional(s.int()),
    _keysMap: {
      links: "_links",
      embedded: "_embedded",
    },
  });
