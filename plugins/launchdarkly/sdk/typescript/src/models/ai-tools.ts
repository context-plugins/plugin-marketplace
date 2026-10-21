import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aiToolSchema, type AiTool } from "./ai-tool.js";
import { paginatedLinksSchema, type PaginatedLinks } from "./paginated-links.js";

export type AiTools = {
  links?: PaginatedLinks;
  items: AiTool[];
  totalCount: number;
};

export const aiToolsSchema: Schema<AiTools> = s.object<AiTools>({
  links: s.optional(s.lazy(() => paginatedLinksSchema)),
  items: s.array(s.lazy(() => aiToolSchema)),
  totalCount: s.int(),
  _keysMap: {
    links: "_links",
  },
});
