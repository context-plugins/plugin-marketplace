import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kind15Schema, type Kind15 } from "./kind15.js";

export type UrlPost = {
  kind?: Kind15;
  url?: string;
  substring?: string;
  pattern?: string;
};

export const urlPostSchema: Schema<UrlPost> = s.object<UrlPost>({
  kind: s.optional(s.lazy(() => kind15Schema)),
  url: s.optional(s.string()),
  substring: s.optional(s.string()),
  pattern: s.optional(s.string()),
});
