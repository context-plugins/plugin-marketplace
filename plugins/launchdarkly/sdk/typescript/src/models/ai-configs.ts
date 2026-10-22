import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aiConfigSchema, type AiConfig } from "./ai-config.js";
import { paginatedLinksSchema, type PaginatedLinks } from "./paginated-links.js";

export type AiConfigs = {
  links?: PaginatedLinks;
  items: AiConfig[];
  totalCount: number;
};

export const aiConfigsSchema: Schema<AiConfigs> = s.object<AiConfigs>({
  links: s.optional(s.lazy(() => paginatedLinksSchema)),
  items: s.array(s.lazy(() => aiConfigSchema)),
  totalCount: s.int(),
  _keysMap: {
    links: "_links",
  },
});
