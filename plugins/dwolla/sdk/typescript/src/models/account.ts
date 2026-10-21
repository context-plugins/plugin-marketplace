import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type Account = {
  links?: Record<string, HalLink>;
  id?: string;
  name?: string;
  timezoneOffset?: number;
  type?: string;
};

export const accountSchema: Schema<Account> = s.object<Account>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => halLinkSchema),
    ),
  ),
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  timezoneOffset: s.optional(s.float64()),
  type: s.optional(s.string()),
  _keysMap: {
    links: "_links",
  },
});
