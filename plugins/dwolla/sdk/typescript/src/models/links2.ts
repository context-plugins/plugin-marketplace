import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type Links2 = {
  self?: HalLink;
};

export const links2Schema: Schema<Links2> = s.object<Links2>({
  self: s.optional(s.lazy(() => halLinkSchema)),
});
