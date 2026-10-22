import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aiConfigsLinkSchema, type AiConfigsLink } from "./ai-configs-link.js";

export type PaginatedLinks = {
  first?: AiConfigsLink;
  last?: AiConfigsLink;
  next?: AiConfigsLink;
  prev?: AiConfigsLink;
  self: AiConfigsLink;
};

export const paginatedLinksSchema: Schema<PaginatedLinks> = s.object<PaginatedLinks>({
  first: s.optional(s.lazy(() => aiConfigsLinkSchema)),
  last: s.optional(s.lazy(() => aiConfigsLinkSchema)),
  next: s.optional(s.lazy(() => aiConfigsLinkSchema)),
  prev: s.optional(s.lazy(() => aiConfigsLinkSchema)),
  self: aiConfigsLinkSchema,
});
