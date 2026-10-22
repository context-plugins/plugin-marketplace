import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { labelLedgerEntrySchema, type LabelLedgerEntry } from "./label-ledger-entry.js";

export type Embedded87 = {
  ledgerEntries?: LabelLedgerEntry[];
};

export const embedded87Schema: Schema<Embedded87> = s.object<Embedded87>({
  ledgerEntries: s.optional(s.array(s.lazy(() => labelLedgerEntrySchema))),
  _keysMap: {
    ledgerEntries: "ledger-entries",
  },
});
