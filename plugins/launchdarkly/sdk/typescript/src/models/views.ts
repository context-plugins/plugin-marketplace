import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { viewSchema, type View } from "./view.js";
import { viewsPaginatedLinksSchema, type ViewsPaginatedLinks } from "./views-paginated-links.js";

export type Views = {
  links?: ViewsPaginatedLinks;
  items: View[];
  totalCount: number;
};

export const viewsSchema: Schema<Views> = s.object<Views>({
  links: s.optional(s.lazy(() => viewsPaginatedLinksSchema)),
  items: s.array(s.lazy(() => viewSchema)),
  totalCount: s.int(),
  _keysMap: {
    links: "_links",
  },
});
