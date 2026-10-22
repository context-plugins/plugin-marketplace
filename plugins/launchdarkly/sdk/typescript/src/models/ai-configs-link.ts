import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiConfigsLink = {
  href?: string;
  type?: string;
};

export const aiConfigsLinkSchema: Schema<AiConfigsLink> = s.object<AiConfigsLink>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
