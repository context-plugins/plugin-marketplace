import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { hyperLinkSchema, type HyperLink } from "./hyper-link.js";

/** List of Einstein Bots API endpoints for HATEOS compliancy. */
export type Links = {
  /** Hyperlink object included in the Links schema */
  self: HyperLink;
  /** Hyperlink object included in the Links schema */
  messages?: HyperLink;
  /** Hyperlink object included in the Links schema */
  session?: HyperLink;
};

export const linksSchema: Schema<Links> = s.object<Links>({
  self: hyperLinkSchema,
  messages: s.optional(s.lazy(() => hyperLinkSchema)),
  session: s.optional(s.lazy(() => hyperLinkSchema)),
});
