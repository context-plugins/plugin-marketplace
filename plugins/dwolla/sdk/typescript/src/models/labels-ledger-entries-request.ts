import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount8Schema, type Amount8 } from "./amount8.js";

export type LabelsLedgerEntriesRequest = {
  amount: Amount8;
};

export const labelsLedgerEntriesRequestSchema: Schema<LabelsLedgerEntriesRequest> =
  s.object<LabelsLedgerEntriesRequest>({
    amount: amount8Schema,
  });
