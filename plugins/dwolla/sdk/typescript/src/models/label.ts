import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type Label = {
  links?: Record<string, HalLink>;
  id?: string;
  created?: Date;
  amount?: Amount;
};

export const labelSchema: Schema<Label> = s.object<Label>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => halLinkSchema),
    ),
  ),
  id: s.optional(s.string()),
  created: s.optional(s.dateTime()),
  amount: s.optional(s.lazy(() => amountSchema)),
  _keysMap: {
    links: "_links",
  },
});
