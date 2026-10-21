import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type Root = {
  links?: Record<string, HalLink>;
};

export const rootSchema: Schema<Root> = s.object<Root>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => halLinkSchema),
    ),
  ),
  _keysMap: {
    links: "_links",
  },
});
