import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ViewsLink = {
  href?: string;
  type?: string;
};

export const viewsLinkSchema: Schema<ViewsLink> = s.object<ViewsLink>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
