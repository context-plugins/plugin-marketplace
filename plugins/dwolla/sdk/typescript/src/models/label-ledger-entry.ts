import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type LabelLedgerEntry = {
  links?: Record<string, HalLink>;
  id?: string;
  amount?: Amount;
  created?: Date;
};

export const labelLedgerEntrySchema: Schema<LabelLedgerEntry> = s.object<LabelLedgerEntry>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => halLinkSchema),
    ),
  ),
  id: s.optional(s.string()),
  amount: s.optional(s.lazy(() => amountSchema)),
  created: s.optional(s.dateTime()),
  _keysMap: {
    links: "_links",
  },
});
