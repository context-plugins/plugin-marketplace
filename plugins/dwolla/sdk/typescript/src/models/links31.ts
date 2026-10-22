import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type Links31 = {
  self?: HalLink;
  fundingSource?: HalLink;
};

export const links31Schema: Schema<Links31> = s.object<Links31>({
  self: s.optional(s.lazy(() => halLinkSchema)),
  fundingSource: s.optional(s.lazy(() => halLinkSchema)),
  _keysMap: {
    fundingSource: "funding-source",
  },
});
