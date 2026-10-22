import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HalLink = {
  href?: string;
  type?: string;
  resourceType?: string;
};

export const halLinkSchema: Schema<HalLink> = s.object<HalLink>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
  resourceType: s.optional(s.string()),
  _keysMap: {
    resourceType: "resource-type",
  },
});
