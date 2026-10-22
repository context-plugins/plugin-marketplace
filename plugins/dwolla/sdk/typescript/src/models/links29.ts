import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type Links29 = {
  customer?: HalLink;
};

export const links29Schema: Schema<Links29> = s.object<Links29>({
  customer: s.optional(s.lazy(() => halLinkSchema)),
});
