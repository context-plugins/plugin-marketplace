import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded87Schema, type Embedded87 } from "./embedded87.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type LabelLedgerEntries = {
  links?: Record<string, HalLink>;
  embedded?: Embedded87;
  total?: number;
};

export const labelLedgerEntriesSchema: Schema<LabelLedgerEntries> = s.object<LabelLedgerEntries>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => halLinkSchema),
    ),
  ),
  embedded: s.optional(s.lazy(() => embedded87Schema)),
  total: s.optional(s.int()),
  _keysMap: {
    links: "_links",
    embedded: "_embedded",
  },
});
