import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bitlinkBodySchema, type BitlinkBody } from "./bitlink-body.js";
import { clickLinkSchema, type ClickLink } from "./click-link.js";

export type SortedLinks = {
  links?: BitlinkBody[];
  sortedLinks?: ClickLink[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sortedLinksSchema: Schema<SortedLinks> = s.object<SortedLinks>(
  {
    links: s.optional(s.array(s.lazy(() => bitlinkBodySchema))),
    sortedLinks: s.optional(s.array(s.lazy(() => clickLinkSchema))),
    _keysMap: {
      sortedLinks: "sorted_links",
    },
  },
  { additionalProperties: s.json() },
);
