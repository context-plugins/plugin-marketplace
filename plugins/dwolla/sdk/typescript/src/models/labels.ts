import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded86Schema, type Embedded86 } from "./embedded86.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type Labels = {
  links?: Record<string, HalLink>;
  embedded?: Embedded86;
  total?: number;
};

export const labelsSchema: Schema<Labels> = s.object<Labels>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => halLinkSchema),
    ),
  ),
  embedded: s.optional(s.lazy(() => embedded86Schema)),
  total: s.optional(s.int()),
  _keysMap: {
    links: "_links",
    embedded: "_embedded",
  },
});
