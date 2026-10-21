import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { viewsLinkSchema, type ViewsLink } from "./views-link.js";

export type ViewsPaginatedLinks = {
  first?: ViewsLink;
  last?: ViewsLink;
  next?: ViewsLink;
  prev?: ViewsLink;
  self: ViewsLink;
};

export const viewsPaginatedLinksSchema: Schema<ViewsPaginatedLinks> = s.object<ViewsPaginatedLinks>({
  first: s.optional(s.lazy(() => viewsLinkSchema)),
  last: s.optional(s.lazy(() => viewsLinkSchema)),
  next: s.optional(s.lazy(() => viewsLinkSchema)),
  prev: s.optional(s.lazy(() => viewsLinkSchema)),
  self: viewsLinkSchema,
});
