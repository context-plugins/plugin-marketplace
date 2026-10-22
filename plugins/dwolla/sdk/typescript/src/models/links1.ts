import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type Links1 = {
  about?: HalLink;
};

export const links1Schema: Schema<Links1> = s.object<Links1>({
  about: s.optional(s.lazy(() => halLinkSchema)),
});
