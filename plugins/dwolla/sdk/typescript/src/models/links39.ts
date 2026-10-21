import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type Links39 = {
  self?: HalLink;
  toLedgerEntry?: HalLink;
  fromLedgerEntry?: HalLink;
};

export const links39Schema: Schema<Links39> = s.object<Links39>({
  self: s.optional(s.lazy(() => halLinkSchema)),
  toLedgerEntry: s.optional(s.lazy(() => halLinkSchema)),
  fromLedgerEntry: s.optional(s.lazy(() => halLinkSchema)),
  _keysMap: {
    toLedgerEntry: "to-ledger-entry",
    fromLedgerEntry: "from-ledger-entry",
  },
});
